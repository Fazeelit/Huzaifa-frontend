'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  GraduationCap,
  Search,
  Users,
  Wallet,
} from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Button from '../components/ui/Button';
import classService from '../../services/classService';
import studentService from '../../services/studentService';

function formatCurrency(value) {
  return `PKR ${Number(value || 0).toLocaleString()}`;
}

function normalizeClassName(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (normalized === 'nursary') return 'nursery';
  return normalized;
}

function getClassOptionValue(className, section) {
  return `${className}||${section}`;
}

function formatClassSelectionLabel(value) {
  if (value === 'All Classes') return 'All Classes';
  const [className, section] = String(value || '').split('||');
  return `${className || 'Unknown'} - Section ${section || 'N/A'}`;
}

function compareClassValues(left, right) {
  const normalizeName = (value) => {
    const normalized = normalizeClassName(value);
    if (normalized === 'nursery') return -1;
    const numericValue = Number(normalized);
    return Number.isNaN(numericValue) ? Number.MAX_SAFE_INTEGER : numericValue;
  };

  const classDiff = normalizeName(left?.name) - normalizeName(right?.name);
  if (classDiff !== 0) return classDiff;

  return String(left?.section || '').localeCompare(String(right?.section || ''), undefined, {
    numeric: true,
    sensitivity: 'base',
  });
}

function getLatestFeeRecord(student) {
  const feeRecords = Array.isArray(student?.feeRecords) ? student.feeRecords : [];

  return [...feeRecords].sort((left, right) => {
    const leftDate = new Date(`${left.month || 'January'} 1, ${left.year || 2000}`);
    const rightDate = new Date(`${right.month || 'January'} 1, ${right.year || 2000}`);
    return rightDate - leftDate;
  })[0] || null;
}

function getStudentSummary(student) {
  const feeStructure = student.feeStructure || {};
  const feeRecords = Array.isArray(student.feeRecords) ? student.feeRecords : [];
  const latestRecord = getLatestFeeRecord(student);
  const paidAmount = feeRecords
    .filter((record) => record.status === 'Paid')
    .reduce((sum, record) => sum + Number(record.amount || 0), 0);
  const expectedAmount = feeRecords.reduce((sum, record) => sum + Number(record.amount || 0), 0);
  const structureAmount = Number(feeStructure.registrationFee || 0) + Number(feeStructure.monthlyFee || 0);
  const totalExpected = Math.max(expectedAmount, structureAmount);
  const pendingAmount = Math.max(totalExpected - paidAmount, 0);
  const collectionRate = totalExpected > 0 ? Math.round((paidAmount / totalExpected) * 100) : 0;

  let status = 'No Record';
  if (latestRecord?.status === 'Paid') status = 'Paid';
  else if (pendingAmount > 0 && paidAmount > 0) status = 'Partial';
  else if (latestRecord?.status === 'Pending' || pendingAmount > 0) status = 'Pending';
  else if (latestRecord?.status === 'Unpaid') status = 'Unpaid';

  return {
    registrationFee: Number(feeStructure.registrationFee || 0),
    monthlyFee: Number(feeStructure.monthlyFee || 0),
    structureAmount,
    totalExpected,
    paidAmount,
    pendingAmount,
    collectionRate,
    latestRecord,
    status,
    recordsCount: feeRecords.length,
  };
}

function getStatusClasses(status) {
  if (status === 'Paid') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if (status === 'Partial') return 'bg-amber-50 text-amber-700 border-amber-200';
  if (status === 'Pending' || status === 'Unpaid') return 'bg-rose-50 text-rose-700 border-rose-200';
  return 'bg-slate-100 text-slate-600 border-slate-200';
}

