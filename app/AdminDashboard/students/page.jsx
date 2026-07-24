'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../authservice/useAuth';
import Button from '../components/ui/Button';
import { showToast } from '../../utils/helpers';

const DEFAULT_STUDENTS = [];
const DEFAULT_CLASSES = [];

export default function StudentsPage() {
  const router = useRouter();
  const { isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [classSummary, setClassSummary] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalClasses: 0,
    totalMale: 0,
    totalFemale: 0,
    totalRevenue: 0,
    pendingFees: 0
  });

  // Initialize sample data if not exists
  const initializeSampleData = useCallback(() => {
    const existingStudents = localStorage.getItem('school_students');
    const existingClasses = localStorage.getItem('school_classes');

    const shouldResetStudents = (() => {
      if (!existingStudents) return true;
      try {
        const parsedStudents = JSON.parse(existingStudents);
        return Array.isArray(parsedStudents) && parsedStudents.some((student) => String(student.regNo || '').startsWith('REG'));
      } catch {
        return true;
      }
    })();

    const shouldResetClasses = (() => {
      if (!existingClasses) return true;
      try {
        const parsedClasses = JSON.parse(existingClasses);
        return Array.isArray(parsedClasses) && parsedClasses.some((classItem) => Array.isArray(classItem.timetable) && typeof classItem.timetable[0] === 'string');
      } catch {
        return true;
      }
    })();

    if (shouldResetStudents) {
      localStorage.setItem('school_students', JSON.stringify(DEFAULT_STUDENTS));
    }

    if (shouldResetClasses) {
      localStorage.setItem('school_classes', JSON.stringify(DEFAULT_CLASSES));
    }
  }, []);

  // Load all data from localStorage
  const loadAllData = useCallback(() => {
    setLoading(true);
    
    // Initialize sample data
    initializeSampleData();
    
    // Load classes
    const savedClasses = localStorage.getItem('school_classes');
    const classes = savedClasses ? JSON.parse(savedClasses) : DEFAULT_CLASSES;
    
    // Load students
    const savedStudents = localStorage.getItem('school_students');
    const allStudents = savedStudents ? JSON.parse(savedStudents) : DEFAULT_STUDENTS;
    
    setStudents(allStudents);
    
    // Generate class summary from class list so this page matches Class Management exactly
    const summary = classes.map((classItem) => {
      const classStudents = allStudents.filter(
        (student) => student.class === classItem.name && student.section === classItem.section
      );

      return {
        id: classItem.id || `${classItem.name}-${classItem.section}`,
        class: classItem.name,
        section: classItem.section,
        male: classStudents.filter((student) => student.gender === 'Male').length,
        female: classStudents.filter((student) => student.gender === 'Female').length,
        total: classStudents.length,
        incharge: classItem.incharge || '',
        totalFees: classStudents.reduce((sum, student) => sum + (student.feeStructure?.total || 0), 0),
        paidFees: classStudents.reduce(
          (sum, student) =>
            sum +
            (student.feeRecords || [])
              .filter((record) => record.status === 'Paid')
              .reduce((recordSum, record) => recordSum + (record.amount || 0), 0),
          0
        ),
        biometricEnrolled: classStudents.filter(
          (student) => student.biometric?.fingerprint?.enrolled || student.biometric?.face?.enrolled
        ).length
      };
    });
    setClassSummary(summary);
    
    // Calculate overall stats
    const totalStudents = summary.reduce((sum, row) => sum + row.total, 0);
    const totalMale = allStudents.filter(s => s.gender === 'Male').length;
    const totalFemale = allStudents.filter(s => s.gender === 'Female').length;
    const totalRevenue = allStudents.reduce((sum, s) => {
      const paid = s.feeRecords?.filter(r => r.status === 'Paid')
        .reduce((acc, r) => acc + r.amount, 0) || 0;
      return sum + paid;
    }, 0);
    const pendingFees = allStudents.reduce((sum, s) => {
      const total = s.feeStructure?.total || 0;
      const paid = s.feeRecords?.filter(r => r.status === 'Paid')
        .reduce((acc, r) => acc + r.amount, 0) || 0;
      return sum + (total - paid);
    }, 0);
    
    setStats({
      totalStudents,
      totalClasses: summary.length,
      totalMale,
      totalFemale,
      totalRevenue,
      pendingFees
    });
    
    setLoading(false);
  }, [initializeSampleData]);

  // Listen for data updates
  useEffect(() => {
    loadAllData();
    
    const handleStudentEnrolled = (event) => {
      loadAllData();
      showToast('New student enrolled successfully!', 'success');
    };
    
    const handleStudentUpdated = (event) => {
      loadAllData();
      showToast('Student data updated!', 'success');
    };
    
    const handleClassesUpdated = (event) => {
      loadAllData();
    };
    
    window.addEventListener('studentEnrolled', handleStudentEnrolled);
    window.addEventListener('studentUpdated', handleStudentUpdated);
    window.addEventListener('classesUpdated', handleClassesUpdated);
    
    return () => {
      window.removeEventListener('studentEnrolled', handleStudentEnrolled);
      window.removeEventListener('studentUpdated', handleStudentUpdated);
      window.removeEventListener('classesUpdated', handleClassesUpdated);
    };
  }, [loadAllData]);

  // Filter classes based on search
  const filteredClasses = classSummary.filter(cls => 
    cls.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (cls.incharge && cls.incharge.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEnrollNew = () => {
    router.push('/AdminDashboard/enrollment');
  };

  const handleViewClass = (classData) => {
    router.push(`/AdminDashboard/students/class-detail/${encodeURIComponent(classData.class)}/${encodeURIComponent(classData.section)}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500">Loading student data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20 px-4 pb-8 pt-0 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="backdrop-blur-xl bg-blue-600 dark:bg-slate-800/60 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50 p-4 sm:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="rounded-xl bg-blue-600 px-5 py-4">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Student Management
              </h1>
              <p className="mt-1 text-sm text-blue-100">
                Manage classes, sections, and student enrollment
              </p>
            </div>
            <Button
              onClick={handleEnrollNew}
              variant="outline"
              className="w-full rounded-xl border-white bg-white px-6 py-3 font-bold font-semibold text-blue-600 shadow-lg hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl focus:ring-white md:w-auto"
            >
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Enroll New Student
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="rounded-xl p-4 border border-blue-400 bg-blue-400 shadow-[0_14px_28px_rgba(14,165,233,0.2)] transition-transform hover:-translate-y-0.5 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-700">Total Students</p>
                <p className="text-2xl font-bold text-slate-900 group-hover:scale-105 transition-transform">{stats.totalStudents}</p>
              </div>
              <div className="w-10 h-10 bg-white/70 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-4 border border-emerald-400 bg-emerald-400 shadow-[0_14px_28px_rgba(16,185,129,0.18)] transition-transform hover:-translate-y-0.5 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-700">Total Classes</p>
                <p className="text-2xl font-bold text-slate-900 group-hover:scale-105 transition-transform">{stats.totalClasses}</p>
              </div>
              <div className="w-10 h-10 bg-white/70 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-4 border border-sky-400 bg-sky-400 shadow-[0_14px_28px_rgba(59,130,246,0.18)] transition-transform hover:-translate-y-0.5 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-700">Boys</p>
                <p className="text-2xl font-bold text-slate-900 group-hover:scale-105 transition-transform">{stats.totalMale}</p>
              </div>
              <div className="w-10 h-10 bg-white/70 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-4 border border-pink-400 bg-pink-400 shadow-[0_14px_28px_rgba(244,63,94,0.18)] transition-transform hover:-translate-y-0.5 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-700">Girls</p>
                <p className="text-2xl font-bold text-slate-900 group-hover:scale-105 transition-transform">{stats.totalFemale}</p>
              </div>
              <div className="w-10 h-10 bg-white/70 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-4 border border-green-400 bg-green-400 shadow-[0_14px_28px_rgba(34,197,94,0.2)] transition-transform hover:-translate-y-0.5 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-700">Total Revenue</p>
                <p className="text-xl font-bold text-slate-900 group-hover:scale-105 transition-transform">PKR {stats.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 bg-white/70 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-4 border border-amber-400 bg-amber-400 shadow-[0_14px_28px_rgba(245,158,11,0.2)] transition-transform hover:-translate-y-0.5 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-700">Pending Fees</p>
                <p className="text-xl font-bold text-slate-900 group-hover:scale-105 transition-transform">PKR {stats.pendingFees.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 bg-white/70 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" />
            </svg>
          </div>
          <input 
            type="text"
            placeholder="Search by class name, section, or teacher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-blue-200/50 dark:border-slate-700/50 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none transition-all dark:text-white"
          />
        </div>

        {/* Classes Table */}
        <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50 overflow-hidden">
          {filteredClasses.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full">
                <thead className="bg-blue-600 border-b border-blue-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Class Details</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Class Incharge</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Boys</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Girls</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Total</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Biometric</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100/50">
                  {filteredClasses.map((row, idx) => (
                    <tr
                      key={idx}
                      onClick={() => handleViewClass(row)}
                      className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 cursor-pointer transition-all duration-200 group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center text-blue-600 font-bold border border-blue-500/30">
                            {row.class.charAt(0)}{row.section}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800 dark:text-slate-200">{row.class}</p>
                            <p className="text-xs text-slate-500">Section {row.section}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-slate-700 dark:text-slate-300">{row.incharge || '—'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-blue-600">{row.male}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-pink-600">{row.female}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                          {row.total}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          {row.biometricEnrolled > 0 ? (
                            <span className="text-xs text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                              {row.biometricEnrolled}/{row.total}
                            </span>
                          ) : (
                            <span className="text-xs text-slate-400">—</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewClass(row);
                          }}
                          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-100/50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all group-hover:shadow-md"
                        >
                          View Details
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                No classes found
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {searchTerm 
                  ? `No results for "${searchTerm}"` 
                  : 'No classes available. Click "Enroll New Student" to get started.'}
              </p>
              {!searchTerm && (
                <Button
                  onClick={handleEnrollNew}
                  className="mt-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2.5 rounded-lg"
                >
                  + Enroll First Student
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            Click any row to view class details and student list
          </p>
        </div>
      </div>
    </div>
  );
}
