'use client';

import { STORAGE_KEYS, buildError, buildSuccess, readList, writeList } from './storage';

function getStudents() {
  return readList(STORAGE_KEYS.STUDENTS);
}

function matchesStudent(left, right) {
  if (!left || !right) return false;

  const leftId = left.id ?? left._id ?? left.regNo;
  const rightId = right.id ?? right._id ?? right.regNo;

  return leftId !== undefined && rightId !== undefined && String(leftId) === String(rightId);
}

const studentService = {
  async getAll() {
    return buildSuccess(getStudents());
  },

  async getStudentsByClass(className, section) {
    const students = getStudents().filter(
      (student) => student.class === className && student.section === section
    );
    return buildSuccess(students);
  },

  async getClassStatistics(className, section) {
    const students = getStudents().filter(
      (student) => student.class === className && student.section === section
    );
    const maleCount = students.filter((student) => student.gender === 'Male').length;
    const femaleCount = students.filter((student) => student.gender === 'Female').length;
    const feePendingCount = students.filter((student) => {
      const records = Array.isArray(student.feeRecords) ? student.feeRecords : [];
      const hasPaid = records.some((record) => record.status === 'Paid');
      return !hasPaid && student.feeStatus !== 'Paid';
    }).length;

    return buildSuccess({
      total: students.length,
      maleCount,
      femaleCount,
      feePendingCount,
      students,
    });
  },

  async update(id, studentData) {
    const students = getStudents();
    const index = students.findIndex((student) =>
      matchesStudent(student, { id, _id: id, regNo: studentData?.regNo })
    );

    if (index === -1) {
      return buildError('Student not found');
    }

    const updatedStudent = { ...students[index], ...studentData };
    const nextStudents = [...students];
    nextStudents[index] = updatedStudent;
    writeList(STORAGE_KEYS.STUDENTS, nextStudents);

    return buildSuccess(updatedStudent, 'Student updated successfully');
  },

  async deleteStudent(id) {
    const students = getStudents();
    const index = students.findIndex((student) =>
      matchesStudent(student, { id, _id: id, regNo: id })
    );

    if (index === -1) {
      return buildError('Student not found');
    }

    const deletedStudent = students[index];
    const nextStudents = students.filter((student) => !matchesStudent(student, { id, _id: id, regNo: id }));
    writeList(STORAGE_KEYS.STUDENTS, nextStudents);

    return buildSuccess(deletedStudent, 'Student deleted successfully');
  },
};

export default studentService;