export default function FeePage() {
  const router = useRouter();
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [classesResult, studentsResult] = await Promise.all([
        classService.getAll(),
        studentService.getAll(),
      ]);

      const nextClasses = classesResult.success ? [...classesResult.data].sort(compareClassValues) : [];
      setClasses(nextClasses);
      setStudents(studentsResult.success ? studentsResult.data : []);
      setSelectedClass((currentValue) => {
        const hasCurrentSelection = nextClasses.some(
          (classItem) => getClassOptionValue(classItem.name, classItem.section) === currentValue
        );

        if (hasCurrentSelection) {
          return currentValue;
        }

        if (nextClasses.length > 0) {
          return getClassOptionValue(nextClasses[0].name, nextClasses[0].section);
        }

        return 'All Classes';
      });
      setLoading(false);
    };

    loadData();
    window.addEventListener('studentEnrolled', loadData);
    window.addEventListener('studentUpdated', loadData);
    window.addEventListener('classesUpdated', loadData);

    return () => {
      window.removeEventListener('studentEnrolled', loadData);
      window.removeEventListener('studentUpdated', loadData);
      window.removeEventListener('classesUpdated', loadData);
    };
  }, []);

  const classOptions = useMemo(() => {
    const mappedOptions = [...classes].sort(compareClassValues).map((classItem) => ({
      value: getClassOptionValue(classItem.name, classItem.section),
      label: `${classItem.name} - Section ${classItem.section}`,
    }));

    return [{ value: 'All Classes', label: 'All Classes' }, ...mappedOptions];
  }, [classes]);

  const downloadableStudents = useMemo(() => {
    return students
      .filter((student) => {
        if (selectedClass === 'All Classes') return true;
        const [className, section] = selectedClass.split('||');
        return (
          normalizeClassName(student.class) === normalizeClassName(className)
          && String(student.section || '').trim() === String(section || '').trim()
        );
      })
      .map((student) => ({
        ...student,
        summary: getStudentSummary(student),
      }));
  }, [selectedClass, students]);

  const handleDownloadReport = () => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    const selectedClassLabel = formatClassSelectionLabel(selectedClass);
    const safeClassName = selectedClass === 'All Classes'
      ? 'all-classes'
      : selectedClass
        .replace(/\|\|/g, '-section-')
        .replace(/\s+/g, '-')
        .toLowerCase();
    const generatedOn = new Date().toLocaleString();
    const totalAssigned = downloadableStudents.reduce((sum, student) => sum + student.summary.totalExpected, 0);
    const totalCollected = downloadableStudents.reduce((sum, student) => sum + student.summary.paidAmount, 0);
    const totalPending = downloadableStudents.reduce((sum, student) => sum + student.summary.pendingAmount, 0);

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(18);
    pdf.text('Fee Report', 14, 18);

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text(`Class: ${selectedClassLabel}`, 14, 26);
    pdf.text(`Students: ${downloadableStudents.length}`, 14, 32);
    pdf.text(`Generated on: ${generatedOn}`, 14, 38);
    pdf.text(
      `Assigned: ${formatCurrency(totalAssigned)} | Collected: ${formatCurrency(totalCollected)} | Pending: ${formatCurrency(totalPending)}`,
      14,
      44
    );

    autoTable(pdf, {
      startY: 50,
      head: [[
        'Reg No',
        'Student Name',
        'Father Name',
        'Class',
        'Assigned',
        'Collected',
        'Pending',
        'Status',
      ]],
      body: downloadableStudents.map((student) => ([
        student.regNo || 'N/A',
        student.name || 'N/A',
        student.fatherName || 'N/A',
        `${student.class || 'N/A'}-${student.section || 'N/A'}`,
        formatCurrency(student.summary.totalExpected),
        formatCurrency(student.summary.paidAmount),
        formatCurrency(student.summary.pendingAmount),
        student.summary.status,
      ])),
      theme: 'grid',
      styles: {
        font: 'helvetica',
        fontSize: 8,
        cellPadding: 2,
        valign: 'middle',
        textColor: [15, 23, 42],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      headStyles: {
        fillColor: [0, 0, 0],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252],
      },
      margin: { top: 50, right: 10, bottom: 12, left: 10 },
      tableWidth: 'auto',
    });

    pdf.save(`fee-report-${safeClassName}.pdf`);
  };

  const groupedClasses = useMemo(() => {
      return classes.map((classItem) => {
      const classLabel = `${classItem.name} - ${classItem.section}`;
      const classStudents = students
        .filter((student) => `${student.class} - ${student.section}` === classLabel)
        .map((student) => ({
          ...student,
          summary: getStudentSummary(student),
        }));

      const query = searchTerm.trim().toLowerCase();
      const filteredStudents = classStudents.filter((student) => {
        const matchesSearch = !query || [
          student.name,
          student.fatherName,
          student.regNo,
          student.summary.status,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(query);

        const matchesStatus = statusFilter === 'All' || student.summary.status === statusFilter;
        return matchesSearch && matchesStatus;
      });

      const totals = classStudents.reduce(
        (acc, student) => {
          acc.expected += student.summary.totalExpected;
          acc.collected += student.summary.paidAmount;
          acc.pending += student.summary.pendingAmount;
          acc.students += 1;
          if (student.summary.status === 'Paid') acc.paidStudents += 1;
          if (student.summary.status === 'Pending' || student.summary.status === 'Partial' || student.summary.status === 'Unpaid') {
            acc.pendingStudents += 1;
          }
          return acc;
        },
        { expected: 0, collected: 0, pending: 0, students: 0, paidStudents: 0, pendingStudents: 0 }
      );

      return {
        id: classItem.id || classLabel,
        label: classLabel,
        name: classItem.name,
        section: classItem.section,
        incharge: classItem.incharge || 'Not assigned',
        students: filteredStudents,
        totalStudents: classStudents.length,
        totals,
      };
    });
  }, [classes, students, searchTerm, statusFilter]);

  const visibleGroups = useMemo(() => {
    return groupedClasses.filter((group) => {
      if (
        selectedClass !== 'All Classes' &&
        getClassOptionValue(group.name, group.section) !== selectedClass
      ) {
        return false;
      }

      return group.students.length > 0 || (!searchTerm.trim() && statusFilter === 'All');
    });
  }, [groupedClasses, searchTerm, selectedClass, statusFilter]);

  const overall = useMemo(() => {
    return groupedClasses.reduce(
      (acc, group) => {
        acc.classes += 1;
        acc.students += group.totalStudents;
        acc.expected += group.totals.expected;
        acc.collected += group.totals.collected;
        acc.pending += group.totals.pending;
        acc.paidStudents += group.totals.paidStudents;
        acc.pendingStudents += group.totals.pendingStudents;
        return acc;
      },
      { classes: 0, students: 0, expected: 0, collected: 0, pending: 0, paidStudents: 0, pendingStudents: 0 }
    );
  }, [groupedClasses]);

  const filteredStudentCount = useMemo(
    () => visibleGroups.reduce((sum, group) => sum + group.students.length, 0),
    [visibleGroups]
  );

  const collectionRate = overall.expected > 0 ? Math.round((overall.collected / overall.expected) * 100) : 0;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
          <p className="mt-4 text-sm text-slate-500">Loading fee data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl space-y-6 px-4 pb-6 pt-0 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="space-y-6 px-5 py-6 lg:px-8 lg:py-8">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Fee Management
              </span>
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.1rem]">
                  Simple fee tracking for every class
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                  Check collections, review pending balances, and open any student account from one clean workspace.
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <HighlightCard
                icon={CheckCircle2}
                title="Settled accounts"
                value={`${overall.paidStudents} students`}
                tone="green"
              />
              <HighlightCard
                icon={AlertTriangle}
                title="Needs follow-up"
                value={`${overall.pendingStudents} students`}
                tone="orange"
              />
              <SummaryCard
                icon={GraduationCap}
                label="Classes"
                value={overall.classes}
                helper="Active groups"
                cardClass="border-sky-500 bg-sky-400 text-white"
                accentClass="bg-sky-50 text-sky-700"
              />
              <SummaryCard
                icon={Users}
                label="Students"
                value={overall.students}
                helper="Fee accounts"
                cardClass="border-fuchsia-500 bg-fuchsia-400 text-white"
                accentClass="bg-fuchsia-50 text-fuchsia-700"
              />
              <SummaryCard
                icon={Wallet}
                label="Expected"
                value={formatCurrency(overall.expected)}
                helper="Total assigned"
                cardClass="border-teal-500 bg-teal-400 text-white"
                accentClass="bg-teal-50 text-teal-700"
              />
              <SummaryCard
                icon={CircleDollarSign}
                label="Collected"
                value={formatCurrency(overall.collected)}
                helper={`${collectionRate}% recovery`}
                cardClass="border-blue-500 bg-blue-400 text-white"
                accentClass="bg-blue-50 text-blue-700"
              />
              <SummaryCard
                icon={AlertTriangle}
                label="Pending"
                value={formatCurrency(overall.pending)}
                helper="Outstanding"
                cardClass="border-rose-500 bg-rose-400 text-white"
                accentClass="bg-rose-50 text-rose-700"
              />
              <div className="rounded-[24px] border border-indigo-500 bg-indigo-400 p-4 text-black shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/80">Quick view</p>
                <p className="mt-3 text-3xl font-semibold">{filteredStudentCount}</p>
                <p className="mt-1 text-sm text-black/80">Students visible in current filters</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Find students faster</h2>
                <p className="text-sm text-slate-500">Use search, class, and status filters to narrow the list.</p>
              </div>
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {filteredStudentCount} visible result{filteredStudentCount === 1 ? '' : 's'}
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1.3fr_0.85fr_0.85fr]">
              <label className="relative block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Search</span>
                <Search className="pointer-events-none absolute left-4 top-[42px] h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Student name, father name, reg no, or status"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Class</span>
                <select
                  value={selectedClass}
                  onChange={(event) => setSelectedClass(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
                >
                  {classOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Status</span>
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
                >
                  {['All', 'Paid', 'Pending', 'Partial', 'Unpaid', 'No Record'].map((option) => (
                    <option key={option} value={option}>
                      {option === 'All' ? 'All Statuses' : option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">
                Download fee report according to the selected class.
              </p>
              <Button
                onClick={handleDownloadReport}
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                disabled={downloadableStudents.length === 0}
              >
                Download Fee Report
              </Button>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          {visibleGroups.map((group) => {
            const groupRate = group.totals.expected > 0
              ? Math.round((group.totals.collected / group.totals.expected) * 100)
              : 0;

            return (
              <div key={group.id} className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-5 lg:px-6">
                  <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Class overview</p>
                        <h2 className="mt-1 text-2xl font-semibold text-slate-900">
                          {group.name} - Section {group.section}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">Class incharge: {group.incharge}</p>
                      </div>

                      <div className="w-full max-w-md">
                        <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
                          <span>Collection progress</span>
                          <span>{groupRate}%</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-slate-200">
                          <div
                            className="h-2.5 rounded-full bg-blue-500 transition-all"
                            style={{ width: `${Math.min(groupRate, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                      <ClassStat label="Students" value={group.totalStudents} cardClass="border-sky-500 bg-sky-400 text-white" />
                      <ClassStat label="Expected" value={formatCurrency(group.totals.expected)} cardClass="border-teal-500 bg-teal-400 text-white" />
                      <ClassStat label="Collected" value={formatCurrency(group.totals.collected)} cardClass="border-blue-500 bg-blue-400 text-white" />
                      <ClassStat label="Pending" value={formatCurrency(group.totals.pending)} cardClass="border-rose-500 bg-rose-400 text-white" />
                      <ClassStat label="Paid" value={`${group.totals.paidStudents}/${group.totalStudents}`} cardClass="border-indigo-500 bg-indigo-400 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-4 lg:hidden">
                  {group.students.map((student) => (
                    <div key={student.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-base font-semibold text-slate-900">{student.name}</p>
                          <p className="mt-1 text-sm text-slate-500">{student.fatherName || 'Father name not set'}</p>
                        </div>
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getStatusClasses(student.summary.status)}`}>
                          {student.summary.status}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <StudentMetric label="Registration No" value={student.regNo || 'N/A'} />
                        <StudentMetric
                          label="Records"
                          value={`${student.summary.recordsCount} saved`}
                        />
                        <StudentMetric label="Assigned" value={formatCurrency(student.summary.totalExpected)} />
                        <StudentMetric label="Collected" value={formatCurrency(student.summary.paidAmount)} />
                        <StudentMetric label="Pending" value={formatCurrency(student.summary.pendingAmount)} />
                        <StudentMetric label="Recovery" value={`${student.summary.collectionRate}%`} />
                      </div>

                      <div className="mt-4">
                        <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
                          <span>Recovery progress</span>
                          <span>{student.summary.collectionRate}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full bg-blue-500 transition-all"
                            style={{ width: `${Math.min(student.summary.collectionRate, 100)}%` }}
                          />
                        </div>
                      </div>

                      <Button
                        onClick={() => router.push(`/AdminDashboard/fee/${student.id}`)}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
                      >
                        Open Account
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}

                  {group.students.length === 0 && (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
                      No students found in this class for the current filters.
                    </div>
                  )}
                </div>

                <div className="hidden overflow-x-auto lg:block">
                  <table className="min-w-[1120px]">
                    <thead className="bg-blue-600">
                      <tr className="border-b border-blue-700 text-left text-sm font-medium text-white">
                        <th className="rounded-tl-xl px-6 py-4">Student</th>
                        <th className="px-6 py-4">Details</th>
                        <th className="px-6 py-4">Assigned</th>
                        <th className="px-6 py-4">Collected</th>
                        <th className="px-6 py-4">Pending</th>
                        <th className="px-5 py-4">Status</th>
                        <th className="rounded-tr-xl px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.students.map((student) => (
                        <tr key={student.id} className="border-b border-slate-100 transition-colors hover:bg-slate-50">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-semibold text-slate-900">{student.name}</p>
                              <p className="mt-1 text-xs text-slate-500">{student.fatherName || 'Father name not set'}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-700">
                            <p>Reg: {student.regNo || 'N/A'}</p>
                            <p className="mt-1 text-xs text-slate-500">
                              {student.summary.recordsCount} saved record{student.summary.recordsCount === 1 ? '' : 's'}
                            </p>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                            {formatCurrency(student.summary.totalExpected)}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-emerald-700">
                            {formatCurrency(student.summary.paidAmount)}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-amber-700">
                            {formatCurrency(student.summary.pendingAmount)}
                          </td>
                          <td className="px-5 py-4 text-sm">
                            <span className={`inline-flex rounded-full border px-3 py-1 font-medium ${getStatusClasses(student.summary.status)}`}>
                              {student.summary.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button
                              onClick={() => router.push(`/AdminDashboard/fee/${student.id}`)}
                              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                              Open Account
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}

                      {group.students.length === 0 && (
                        <tr>
                          <td colSpan={7} className="px-4 py-8 text-center text-sm text-slate-500">
                            No students found in this class for the current filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

          {visibleGroups.length === 0 && (
            <div className="rounded-[26px] border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">No fee data available</h3>
              <p className="mt-2 text-sm text-slate-500">
                Add classes and students first, then fee records will appear here.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  helper,
  cardClass = 'border-slate-200 bg-white',
  accentClass = 'bg-sky-50 text-sky-700',
}) {
  return (
    <div className={`rounded-[24px] border px-4 py-4 shadow-sm ${cardClass}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/80">{label}</p>
          <p className="mt-2 text-lg font-semibold text-black sm:text-xl">{value}</p>
          <p className="mt-1 text-xs text-black/75">{helper}</p>
        </div>
        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/85 ${accentClass}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

function ClassStat({ label, value, cardClass = 'border-slate-200 bg-white' }) {
  return (
    <div className={`rounded-2xl border px-4 py-3 text-center shadow-sm ${cardClass}`}>
      <p className="text-[11px] uppercase tracking-[0.16em] text-black/80">{label}</p>
      <p className="mt-1 text-sm font-semibold text-black">{value}</p>
    </div>
  );
}

function HighlightCard({ icon: Icon, title, value, tone = 'green' }) {
  const toneConfig = {
    green: {
      cardClass: 'border-green-500 bg-green-400 text-black',
      iconClass: 'text-green-400',
    },
    orange: {
      cardClass: 'border-orange-500 bg-orange-400 text-black',
      iconClass: 'text-orange-400',
    },
  }[tone] || {
    cardClass: 'border-green-500 bg-green-400 text-black',
    iconClass: 'text-green-400',
  };

  return (
    <div className={`rounded-[24px] border px-4 py-4 ${toneConfig.cardClass}`}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/85">
          <Icon className={`h-5 w-5 ${toneConfig.iconClass}`} />
        </span>
        <div>
          <p className="text-sm font-medium text-black/85">{title}</p>
          <p className="text-base font-semibold text-black">{value}</p>
        </div>
      </div>
    </div>
  );
}

function StudentMetric({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-3 py-3">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}
