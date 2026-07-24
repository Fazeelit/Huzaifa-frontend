'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileClock,
  Printer,
  Receipt,
  Trash2,
  UserRound,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import { hasPermission } from '../../authservice/auth';
import { useAuth } from '../../authservice/useAuth';
import { showToast } from '../../../utils/helpers';
import { STORAGE_KEYS, readList, writeList } from '../../services/storage';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function formatCurrency(value) {
  return `PKR ${Number(value || 0).toLocaleString()}`;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatSlipDate(value) {
  if (!value) return 'Not recorded';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString('en-CA');
}

function getStudents() {
  return readList(STORAGE_KEYS.STUDENTS);
}

function normalizeStudentId(value) {
  return String(value ?? '').trim();
}

function sortRecords(records) {
  return [...records].sort((left, right) => {
    const leftDate = new Date(`${left.month || 'January'} 1, ${left.year || 2000}`);
    const rightDate = new Date(`${right.month || 'January'} 1, ${right.year || 2000}`);
    return rightDate - leftDate;
  });
}

function getRecordKey(record) {
  return [
    record?.month || '',
    Number(record?.year || 0),
    record?.paidDate || '',
    Number(record?.registrationFee || 0),
    Number(record?.monthlyFee || 0),
    Number(record?.amount || 0),
    record?.status || '',
  ].join('::');
}

function buildFormState(student, month, year, currentForm = {}) {
  const records = sortRecords(Array.isArray(student?.feeRecords) ? student.feeRecords : []);
  const existingRecord = records.find(
    (record) => record.month === month && Number(record.year) === Number(year)
  );

  if (existingRecord) {
    return {
      ...currentForm,
      month,
      year,
      registrationFee: Number(existingRecord.registrationFee || 0),
      monthlyFee: Number(existingRecord.monthlyFee || 0),
      status: existingRecord.status || 'Pending',
      paidDate: existingRecord.paidDate || '',
    };
  }

  return {
    ...currentForm,
    month,
    year,
    registrationFee: Number(student?.feeStructure?.registrationFee || 0),
    monthlyFee: Number(student?.feeStructure?.monthlyFee || 0),
    status: 'Pending',
    paidDate: '',
  };
}

function getStatusClasses(status) {
  if (status === 'Paid') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if (status === 'Pending') return 'bg-amber-50 text-amber-700 border-amber-200';
  return 'bg-rose-50 text-rose-700 border-rose-200';
}

export default function StudentFeeAccountPage() {
  const { permissions } = useAuth();
  const canDeleteFee = hasPermission(permissions, 'FEES_DELETE');
  const params = useParams();
  const router = useRouter();
  const studentId = normalizeStudentId(params?.studentId);
  const now = new Date();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    month: MONTHS[now.getMonth()],
    year: now.getFullYear(),
    registrationFee: 0,
    monthlyFee: 0,
    status: 'Pending',
    paidDate: '',
  });
  const [recordToDelete, setRecordToDelete] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const allStudents = getStudents();
      const matchedStudent = allStudents.find((item) => normalizeStudentId(item.id) === studentId) || null;
      setStudent(matchedStudent);

      if (matchedStudent) {
        setForm((prev) => buildFormState(matchedStudent, prev.month, prev.year, prev));
      }

      setLoading(false);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [studentId]);

  const feeRecords = useMemo(
    () => sortRecords(Array.isArray(student?.feeRecords) ? student.feeRecords : []),
    [student]
  );

  const totals = useMemo(() => {
    if (!student) {
      return { totalAssigned: 0, totalPaid: 0, totalPending: 0, paidRecords: 0, pendingRecords: 0 };
    }

    const records = Array.isArray(student.feeRecords) ? student.feeRecords : [];
    const totalAssigned = records.reduce((sum, record) => sum + Number(record.amount || 0), 0);
    const totalPaid = records
      .filter((record) => record.status === 'Paid')
      .reduce((sum, record) => sum + Number(record.amount || 0), 0);
    const paidRecords = records.filter((record) => record.status === 'Paid').length;
    const pendingRecords = records.filter((record) => record.status !== 'Paid').length;

    return {
      totalAssigned,
      totalPaid,
      totalPending: Math.max(totalAssigned - totalPaid, 0),
      paidRecords,
      pendingRecords,
    };
  }, [student]);

  const currentAmount = Number(form.registrationFee || 0) + Number(form.monthlyFee || 0);
  const selectedRecord = feeRecords.find(
    (record) => record.month === form.month && Number(record.year) === Number(form.year)
  ) || null;

  const saveFee = () => {
    if (!student) return;

    const allStudents = getStudents();
    const updatedStudents = allStudents.map((item) => {
      if (normalizeStudentId(item.id) !== studentId) {
        return item;
      }

      const feeRecord = {
        month: form.month,
        year: Number(form.year),
        registrationFee: Number(form.registrationFee || 0),
        monthlyFee: Number(form.monthlyFee || 0),
        amount: currentAmount,
        status: form.status,
        paidDate: form.status === 'Paid' ? form.paidDate || new Date().toISOString().split('T')[0] : null,
      };

      const existingRecords = Array.isArray(item.feeRecords) ? [...item.feeRecords] : [];
      const recordIndex = existingRecords.findIndex(
        (record) => record.month === feeRecord.month && Number(record.year) === feeRecord.year
      );

      if (recordIndex >= 0) {
        existingRecords[recordIndex] = feeRecord;
      } else {
        existingRecords.push(feeRecord);
      }

      const hasPending = existingRecords.some((record) => record.status !== 'Paid');

      return {
        ...item,
        feeRecords: existingRecords,
        feeStatus: hasPending ? 'Pending' : 'Paid',
        feeStructure: {
          ...(item.feeStructure || {}),
          registrationFee: Number(form.registrationFee || 0),
          monthlyFee: Number(form.monthlyFee || 0),
          total: currentAmount,
        },
      };
    });

    writeList(STORAGE_KEYS.STUDENTS, updatedStudents);
    window.dispatchEvent(new Event('studentUpdated'));

    const refreshedStudent = updatedStudents.find((item) => normalizeStudentId(item.id) === studentId) || null;
    setStudent(refreshedStudent);
    showToast(selectedRecord ? 'Fee record updated successfully.' : 'Fee record saved successfully.', 'success');
  };

  const handleMonthChange = (month) => {
    setForm((prev) => {
      if (!student) {
        return { ...prev, month };
      }

      return buildFormState(student, month, prev.year, prev);
    });
  };

  const handleYearChange = (year) => {
    setForm((prev) => {
      if (!student) {
        return { ...prev, year };
      }

      return buildFormState(student, prev.month, year, prev);
    });
  };

  const openPrintWindow = (recordData) => {
    if (!student) return;

    const paidDateValue = recordData.status === 'Paid'
      ? recordData.paidDate || new Date().toISOString().split('T')[0]
      : recordData.paidDate || '';
    const slipDate = new Date().toLocaleString();
    const printWindow = window.open('', '_blank', 'width=420,height=900');

    if (!printWindow) {
      showToast('Unable to open print window. Please allow pop-ups and try again.', 'error');
      return;
    }

    const slipMarkup = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Fee Slip - ${escapeHtml(student.name)}</title>
          <style>
            @page {
              size: 80mm auto;
              margin: 4mm 4mm 4mm 0.10in;
            }

            * {
              box-sizing: border-box;
            }

            html, body {
              margin: 0;
              padding: 0;
              background: #ffffff;
              color: #000000;
              font-family: "Courier New", Courier, monospace;
              font-size: 12px;
              line-height: 1.35;
              font-weight: 700;
            }

            body {
              width: 72mm;
              margin: 0 auto 0 0.10in;
              padding: 4mm 0;
            }

            .slip {
              width: 100%;
            }

            .center {
              text-align: center;
            }

            .title {
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 2px;
            }

            .subtitle {
              font-size: 13px;
              margin-bottom: 8px;
              font-weight: 700;
              white-space: nowrap;
            }

            .divider {
              border-top: 1px dashed #000;
              margin: 8px 0;
            }

            .row {
              display: flex;
              justify-content: space-between;
              gap: 8px;
              margin: 3px 0;
            }

            .row .label {
              font-weight: 700;
              color: #000000;
            }

            .row .value {
              text-align: right;
              word-break: break-word;
              color: #000000;
              font-weight: 700;
            }

            .block {
              margin: 8px 0;
            }

            .block-title {
              font-weight: 700;
              text-transform: uppercase;
              margin-bottom: 4px;
              color: #000000;
            }

            .total {
              font-size: 14px;
              font-weight: 700;
            }

            .note {
              margin-top: 10px;
              font-size: 11px;
              text-align: center;
              font-weight: 700;
              color: #000000;
              white-space: nowrap;
            }

            @media print {
              body {
                width: 72mm;
              }
            }
          </style>
        </head>
        <body>
            <div class="slip">
              <div class="center">
              <div class="title">ABS School Systems</div>
              <div class="subtitle">Mob# 0304-3634492</div>
              </div>

            <div class="divider"></div>

            <div class="block">
              <div class="row"><span class="label">Student</span><span class="value">${escapeHtml(student.name || 'N/A')}</span></div>
              <div class="row"><span class="label">Father</span><span class="value">${escapeHtml(student.fatherName || 'N/A')}</span></div>
              <div class="row"><span class="label">Reg No</span><span class="value">${escapeHtml(student.regNo || 'N/A')}</span></div>
              <div class="row"><span class="label">Class</span><span class="value">${escapeHtml(`${student.class || 'N/A'} - Sec ${student.section || 'N/A'}`)}</span></div>
            </div>

            <div class="divider"></div>

            <div class="block">
              <div class="row"><span class="label">Month</span><span class="value">${escapeHtml(recordData.month)}</span></div>
              <div class="row"><span class="label">Year</span><span class="value">${escapeHtml(recordData.year)}</span></div>
              <div class="row"><span class="label">Status</span><span class="value">${escapeHtml(recordData.status)}</span></div>
              <div class="row"><span class="label">Paid Date</span><span class="value">${escapeHtml(formatSlipDate(paidDateValue))}</span></div>
            </div>

            <div class="divider"></div>

            <div class="block">
              <div class="block-title">Fee Details</div>
              <div class="row"><span class="label">Registration</span><span class="value">${escapeHtml(formatCurrency(recordData.registrationFee))}</span></div>
              <div class="row"><span class="label">Monthly</span><span class="value">${escapeHtml(formatCurrency(recordData.monthlyFee))}</span></div>
              <div class="row total"><span class="label">Total</span><span class="value">${escapeHtml(formatCurrency(recordData.amount))}</span></div>
            </div>

            <div class="divider"></div>

            <div class="block">
              <div class="row"><span class="label">Printed At</span><span class="value">${escapeHtml(slipDate)}</span></div>
            </div>

            <div class="divider"></div>

            <div class="note">Rehan Software Solutions  Mob# 0345-8019548</div>
          </div>

          <script>
            window.onload = function () {
              window.print();
              setTimeout(function () { window.close(); }, 300);
            };
          <\/script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(slipMarkup);
    printWindow.document.close();
  };

  const handlePrintSlip = () => {
    openPrintWindow({
      month: form.month,
      year: Number(form.year),
      status: form.status,
      paidDate: form.paidDate,
      registrationFee: Number(form.registrationFee || 0),
      monthlyFee: Number(form.monthlyFee || 0),
      amount: currentAmount,
    });
  };

  const handleDeleteRecord = () => {
    if (!canDeleteFee) {
      showToast('You do not have permission to delete fee records.', 'error');
      return;
    }
    if (!student || !recordToDelete) return;

    const targetKey = getRecordKey(recordToDelete);
    const allStudents = getStudents();
    let updatedStudent = null;

    const updatedStudents = allStudents.map((item) => {
      if (normalizeStudentId(item.id) !== studentId) {
        return item;
      }

      let removed = false;
      const remainingRecords = (Array.isArray(item.feeRecords) ? item.feeRecords : []).filter((record) => {
        const matches = !removed && getRecordKey(record) === targetKey;
        if (matches) {
          removed = true;
          return false;
        }
        return true;
      });

      const hasPending = remainingRecords.some((record) => record.status !== 'Paid');
      updatedStudent = {
        ...item,
        feeRecords: remainingRecords,
        feeStatus: remainingRecords.length === 0 ? 'Unpaid' : hasPending ? 'Pending' : 'Paid',
      };

      return updatedStudent;
    });

    writeList(STORAGE_KEYS.STUDENTS, updatedStudents);
    window.dispatchEvent(new Event('studentUpdated'));
    setStudent(updatedStudent);
    setRecordToDelete(null);
    setForm((prev) => buildFormState(updatedStudent, prev.month, prev.year, prev));
    showToast('Fee record deleted successfully.', 'success');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
          <p className="mt-4 text-sm text-slate-500">Loading student fee account...</p>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="rounded-[24px] border border-slate-200 bg-white px-4 py-8 text-center shadow-sm sm:px-8 sm:py-10">
          <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">Student not found</h1>
          <p className="mt-2 text-sm text-slate-500">This fee account is not available.</p>
          <Button onClick={() => router.push('/AdminDashboard/fee')} className="mt-6 bg-blue-600 text-white">
            Back to Fee Page
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_40%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_45%,#f8fafc_100%)] px-4 pb-8 pt-0 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <button
          onClick={() => router.push('/AdminDashboard/fee')}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Fee Page
        </button>

        <section className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-6 px-4 py-5 sm:px-6 sm:py-7 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Student Fee Account</p>
              <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{student.name}</h1>
              <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <MetaItem icon={UserRound} label="Father Name" value={student.fatherName || 'N/A'} cardClass="border-sky-500 bg-sky-400" iconClass="text-sky-500" />
                <MetaItem icon={Receipt} label="Registration No" value={student.regNo || 'N/A'} cardClass="border-violet-500 bg-violet-400" iconClass="text-violet-500" />
                <MetaItem icon={GraduationCapFallback} label="Class" value={`${student.class} - Section ${student.section}`} cardClass="border-emerald-500 bg-emerald-400" iconClass="text-emerald-500" />
                <MetaItem icon={CalendarDays} label="Current Entry" value={`${form.month} ${form.year}`} cardClass="border-amber-500 bg-amber-400" iconClass="text-amber-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <InfoCard label="Assigned" value={formatCurrency(totals.totalAssigned)} helper="All fee entries" cardClass="border-cyan-500 bg-cyan-400" />
              <InfoCard label="Paid" value={formatCurrency(totals.totalPaid)} helper={`${totals.paidRecords} cleared`} cardClass="border-blue-500 bg-blue-400" />
              <InfoCard label="Pending" value={formatCurrency(totals.totalPending)} helper={`${totals.pendingRecords} open`} cardClass="border-rose-500 bg-rose-400" />
              <InfoCard label="Current Total" value={formatCurrency(currentAmount)} helper="Draft amount" cardClass="border-indigo-500 bg-indigo-400" />
            </div>
          </div>
        </section>

        <div className="grid gap-6">
          <section className="rounded-[28px] border border-slate-200/70 bg-white/90 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Fee Form</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">Monthly fee entry</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Select a month, review any existing entry, then save the updated fee record.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-indigo-50 px-5 py-4 text-left sm:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
                  {selectedRecord ? 'Editing Existing Record' : 'New Record'}
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">{selectedRecord ? selectedRecord.status : 'Not saved yet'}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="Month">
                <select
                  value={form.month}
                  onChange={(event) => handleMonthChange(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                >
                  {MONTHS.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Year">
                <input
                  type="number"
                  value={form.year}
                  onChange={(event) => handleYearChange(event.target.value)}
                  placeholder="2026"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </Field>

              <Field label="Registration Fee">
                <input
                  type="number"
                  value={form.registrationFee}
                  onChange={(event) => setForm((prev) => ({ ...prev, registrationFee: event.target.value }))}
                  placeholder="5000"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </Field>

              <Field label="Monthly Fee">
                <input
                  type="number"
                  value={form.monthlyFee}
                  onChange={(event) => setForm((prev) => ({ ...prev, monthlyFee: event.target.value }))}
                  placeholder="8000"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </Field>

              <Field label="Status">
                <select
                  value={form.status}
                  onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
              </Field>

              <Field label="Paid Date">
                <input
                  type="date"
                  value={form.paidDate}
                  onChange={(event) => setForm((prev) => ({ ...prev, paidDate: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </Field>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <FeeBox label="Registration Fee" value={formatCurrency(form.registrationFee)} />
              <FeeBox label="Monthly Fee" value={formatCurrency(form.monthlyFee)} />
              <FeeBox label="Total Amount" value={formatCurrency(currentAmount)} />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button onClick={saveFee} className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-2.5 text-white shadow-md hover:from-sky-700 hover:to-indigo-700 sm:w-auto">
                {selectedRecord ? 'Update Fee Record' : 'Save Fee Record'}
              </Button>
              <Button
                onClick={handlePrintSlip}
                className="w-full rounded-xl bg-slate-900 px-5 py-2.5 text-white shadow-md hover:bg-slate-800 sm:w-auto"
              >
                Print Fee Slip
              </Button>
              <Button
                onClick={() => router.push(`/AdminDashboard/students/student-detail/${student.id}`)}
                className="w-full rounded-xl bg-emerald-600 px-5 py-2.5 text-white shadow-md hover:bg-emerald-700 sm:w-auto"
              >
                Open Student Profile
              </Button>
            </div>
          </section>

        </div>

        <section className="rounded-[28px] border border-slate-200/70 bg-white/90 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Fee History</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">Saved fee records</h2>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left sm:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">History Count</p>
              <p className="mt-1 text-lg font-bold text-slate-900">{feeRecords.length}</p>
            </div>
          </div>

          <div className="mt-6">
            {feeRecords.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="min-w-[740px] w-full border-collapse sm:min-w-[860px]">
                  <thead className="bg-blue-600">
                    <tr className="text-left text-sm font-medium text-white">
                      <th className="rounded-tl-xl px-4 py-4">Month</th>
                      <th className="px-4 py-4">Paid Date</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4">Registration</th>
                      <th className="px-4 py-4">Monthly</th>
                      <th className="px-4 py-4">Amount</th>
                      <th className="rounded-tr-xl px-4 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeRecords.map((record, index) => (
                      <tr key={`${record.month}-${record.year}-${index}`} className="border-t border-slate-200 text-sm text-slate-700">
                        <td className="px-4 py-4 font-semibold text-slate-900">
                          {record.month} {record.year}
                        </td>
                        <td className="px-4 py-4">
                          {record.paidDate || 'Not recorded'}
                        </td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getStatusClasses(record.status)}`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 font-medium text-slate-900">
                          {formatCurrency(record.registrationFee || 0)}
                        </td>
                        <td className="px-4 py-4 font-medium text-slate-900">
                          {formatCurrency(record.monthlyFee || 0)}
                        </td>
                        <td className="px-4 py-4 font-semibold text-slate-900">
                          {formatCurrency(record.amount || 0)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              type="button"
                              onClick={() => openPrintWindow(record)}
                              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-700"
                              aria-label={`Print fee slip for ${record.month} ${record.year}`}
                            >
                              <Printer className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (!canDeleteFee) {
                                  showToast('You do not have permission to delete fee records.', 'error');
                                  return;
                                }
                                setRecordToDelete(record);
                              }}
                              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white transition-colors hover:bg-red-700"
                              aria-label={`Delete fee record for ${record.month} ${record.year}`}
                              disabled={!canDeleteFee}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-10 text-center text-sm text-slate-500">
                No fee records saved yet.
              </div>
            )}
          </div>
        </section>
      </div>

      {recordToDelete && student && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.24)]">
            <h3 className="text-xl font-semibold text-slate-900">Delete Fee Record</h3>
            <p className="mt-3 text-sm text-slate-600">
              Are you sure want to delete Fee of {student.name}?
            </p>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setRecordToDelete(null)}
                className="w-full rounded-xl border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 sm:w-auto"
              >
                No
              </button>
              <button
                type="button"
                onClick={handleDeleteRecord}
                disabled={!canDeleteFee}
                className="w-full rounded-xl bg-red-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 sm:w-auto"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      {children}
    </div>
  );
}

function MetaItem({ icon: Icon, label, value, cardClass = 'border-slate-200 bg-slate-50', iconClass = 'text-slate-600' }) {
  return (
    <div className={`flex items-start gap-3 rounded-2xl border px-4 py-3 ${cardClass}`}>
      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/85 shadow-sm ${iconClass}`}>
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/80">{label}</p>
        <p className="mt-1 text-sm font-medium text-black">{value}</p>
      </div>
    </div>
  );
}

function GraduationCapFallback(props) {
  return <CreditCard {...props} />;
}

function InfoCard({ label, value, helper, cardClass = 'border-white/70 bg-white' }) {
  return (
    <div className={`rounded-2xl border px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.08)] ${cardClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/80">{label}</p>
      <p className="mt-2 text-lg font-bold text-black">{value}</p>
      <p className="mt-1 text-xs text-black/75">{helper}</p>
    </div>
  );
}

function FeeBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-white via-indigo-50 to-sky-50 px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
