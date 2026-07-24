'use client';

import { STORAGE_KEYS, buildError, buildSuccess, readList, writeList } from './storage';

function getClasses() {
  return readList(STORAGE_KEYS.CLASSES);
}

function getStudents() {
  return readList(STORAGE_KEYS.STUDENTS);
}

function dispatchClassesUpdated(classes) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('classesUpdated', { detail: classes }));
}

function normalizeValue(value) {
  return String(value || '').trim().toLowerCase();
}

const classService = {
  async getAll() {
    return buildSuccess(getClasses());
  },

  async create(classData) {
    const classes = getClasses();
    const normalizedIncharge = normalizeValue(classData.incharge);

    if (normalizedIncharge) {
      const conflict = classes.find((item) => normalizeValue(item.incharge) === normalizedIncharge);
      if (conflict) {
        return buildError(
          `This teacher is already assigned as class incharge for ${conflict.name} - Section ${conflict.section}`
        );
      }
    }

    const newClass = {
      id: classData.id || Date.now(),
      ...classData,
    };
    const nextClasses = [...classes, newClass];
    writeList(STORAGE_KEYS.CLASSES, nextClasses);
    dispatchClassesUpdated(nextClasses);
    return buildSuccess(newClass, 'Class created successfully');
  },

  async update(id, classData) {
    const classes = getClasses();
    const index = classes.findIndex((item) => String(item.id) === String(id));
    if (index === -1) {
      return buildError('Class not found');
    }

    const normalizedIncharge = normalizeValue(classData.incharge);
    if (normalizedIncharge) {
      const conflict = classes.find(
        (item) => String(item.id) !== String(id) && normalizeValue(item.incharge) === normalizedIncharge
      );
      if (conflict) {
        return buildError(
          `This teacher is already assigned as class incharge for ${conflict.name} - Section ${conflict.section}`
        );
      }
    }

    const updatedClass = { ...classes[index], ...classData, id: classes[index].id };
    const nextClasses = [...classes];
    nextClasses[index] = updatedClass;
    writeList(STORAGE_KEYS.CLASSES, nextClasses);
    dispatchClassesUpdated(nextClasses);
    return buildSuccess(updatedClass, 'Class updated successfully');
  },

  async delete(id) {
    const classes = getClasses();
    const nextClasses = classes.filter((item) => String(item.id) !== String(id));
    writeList(STORAGE_KEYS.CLASSES, nextClasses);
    dispatchClassesUpdated(nextClasses);
    return buildSuccess(true, 'Class deleted successfully');
  },

  async getClassWithStudents(className, section) {
    const classItem = getClasses().find(
      (item) => item.name === className && item.section === section
    );
    if (!classItem) {
      return buildError('Class not found');
    }

    const students = getStudents().filter(
      (student) => student.class === className && student.section === section
    );

    return buildSuccess({
      ...classItem,
      students,
      totalStudents: students.length,
    });
  },
};

export default classService;
