
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { hasPermission } from '../../../authservice/auth';
import { useAuth } from '../../../authservice/useAuth';
import Button from '../../../../components/ui/Button';
import { showToast } from '../../../../../utils/helpers';
import classService from '../../../../../services/classService';
import studentService from '../../../../../services/studentService';

export default function ClassDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isAdmin, permissions } = useAuth();
  const canDeleteStudent = hasPermission(permissions, 'STUDENTS_DELETE');

  const [students, setStudents] = useState([]);
  const [classInfo, setClassInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('table');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [classStats, setClassStats] = useState(null);
  const [deletingStudent, setDeletingStudent] = useState(false);

  // Decode URL parameters safely
  const className = params?.classId ? decodeURIComponent(params.classId) : '';
  const section = params?.sectionId ? decodeURIComponent(params.sectionId) : '';

  // Load class data
  const loadClassData = useCallback(async () => {
    if (!className || !section) return;

    setLoading(true);
    
    try {
      // Get class with students
      const classResult = await classService.getClassWithStudents(className, section);
      
      if (classResult.success) {
        const classData = classResult.data;
        
        setClassInfo({
          className: classData.name,
          section: classData.section,
          totalStudents: classData.totalStudents,
          maleCount: classData.students?.filter(s => s.gender === 'Male').length || 0,
          femaleCount: classData.students?.filter(s => s.gender === 'Female').length || 0,
          incharge: classData.incharge || 'Not Assigned',
          timetable: classData.timetable || [],
          roomNumber: classData.roomNumber || 'Not Assigned',
          academicYear: classData.academicYear || '2024-2025'
        });
        
        setStudents(classData.students || []);
        
        // Get class statistics
        const statsResult = await studentService.getClassStatistics(className, section);
        if (statsResult.success) {
          setClassStats(statsResult.data);
        }
      } else {
        showToast(classResult.message, 'error');
      }
    } catch (error) {
      console.error('Error loading class data:', error);
      showToast('Failed to load class data', 'error');
    } finally {
      setLoading(false);
    }
  }, [className, section]);

  // Listen for student updates
  useEffect(() => {
    loadClassData();

    const handleStudentUpdate = () => {
      loadClassData();
      showToast('Student data updated!', 'success');
    };
    
    const handleStudentEnrolled = () => {
      loadClassData();
      showToast('New student enrolled in this class!', 'success');
    };
    
    window.addEventListener('studentUpdated', handleStudentUpdate);
    window.addEventListener('studentEnrolled', handleStudentEnrolled);
    
    return () => {
      window.removeEventListener('studentUpdated', handleStudentUpdate);
      window.removeEventListener('studentEnrolled', handleStudentEnrolled);
    };
  }, [loadClassData]);

  // Filter students based on search
  const filteredStudents = useMemo(() => {
    if (!searchTerm.trim()) return students;
    
    const lowercasedTerm = searchTerm.toLowerCase();
    return students.filter(student =>
      student.name?.toLowerCase().includes(lowercasedTerm) ||
      student.regNo?.toLowerCase().includes(lowercasedTerm) ||
      student.fatherName?.toLowerCase().includes(lowercasedTerm) ||
      (student.cnic && student.cnic.includes(lowercasedTerm))
    );
  }, [searchTerm, students]);

  // Handle student click - redirect to edit page
  const handleStudentClick = (student) => {
    router.push(`/AdminDashboard/students/student-detail/${student.id}`);
  };

  const handleEditStudent = (student, e) => {
    e.stopPropagation();
    router.push(`/AdminDashboard/students/edit/${student.id}`);
  };

  // Quick view student details
  const handleQuickView = (student, e) => {
    e.stopPropagation();
    setSelectedStudent(student);
    setShowStudentModal(true);
  };

  const handleOpenDeleteModal = (student, e) => {
    e.stopPropagation();
    if (!canDeleteStudent) {
      showToast('You do not have permission to delete students.', 'error');
      return;
    }
    setStudentToDelete(student);
  };

  const handleCloseDeleteModal = () => {
    if (deletingStudent) return;
    setStudentToDelete(null);
  };

  const handleDeleteStudent = async () => {
    if (!canDeleteStudent) {
      showToast('You do not have permission to delete students.', 'error');
      return;
    }

    if (!studentToDelete?.id) return;

    setDeletingStudent(true);

    try {
      const result = await studentService.deleteStudent(studentToDelete.id);

      if (!result.success) {
        showToast(result.message || 'Failed to delete student', 'error');
        return;
      }

      if (selectedStudent?.id === studentToDelete.id) {
        setShowStudentModal(false);
        setSelectedStudent(null);
      }

      window.dispatchEvent(new CustomEvent('studentDeleted', { detail: { id: studentToDelete.id } }));
      showToast(`${studentToDelete.name} has been deleted successfully`, 'success');
      setStudentToDelete(null);
      await loadClassData();
    } catch (error) {
      console.error('Error deleting student:', error);
      showToast('Failed to delete student', 'error');
    } finally {
      setDeletingStudent(false);
    }
  };

  // Handle enroll new student
  const handleEnrollNew = () => {
    router.push(`/AdminDashboard/enrollment?class=${encodeURIComponent(className)}&section=${encodeURIComponent(section)}`);
  };

  // Get performance metrics
  const performanceMetrics = useMemo(() => {
    const total = students.length;
    const avgAttendance = students.reduce((sum, s) => sum + (s.attendance || 90), 0) / total || 0;
    const feePaidCount = students.filter(s => s.feeStatus === 'Paid').length;
    const feePendingCount = students.filter(s => s.feeStatus === 'Pending' || s.feeStatus === 'Unpaid').length;
    const biometricEnrolled = students.filter(s => 
      s.biometric?.fingerprint?.enrolled || s.biometric?.face?.enrolled
    ).length;
    
    return { 
      avgAttendance: Math.round(avgAttendance), 
      feePaidCount, 
      feePendingCount,
      biometricEnrolled 
    };
  }, [students]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500">Loading class details...</p>
        </div>
      </div>
    );
  }

  if (!classInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Class Not Found</h3>
          <p className="text-slate-500 mb-4">The class you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/AdminDashboard/classes')} className="bg-blue-600 text-white">
            Back to Classes
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20 px-4 pb-8 pt-0 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-all group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Classes
        </button>

        {/* Class Header Card */}
        <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 px-4 py-5 sm:px-6 sm:py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                    Class {classInfo.className} · Section {classInfo.section}
                  </h1>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {classInfo.incharge !== 'Not Assigned' && (
                      <span className="inline-flex items-center gap-1.5 text-sm text-blue-100">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {classInfo.incharge}
                      </span>
                    )}
                    {classInfo.roomNumber !== 'Not Assigned' && (
                      <span className="inline-flex items-center gap-1.5 text-sm text-blue-100">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Room {classInfo.roomNumber}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-sm text-blue-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {classInfo.academicYear}
                    </span>
                  </div>
                </div>
              </div>
              
              {isAdmin && (
                <Button
                  onClick={handleEnrollNew}
                  className="w-full rounded-xl bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30 sm:w-auto"
                >
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Enroll Student
                </Button>
              )}
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <div className="px-3 py-3 text-center rounded-lg bg-blue-400 border border-blue-400 min-h-[96px]">
              <p className="text-[11px] text-black uppercase tracking-wide">Total</p>
              <p className="text-xl font-bold text-black mt-1">{classInfo.totalStudents}</p>
              <p className="text-[11px] text-black">Students</p>
            </div>
            <div className="px-3 py-3 text-center rounded-lg bg-sky-400 border border-sky-400 min-h-[96px]">
              <p className="text-[11px] text-black uppercase tracking-wide">Boys</p>
              <p className="text-xl font-bold text-black mt-1">{classInfo.maleCount}</p>
              <p className="text-[11px] text-black">{((classInfo.maleCount / classInfo.totalStudents) * 100 || 0).toFixed(0)}%</p>
            </div>
            <div className="px-3 py-3 text-center rounded-lg bg-pink-400 border border-pink-400 min-h-[96px]">
              <p className="text-[11px] text-black uppercase tracking-wide">Girls</p>
              <p className="text-xl font-bold text-black mt-1">{classInfo.femaleCount}</p>
              <p className="text-[11px] text-black">{((classInfo.femaleCount / classInfo.totalStudents) * 100 || 0).toFixed(0)}%</p>
            </div>
            <div className="px-3 py-3 text-center rounded-lg bg-emerald-400 border border-emerald-400 min-h-[96px]">
              <p className="text-[11px] text-black uppercase tracking-wide">Attendance</p>
              <p className="text-xl font-bold text-black mt-1">{performanceMetrics.avgAttendance}%</p>
              <p className="text-[11px] text-black">Average</p>
            </div>
            <div className="px-3 py-3 text-center rounded-lg bg-indigo-400 border border-indigo-400 min-h-[96px]">
              <p className="text-[11px] text-black uppercase tracking-wide">Biometric</p>
              <p className="text-xl font-bold text-black mt-1">{performanceMetrics.biometricEnrolled}</p>
              <p className="text-[11px] text-black">Enrolled</p>
            </div>
            <div className="px-3 py-3 text-center rounded-lg bg-amber-400 border border-amber-400 min-h-[96px]">
              <p className="text-[11px] text-black uppercase tracking-wide">Fee Pending</p>
              <p className="text-xl font-bold text-black mt-1">{performanceMetrics.feePendingCount}</p>
              <p className="text-[11px] text-black">Students</p>
            </div>
          </div>
        </div>

        {/* Search and View Toggle */}
        <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 rounded-xl shadow-lg border border-white/50 p-4">
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full flex-1 sm:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by name, reg number, father's name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-9 pr-3 py-2 border border-blue-200/50 rounded-lg bg-white/50 dark:bg-slate-800/50 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div className="flex w-full gap-2 sm:w-auto">
              <button
                onClick={() => setViewMode('table')}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all sm:flex-none ${
                  viewMode === 'table'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white/50 text-slate-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                Table
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all sm:flex-none ${
                  viewMode === 'grid'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white/50 text-slate-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Grid
              </button>
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          {filteredStudents.length > 0 ? (
            viewMode === 'table' ? (
              <div className="overflow-x-auto">
                <table className="min-w-[920px] w-full">
                  <thead className="bg-blue-600 border-b border-blue-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Reg No</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Student Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Father Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Gender</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Attendance</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Fee Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Biometric</th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100/50">
                    {filteredStudents.map((student) => (
                      <tr
                        key={student.id}
                        onClick={() => handleStudentClick(student)}
                        className="hover:bg-blue-50/30 cursor-pointer transition-all duration-200 group"
                      >
                        <td className="px-6 py-4">
                          <span className="font-mono text-sm font-medium text-black bg-blue-50 px-2 py-1 rounded">
                            {student.regNo}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-black">
                              {student.name?.charAt(0)}
                            </div>
                            <span className="text-sm font-medium text-black transition-colors">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-black">{student.fatherName}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            student.gender === 'Male'
                              ? 'bg-blue-50 text-black'
                              : 'bg-pink-50 text-black'
                          }`}>
                            {student.gender === 'Male' ? '👨' : '👩'} {student.gender}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-slate-100 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-blue-500 h-2 rounded-full transition-all"
                                style={{ width: `${student.attendance || 90}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-medium text-slate-600">
                              {student.attendance || 90}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            (student.feeRecords?.some(r => r.status === 'Paid') || student.feeStatus === 'Paid')
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}>
                            {student.feeRecords?.some(r => r.status === 'Paid') || student.feeStatus === 'Paid' ? '✓ Paid' : '⏳ Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {student.biometric?.fingerprint?.enrolled || student.biometric?.face?.enrolled ? (
                            <span className="inline-flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                              Enrolled
                            </span>
                          ) : (
                            <span className="text-xs text-slate-400">Not Enrolled</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={(e) => handleQuickView(student, e)}
                              className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Quick View"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => handleEditStudent(student, e)}
                              className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit Student"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => handleOpenDeleteModal(student, e)}
                              className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                              title={canDeleteStudent ? 'Delete Student' : 'No permission to delete student'}
                              disabled={!canDeleteStudent}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              // Grid View
              <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    onClick={() => handleStudentClick(student)}
                    className="group bg-white/80 dark:bg-slate-800/80 border border-blue-100/50 rounded-xl p-4 hover:shadow-lg hover:border-blue-300 cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold">
                          {student.name?.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {student.name}
                          </h3>
                          <p className="text-xs text-slate-400 font-mono">{student.regNo}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleQuickView(student, e)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="space-y-2 text-sm border-t border-blue-100/50 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Father:</span>
                        <span className="font-medium text-slate-700">{student.fatherName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Gender:</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          student.gender === 'Male' ? 'bg-blue-50 text-blue-700' : 'bg-pink-50 text-pink-700'
                        }`}>
                          {student.gender}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Attendance:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-100 rounded-full h-1.5">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full"
                              style={{ width: `${student.attendance || 90}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600">{student.attendance || 90}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Biometric:</span>
                        <span className={`text-xs ${student.biometric?.fingerprint?.enrolled || student.biometric?.face?.enrolled ? 'text-emerald-600' : 'text-slate-400'}`}>
                          {student.biometric?.fingerprint?.enrolled || student.biometric?.face?.enrolled ? '✓ Enrolled' : 'Not Enrolled'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">No students found</h3>
              <p className="text-sm text-slate-500 max-w-sm">
                {searchTerm
                  ? `No results matching "${searchTerm}"`
                  : `No students enrolled in Class ${className} Section ${section}`}
              </p>
              {isAdmin && !searchTerm && (
                <Button
                  onClick={handleEnrollNew}
                  className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2.5 text-white sm:w-auto"
                >
                  <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Enroll First Student
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Timetable Section */}
        {classInfo.timetable && classInfo.timetable.length > 0 && (
          <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 rounded-2xl shadow-xl border border-white/50 overflow-hidden">
            <div className="border-b border-blue-200/50 px-4 py-4 sm:px-6">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Class Timetable
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {classInfo.timetable.map((period, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-3 rounded-lg border border-blue-200/50 bg-gradient-to-r from-blue-50/50 to-emerald-50/50 p-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-xs font-medium text-blue-600">Period {period.period || idx + 1}</p>
                      <p className="text-sm font-medium text-slate-800 mt-1">{period.subject}</p>
                      <p className="text-xs text-slate-500 mt-1">{period.time}</p>
                    </div>
                    {period.teacher && (
                      <div className="text-left sm:text-right">
                        <p className="text-xs text-slate-400">Teacher</p>
                        <p className="text-xs font-medium text-slate-600">{period.teacher}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {showStudentModal && selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 border-b border-blue-700 bg-blue-600 p-4 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-white">Student Details</h2>
                <button
                  onClick={() => setShowStudentModal(false)}
                  className="p-2 text-blue-100 hover:text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-6 flex items-center gap-4">
                {selectedStudent.photo ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200">
                    <img src={selectedStudent.photo} alt={selectedStudent.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-semibold">
                    {selectedStudent.name?.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">{selectedStudent.name}</h3>
                  <p className="text-sm text-slate-500 font-mono">{selectedStudent.regNo}</p>
                  <p className="text-xs text-blue-600 mt-1">Class {selectedStudent.class} - Section {selectedStudent.section}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Father's Name</span>
                    <span className="text-sm font-medium text-slate-700">{selectedStudent.fatherName}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Mother's Name</span>
                    <span className="text-sm font-medium text-slate-700">{selectedStudent.motherName || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Gender</span>
                    <span className="text-sm">{selectedStudent.gender}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">CNIC/B-Form</span>
                    <span className="text-sm font-mono">{selectedStudent.cnic || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Phone</span>
                    <span className="text-sm">{selectedStudent.phone || 'N/A'}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Date of Birth</span>
                    <span className="text-sm">{selectedStudent.dob || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Attendance</span>
                    <span className="text-sm font-semibold text-blue-600">{selectedStudent.attendance || 90}%</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Fee Status</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      (selectedStudent.feeRecords?.some(r => r.status === 'Paid') || selectedStudent.feeStatus === 'Paid')
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      {selectedStudent.feeRecords?.some(r => r.status === 'Paid') || selectedStudent.feeStatus === 'Paid' ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Biometric</span>
                    <span className={`text-sm ${selectedStudent.biometric?.fingerprint?.enrolled || selectedStudent.biometric?.face?.enrolled ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {selectedStudent.biometric?.fingerprint?.enrolled || selectedStudent.biometric?.face?.enrolled ? '✓ Enrolled' : 'Not Enrolled'}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-blue-100 py-2 sm:flex-row sm:justify-between">
                    <span className="text-sm text-slate-500">Email</span>
                    <span className="text-sm">{selectedStudent.email || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 flex flex-col gap-3 border-t border-blue-100 bg-slate-50 p-4 dark:border-blue-800 dark:bg-slate-900/50 sm:flex-row sm:justify-end sm:p-6">
              <Button variant="secondary" onClick={() => setShowStudentModal(false)} className="px-4 py-2">
                Close
              </Button>
              <Button
                onClick={() => {
                  setShowStudentModal(false);
                  handleStudentClick(selectedStudent);
                }}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2"
              >
                View Full Profile
              </Button>
            </div>
          </div>
        </div>
      )}

      {studentToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-red-100 overflow-hidden">
            <div className="border-b border-red-700 bg-red-600 px-4 py-5 sm:px-6">
              <h2 className="text-xl font-bold text-white">Delete Student</h2>
            </div>
            <div className="px-4 py-6 sm:px-6">
              <p className="text-base font-bold text-black">
                Are you sure want to delet {studentToDelete.name}?
              </p>
            </div>
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
              <Button
                variant="secondary"
                onClick={handleCloseDeleteModal}
                disabled={deletingStudent}
                className="px-5 py-2"
              >
                No
              </Button>
              <Button
                onClick={handleDeleteStudent}
                disabled={deletingStudent || !canDeleteStudent}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2"
              >
                {deletingStudent ? 'Deleting...' : 'Yes'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
