'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../authservice/useAuth';
import Tabs from '../components/ui/Tabs';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { apiRequest } from '../authservice/api';
import { showToast } from '../../utils/helpers';

// Constants
const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const DEFAULT_CLASSES = [];
const PREVIOUS_CLASS_OPTIONS = ['Nursary', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

function isValidDateParts(day, month, year) {
  const numericDay = Number(day);
  const numericMonth = Number(month);
  const numericYear = Number(year);

  if (!numericDay || !numericMonth || !numericYear) return false;

  const date = new Date(numericYear, numericMonth - 1, numericDay);
  return (
    date.getFullYear() === numericYear &&
    date.getMonth() === numericMonth - 1 &&
    date.getDate() === numericDay
  );
}

function formatDateForDisplay(value) {
  if (!value) return '';

  const stringValue = String(value).trim();
  const displayMatch = stringValue.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (displayMatch) {
    const [, day, month, year] = displayMatch;
    return isValidDateParts(day, month, year) ? stringValue : '';
  }

  const isoMatch = stringValue.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return isValidDateParts(day, month, year) ? `${day}/${month}/${year}` : '';
  }

  const parsedDate = new Date(stringValue);
  if (Number.isNaN(parsedDate.getTime())) return stringValue;

  const day = String(parsedDate.getDate()).padStart(2, '0');
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const year = String(parsedDate.getFullYear());
  return `${day}/${month}/${year}`;
}

function formatDateInput(value) {
  const digitsOnly = String(value || '')
    .replace(/\D/g, '')
    .slice(0, 8);

  if (digitsOnly.length <= 2) return digitsOnly;
  if (digitsOnly.length <= 4) return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2)}`;
  return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2, 4)}/${digitsOnly.slice(4)}`;
}

function convertDisplayDateToIso(value) {
  if (!value) return '';

  const trimmedValue = String(value).trim();
  const displayMatch = trimmedValue.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!displayMatch) return trimmedValue;

  const [, day, month, year] = displayMatch;
  if (!isValidDateParts(day, month, year)) return trimmedValue;

  return `${year}-${month}-${day}`;
}

function formatCnicInput(value) {
  const digitsOnly = String(value || '')
    .replace(/\D/g, '')
    .slice(0, 13);

  if (digitsOnly.length <= 5) return digitsOnly;
  if (digitsOnly.length <= 12) return `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5)}`;
  return `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5, 12)}-${digitsOnly.slice(12)}`;
}

function formatPhoneInput(value) {
  const digitsOnly = String(value || '')
    .replace(/\D/g, '')
    .slice(0, 11);

  if (digitsOnly.length <= 4) return digitsOnly;
  return `${digitsOnly.slice(0, 4)}-${digitsOnly.slice(4)}`;
}

export default function EnrollmentPage() {
  const router = useRouter();
  const { isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [showFaceModal, setShowFaceModal] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);
  const [faceCaptured, setFaceCaptured] = useState(false);
  const [fingerprintData, setFingerprintData] = useState(null);
  const [faceData, setFaceData] = useState(null);
  const [studentPhoto, setStudentPhoto] = useState(null);
  const [studentPhotoPreview, setStudentPhotoPreview] = useState(null);
  const [classes, setClasses] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const photoInputRef = useRef(null);
  const printRef = useRef(null);
  
  const [formData, setFormData] = useState({
    studentInfo: {
      name: '',
      dob: '',
      cnic: '',
      address: '',
      gender: 'Male',
      phone: '',
      email: '',
      photo: null
    },
    parentInfo: {
      fatherName: '',
      fatherCNIC: '',
      fatherPhone: '',
      motherName: '',
      motherPhone: '',
      parentWhatsApp: '',
      monthlyIncome: ''
    },
    education: {
      registrationNo: '',
      enrollmentClass: '',
      previousClass: '',
      previousSchool: '',
      documents: []
    },
    fee: {
      registrationFee: 0,
      monthlyFee: 0,
      mode: 'Monthly',
      discount: 0,
      annualDiscount: 0
    },
    
    biometric: {
      fingerprintEnrolled: false,
      faceEnrolled: false,
      fingerprintTemplate: null,
      faceTemplate: null
    }
  });

  const [submitted, setSubmitted] = useState(false);
  const [enrollmentProgress, setEnrollmentProgress] = useState(0);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Initialize classes data
  useEffect(() => {
    const initializeClasses = () => {
      const savedClasses = localStorage.getItem('school_classes');
      if (savedClasses) {
        setClasses(JSON.parse(savedClasses));
      } else {
        setClasses(DEFAULT_CLASSES);
        localStorage.setItem('school_classes', JSON.stringify(DEFAULT_CLASSES));
      }
    };

    initializeClasses();

    // Listen for class updates
    const handleClassesUpdate = (event) => {
      setClasses(event.detail);
    };

    window.addEventListener('classesUpdated', handleClassesUpdate);
    
    return () => {
      window.removeEventListener('classesUpdated', handleClassesUpdate);
    };
  }, []);

  useEffect(() => {
    if (!showSuccessModal) return undefined;

    const timeoutId = window.setTimeout(() => {
      setShowSuccessModal(false);
    }, 2200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [showSuccessModal]);

  const tabs = [
    { id: 0, name: 'Student Info', icon: '👤' },
    { id: 1, name: 'Parent Info', icon: '👨‍👩‍👧' },
    { id: 2, name: 'Education', icon: '📚' },
    { id: 3, name: 'Fee Section', icon: '💰' },
    { id: 4, name: 'Biometric', icon: '🔐' }
  ];

  const calculateMonthlyPayable = useCallback(() => {
    return formData.fee.monthlyFee - (formData.fee.mode === 'Monthly' ? formData.fee.discount : 0);
  }, [formData.fee]);

  const calculateAnnualPayable = useCallback(() => {
    return (formData.fee.monthlyFee * 12) - (formData.fee.annualDiscount || 0);
  }, [formData.fee]);

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!ALLOWED_PHOTO_TYPES.includes(file.type)) {
      showToast('Please upload a valid image file (JPEG, PNG, or WebP)', 'error');
      return;
    }

    if (file.size > MAX_PHOTO_SIZE) {
      showToast('Image size should be less than 5MB', 'error');
      return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setStudentPhoto(file);
      setStudentPhotoPreview(reader.result);
      setFormData(prev => ({
        ...prev,
        studentInfo: { ...prev.studentInfo, photo: reader.result }
      }));
      showToast('Photo uploaded successfully!', 'success');
    };
    reader.readAsDataURL(file);
  };

  // Remove photo
  const removePhoto = () => {
    setStudentPhoto(null);
    setStudentPhotoPreview(null);
    setFormData(prev => ({
      ...prev,
      studentInfo: { ...prev.studentInfo, photo: null }
    }));
    if (photoInputRef.current) {
      photoInputRef.current.value = '';
    }
    showToast('Photo removed', 'info');
  };

  // Simulate fingerprint capture
  const captureFingerprint = () => {
    setCapturing(true);
    setTimeout(() => {
      const mockFingerprint = {
        templateId: `FP_${Date.now()}`,
        data: "MOCK_FINGERPRINT_DATA_" + Math.random().toString(36).substring(7),
        quality: Math.floor(Math.random() * 30) + 70
      };
      setFingerprintData(mockFingerprint);
      setFingerprintCaptured(true);
      setCapturing(false);
      showToast('Fingerprint captured successfully!', 'success');
    }, 2000);
  };

  // Face capture functions
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      showToast('Camera started. Position your face in the frame.', 'info');
    } catch (error) {
      showToast('Unable to access camera. Please check permissions.', 'error');
    }
  };

  const captureFace = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      
      const imageData = canvasRef.current.toDataURL('image/jpeg');
      
      setCapturing(true);
      setTimeout(() => {
        const mockFaceData = {
          faceId: `FACE_${Date.now()}`,
          imageData: imageData,
          confidence: Math.floor(Math.random() * 20) + 80
        };
        setFaceData(mockFaceData);
        setFaceCaptured(true);
        setCapturing(false);
        stopCamera();
        showToast('Face captured successfully!', 'success');
      }, 1500);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const resetBiometric = () => {
    setFingerprintCaptured(false);
    setFaceCaptured(false);
    setFingerprintData(null);
    setFaceData(null);
    setCapturing(false);
    stopCamera();
  };

  // Print Bill Function
  const printBill = () => {
    const printContent = printRef.current.innerHTML;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Student Enrollment Bill</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Arial', sans-serif; padding: 40px; background: white; }
            .bill-container { max-width: 800px; margin: 0 auto; background: white; }
            .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #14b8a6; }
            .school-name { font-size: 28px; font-weight: bold; color: #0f766e; margin-bottom: 5px; }
            .bill-title { font-size: 24px; color: #2d3748; margin-top: 10px; }
            .student-info, .fee-details { margin-bottom: 30px; }
            .section-title { font-size: 18px; font-weight: bold; color: #0f766e; margin-bottom: 15px; padding-bottom: 5px; border-bottom: 1px solid #e2e8f0; }
            .info-row { display: flex; margin-bottom: 10px; padding: 5px 0; }
            .info-label { width: 150px; font-weight: 600; color: #4a5568; }
            .info-value { flex: 1; color: #2d3748; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #e2e8f0; }
            th { background-color: #f7fafc; font-weight: 600; color: #0f766e; }
            .total-row { font-weight: bold; background-color: #f7fafc; }
            .footer { margin-top: 40px; padding-top: 20px; text-align: center; border-top: 1px solid #e2e8f0; color: #718096; font-size: 12px; }
            .signature { margin-top: 40px; display: flex; justify-content: space-between; }
            .sign-line { width: 200px; text-align: center; border-top: 1px solid #000; padding-top: 5px; margin-top: 30px; }
            @media print { body { padding: 0; } }
          </style>
        </head>
        <body>
          <div class="bill-container">${printContent}</div>
          <script>window.onload = () => { window.print(); setTimeout(() => window.close(), 500); };<\/script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleSubmit = () => {
    if (!isAdmin) {
      showToast('Only admin can enroll students', 'error');
      return;
    }
    
    if (!formData.studentInfo.name || !formData.parentInfo.fatherName || !formData.education.enrollmentClass) {
      showToast('Please fill all required fields', 'error');
      return;
    }

    if (
      formData.studentInfo.dob &&
      convertDisplayDateToIso(formData.studentInfo.dob) === formData.studentInfo.dob
    ) {
      showToast('Date of Birth must use dd/mm/yyyy format', 'error');
      return;
    }

    if (!fingerprintCaptured && !faceCaptured) {
      showToast('Please complete at least one biometric enrollment (fingerprint or face)', 'warning');
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setEnrollmentProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        (async () => {
          try {
            const selectedClassData = classes.find(
              (c) => `${c.name} - ${c.section}` === formData.education.enrollmentClass
            );
            const [fallbackClass = '', fallbackSection = ''] =
              formData.education.enrollmentClass.split(' - ');
            const registrationNumber =
              formData.education.registrationNo || `REG${Date.now()}`;
            const feeRecords = [
              {
                month: new Date().toLocaleString('default', { month: 'long' }),
                year: new Date().getFullYear(),
                amount: calculateMonthlyPayable(),
                status: 'Pending',
                paidDate: null,
              },
            ];

            const payload = {
              fullName: formData.studentInfo.name,
              gender: formData.studentInfo.gender,
              dob: convertDisplayDateToIso(formData.studentInfo.dob),
              cnicBForm: formData.studentInfo.cnic,
              phoneNumber: formData.studentInfo.phone,
              email: formData.studentInfo.email,
              address: formData.studentInfo.address,
              fatherName: formData.parentInfo.fatherName,
              fatherCNIC: formData.parentInfo.fatherCNIC,
              fatherPhone: formData.parentInfo.fatherPhone,
              motherName: formData.parentInfo.motherName,
              motherPhone: formData.parentInfo.motherPhone,
              whatsappNumber: formData.parentInfo.parentWhatsApp,
              monthlyIncome: formData.parentInfo.monthlyIncome,
              registrationNumber,
              enrollmentClass: formData.education.enrollmentClass,
              previousClass: formData.education.previousClass,
              previousSchool: formData.education.previousSchool,
              fee: {
                registrationFee: formData.fee.registrationFee,
                monthlyFee: formData.fee.monthlyFee,
                mode: formData.fee.mode,
                discount: formData.fee.discount,
                annualDiscount: formData.fee.annualDiscount,
              },
              biometric: {
                fingerprintEnrolled: fingerprintCaptured,
                faceEnrolled: faceCaptured,
                fingerprintTemplate: fingerprintData?.templateId || '',
                faceTemplate: faceData?.faceId || '',
              },
              feeRecords,
              photo: formData.studentInfo.photo,
              status: 'Active',
            };

            const result = await apiRequest('/students/createStudent', {
              method: 'POST',
              data: payload,
              successMessage: 'Student successfully added to the database',
            });

            const savedStudent = result?.student;
            const newStudent = {
              id: savedStudent?._id || Date.now(),
              name: savedStudent?.fullName || formData.studentInfo.name,
              photo: savedStudent?.photo || formData.studentInfo.photo,
              regNo: savedStudent?.registrationNumber || registrationNumber,
              cnic: savedStudent?.cnicBForm || formData.studentInfo.cnic,
              class: selectedClassData?.name || fallbackClass,
              section: selectedClassData?.section || fallbackSection,
              gender: savedStudent?.gender || formData.studentInfo.gender,
              dob: savedStudent?.dob || formData.studentInfo.dob,
              address: savedStudent?.address || formData.studentInfo.address,
              phone: savedStudent?.phoneNumber || formData.studentInfo.phone,
              email: savedStudent?.email || formData.studentInfo.email,
              fatherName: savedStudent?.fatherName || formData.parentInfo.fatherName,
              fatherCNIC: savedStudent?.fatherCNIC || formData.parentInfo.fatherCNIC,
              fatherPhone: savedStudent?.fatherPhone || formData.parentInfo.fatherPhone,
              motherName: savedStudent?.motherName || formData.parentInfo.motherName,
              motherPhone: savedStudent?.motherPhone || formData.parentInfo.motherPhone,
              parentWhatsApp: savedStudent?.whatsappNumber || formData.parentInfo.parentWhatsApp,
              monthlyIncome: savedStudent?.monthlyIncome || formData.parentInfo.monthlyIncome,
              enrollmentClass: savedStudent?.enrollmentClass || formData.education.enrollmentClass,
              previousClass: savedStudent?.previousClass || formData.education.previousClass,
              previousSchool: savedStudent?.previousSchool || formData.education.previousSchool,
              documents: formData.education.documents,
              feeStructure: {
                registrationFee: savedStudent?.fee?.registrationFee ?? formData.fee.registrationFee,
                monthlyFee: savedStudent?.fee?.monthlyFee ?? formData.fee.monthlyFee,
                mode: savedStudent?.fee?.mode || formData.fee.mode,
                discount: savedStudent?.fee?.discount ?? formData.fee.discount,
                annualDiscount:
                  savedStudent?.fee?.annualDiscount ?? formData.fee.annualDiscount,
                total:
                  (savedStudent?.fee?.mode || formData.fee.mode) === 'Monthly'
                    ? calculateMonthlyPayable()
                    : calculateAnnualPayable(),
                monthlyPayable: calculateMonthlyPayable(),
                annualPayable: calculateAnnualPayable(),
              },
              feeRecords: savedStudent?.feeRecords || feeRecords,
              biometric: {
                fingerprint: {
                  enrolled: savedStudent?.biometric?.fingerprintEnrolled ?? fingerprintCaptured,
                  templateId: savedStudent?.biometric?.fingerprintTemplate || fingerprintData?.templateId,
                  enrollmentDate: new Date().toISOString(),
                },
                face: {
                  enrolled: savedStudent?.biometric?.faceEnrolled ?? faceCaptured,
                  faceId: savedStudent?.biometric?.faceTemplate || faceData?.faceId,
                  enrollmentDate: new Date().toISOString(),
                },
              },
              results: {},
              attendanceSettings: {
                requireParentNotification: true,
                notificationPreference: 'whatsapp',
                earlyLeavePermission: false,
              },
              enrollmentDate: savedStudent?.createdAt || new Date().toISOString(),
            };

            const existingStudents = JSON.parse(localStorage.getItem('school_students') || '[]');
            existingStudents.push(newStudent);
            localStorage.setItem('school_students', JSON.stringify(existingStudents));

            if (selectedClassData) {
              const allClasses = JSON.parse(localStorage.getItem('school_classes') || '[]');
              const updatedClasses = allClasses.map((c) => {
                if (c.id === selectedClassData.id) {
                  return { ...c, studentCount: (c.studentCount || 0) + 1 };
                }
                return c;
              });
              localStorage.setItem('school_classes', JSON.stringify(updatedClasses));
              window.dispatchEvent(new CustomEvent('classesUpdated', { detail: updatedClasses }));
            }

            window.dispatchEvent(new CustomEvent('studentEnrolled', { detail: newStudent }));

            setCurrentStudent(newStudent);
            setModalMessage('Student created successfully and added to the database.');
            setSubmitted(true);
            setShowSuccessModal(true);
          } catch (error) {
            setEnrollmentProgress(0);
            setModalMessage(error.message || 'Unable to create student right now.');
            setShowErrorModal(true);
          }
        })();
      }
    }, 200);
  };

  if (submitted && currentStudent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 px-4 pb-8 pt-0 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {showSuccessModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
                    <CheckCircle className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Success
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{modalMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bill for Printing */}
          <div ref={printRef} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-4 sm:p-8">
              {/* Header */}
              <div className="text-center border-b-2 border-blue-500 pb-6 mb-6">
                <h1 className="text-2xl font-bold text-blue-700 sm:text-3xl">School Management System</h1>
                <p className="text-gray-500 mt-1">123 Education Street, City - 12345 | Tel: (555) 123-4567</p>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 sm:text-2xl">Student Enrollment Bill</h2>
                <p className="text-gray-600 mt-1">Bill Date: {new Date().toLocaleDateString()}</p>
              </div>

              {/* Student Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 border-b border-gray-200 pb-2 mb-4">Student Information</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500">Student Name</p>
                    <p className="font-semibold text-gray-800">{currentStudent.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Registration No</p>
                    <p className="font-semibold text-gray-800">{currentStudent.regNo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Class & Section</p>
                    <p className="font-semibold text-gray-800">{currentStudent.class} - {currentStudent.section}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-semibold text-gray-800">{currentStudent.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Father's Name</p>
                    <p className="font-semibold text-gray-800">{currentStudent.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact Number</p>
                    <p className="font-semibold text-gray-800">{currentStudent.phone}</p>
                  </div>
                </div>
              </div>

              {/* Fee Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 border-b border-gray-200 pb-2 mb-4">Fee Structure</h3>
                <div className="overflow-x-auto">
                <table className="min-w-[420px] w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-2">Particulars</th>
                      <th className="text-right p-2">Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Registration Fee</td>
                      <td className="text-right p-2">{currentStudent.feeStructure.registrationFee.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="p-2">Monthly Tuition Fee</td>
                      <td className="text-right p-2">{currentStudent.feeStructure.monthlyFee.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="p-2">Discount ({currentStudent.feeStructure.mode})</td>
                      <td className="text-right p-2 text-red-600">
                        - {currentStudent.feeStructure.mode === 'Monthly' 
                          ? currentStudent.feeStructure.discount.toLocaleString() 
                          : currentStudent.feeStructure.annualDiscount.toLocaleString()}
                      </td>
                    </tr>
                    <tr className="bg-blue-50 font-bold">
                      <td className="p-2">Total Payable ({currentStudent.feeStructure.mode})</td>
                      <td className="text-right p-2 text-blue-600">
                        PKR {Math.round(currentStudent.feeStructure.total).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>

              {/* Biometric Status */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 border-b border-gray-200 pb-2 mb-4">Biometric Enrollment Status</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500">Fingerprint</p>
                    <p className="font-semibold text-green-600">
                      {currentStudent.biometric.fingerprint.enrolled ? '✓ Enrolled' : '✗ Not Enrolled'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Face Recognition</p>
                    <p className="font-semibold text-green-600">
                      {currentStudent.biometric.face.enrolled ? '✓ Enrolled' : '✗ Not Enrolled'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Authorized Signature</p>
                    <div className="mt-8 w-40 border-t border-gray-400"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Student/Parent Signature</p>
                    <div className="mt-8 w-40 border-t border-gray-400"></div>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-400 mt-6">
                  This is a computer-generated bill and does not require a physical signature.
                  Please retain this bill for future reference.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              onClick={printBill}
               className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl sm:w-auto"
            >
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Bill
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => router.push('/AdminDashboard/students')}
               className="w-full rounded-xl border border-blue-300 px-8 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50 sm:w-auto"
            >
              Exit to Students
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 px-4 pb-8 pt-0 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 rounded-2xl border border-white/20 bg-gradient-to-r from-blue-600/90 to-emerald-600/90 p-4 text-white shadow-2xl backdrop-blur-xl sm:p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl backdrop-blur-sm">
              📝
            </div>
            <div>
              <h1 className="text-2xl font-bold">Student Enrollment</h1>
              <p className="text-blue-100 text-sm">Register new student with biometric verification</p>
            </div>
            <button
              type="button"
              onClick={() => setShowCancelModal(true)}
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/20 sm:ml-auto sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {enrollmentProgress > 0 && enrollmentProgress < 100 && (
          <div className="mb-6">
            <div className="backdrop-blur-xl bg-white/60 rounded-xl p-4 shadow-xl border border-white/50">
              <p className="text-sm font-medium text-slate-700 mb-2">Enrolling student...</p>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-300 relative overflow-hidden"
                  style={{ width: `${enrollmentProgress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-mono">{enrollmentProgress}% complete</p>
            </div>
          </div>
        )}
      
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
          <Tabs tabs={tabs.map(t => t.name)} activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="p-4 sm:p-6">
            {/* Student Info Tab */}
            {activeTab === 0 && (
              <div className="space-y-6">
                {/* Photo Upload Section */}
                <div className="bg-gradient-to-br from-blue-50/50 to-emerald-50/50 rounded-xl p-6 border border-blue-200/50">
                  <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                    <div className="relative group">
                      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-blue-100 to-emerald-100 shadow-lg sm:h-28 sm:w-28">
                        {studentPhotoPreview ? (
                          <img 
                            src={studentPhotoPreview} 
                            alt="Student preview" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center">
                            <svg className="w-12 h-12 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <p className="text-xs text-blue-600 mt-1">Add photo</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => photoInputRef.current?.click()}
                          className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
                          title="Upload photo"
                        >
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </button>
                        {studentPhotoPreview && (
                          <button
                            onClick={removePhoto}
                            className="p-2 bg-white rounded-full hover:bg-red-50 transition-colors"
                            title="Remove photo"
                          >
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>
                      
                      <input
                        ref={photoInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">Student Photo</h3>
                      <p className="text-sm text-slate-500 mb-3">
                        Upload a clear passport-size photo for student ID card and records.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <Button 
                          onClick={() => photoInputRef.current?.click()}
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-sm px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                        >
                          📸 Upload Photo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Student Information Form */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={formData.studentInfo.name}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        studentInfo: { ...prev.studentInfo, name: e.target.value }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Enter student's full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Gender *</label>
                    <select
                      value={formData.studentInfo.gender}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        studentInfo: { ...prev.studentInfo, gender: e.target.value }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={formData.studentInfo.dob}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        studentInfo: { ...prev.studentInfo, dob: formatDateInput(e.target.value) }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="dd/mm/yyyy"
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">CNIC/B-Form Number</label>
                    <input
                      type="text"
                      value={formData.studentInfo.cnic}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        studentInfo: { ...prev.studentInfo, cnic: formatCnicInput(e.target.value) }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="12345-6789012-3"
                      inputMode="numeric"
                      maxLength={15}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={formData.studentInfo.phone}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        studentInfo: { ...prev.studentInfo, phone: formatPhoneInput(e.target.value) }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="0300-1234567"
                      maxLength={12}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.studentInfo.email}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        studentInfo: { ...prev.studentInfo, email: e.target.value }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="student@gmail.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                    <textarea
                      value={formData.studentInfo.address}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        studentInfo: { ...prev.studentInfo, address: e.target.value }
                      }))}
                      rows={3}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Enter complete address"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Parent Info Tab */}
            {activeTab === 1 && (
              <div className="space-y-5">
                <div className="bg-gradient-to-br from-blue-50/50 to-emerald-50/50 rounded-xl p-6 border border-blue-200/50">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Parent/Guardian Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Father's Name *</label>
                      <input
                        type="text"
                        value={formData.parentInfo.fatherName}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          parentInfo: { ...prev.parentInfo, fatherName: e.target.value }
                        }))}
                        className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="Father's full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Father's CNIC</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={formData.parentInfo.fatherCNIC}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        parentInfo: { ...prev.parentInfo, fatherCNIC: formatCnicInput(e.target.value) }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="12345-6789012-3"
                      maxLength={15}
                    />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Father's Phone</label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        value={formData.parentInfo.fatherPhone}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          parentInfo: { ...prev.parentInfo, fatherPhone: formatPhoneInput(e.target.value) }
                        }))}
                        className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="0300-1234567"
                        maxLength={12}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Mother's Name</label>
                      <input
                        type="text"
                        value={formData.parentInfo.motherName}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          parentInfo: { ...prev.parentInfo, motherName: e.target.value }
                        }))}
                        className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="Mother's full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Mother's Phone</label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        value={formData.parentInfo.motherPhone}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          parentInfo: { ...prev.parentInfo, motherPhone: formatPhoneInput(e.target.value) }
                        }))}
                        className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="0300-1234567"
                        maxLength={12}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp Number</label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        value={formData.parentInfo.parentWhatsApp}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          parentInfo: { ...prev.parentInfo, parentWhatsApp: formatPhoneInput(e.target.value) }
                        }))}
                        className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="0300-1234567"
                        maxLength={12}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Income (PKR)</label>
                      <input
                        type="number"
                        value={formData.parentInfo.monthlyIncome}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          parentInfo: { ...prev.parentInfo, monthlyIncome: e.target.value }
                        }))}
                        className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="50000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 2 && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Registration Number</label>
                    <input
                      type="text"
                      value={formData.education.registrationNo}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        education: { ...prev.education, registrationNo: e.target.value }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="REG2024001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Enrollment Class *</label>
                    <select
                      value={formData.education.enrollmentClass}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        education: { ...prev.education, enrollmentClass: e.target.value }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <option value="">Select Class</option>
                      {classes.map(c => (
                        <option key={c.id} value={`${c.name} - ${c.section}`}>
                          {c.name} - Section {c.section} (Incharge: {c.incharge})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Previous Class</label>
                    <select
                      value={formData.education.previousClass}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        education: { ...prev.education, previousClass: e.target.value }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <option value="">Select Previous Class</option>
                      {PREVIOUS_CLASS_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Previous School</label>
                    <input
                      type="text"
                      value={formData.education.previousSchool}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        education: { ...prev.education, previousSchool: e.target.value }
                      }))}
                      className="w-full rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Name of previous school"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Fee Section Tab */}
            {activeTab === 3 && (
              <div className="space-y-6">
                {/* Basic Fee Structure */}
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-lg text-blue-800 mb-4">💰 Fee Structure</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                      <label className="text-sm text-slate-600">Registration Fee</label>
                      <input
                        type="number"
                        value={formData.fee.registrationFee}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          fee: { ...prev.fee, registrationFee: parseFloat(e.target.value) || 0 }
                        }))}
                        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">Monthly Fee</label>
                      <input
                        type="number"
                        value={formData.fee.monthlyFee}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          fee: { ...prev.fee, monthlyFee: parseFloat(e.target.value) || 0 }
                        }))}
                        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">Mode</label>
                      <select
                        value={formData.fee.mode}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          fee: { ...prev.fee, mode: e.target.value }
                        }))}
                        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Monthly">Monthly</option>
                        <option value="Annual">Annual</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">
                        {formData.fee.mode === 'Monthly' ? 'Monthly Discount' : 'Annual Discount'}
                      </label>
                      <input
                        type="number"
                        value={formData.fee.mode === 'Monthly' ? formData.fee.discount : formData.fee.annualDiscount}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value) || 0;
                          if (formData.fee.mode === 'Monthly') {
                            setFormData(prev => ({
                              ...prev,
                              fee: { ...prev.fee, discount: value }
                            }));
                          } else {
                            setFormData(prev => ({
                              ...prev,
                              fee: { ...prev.fee, annualDiscount: value }
                            }));
                          }
                        }}
                        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Calculation Display */}
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <p className="text-sm text-slate-600">Monthly Payable:</p>
                      <p className="text-2xl font-bold text-blue-600">
                        PKR {Math.round(calculateMonthlyPayable()).toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <p className="text-sm text-slate-600">Annual Payable:</p>
                      <p className="text-2xl font-bold text-emerald-600">
                        PKR {Math.round(calculateAnnualPayable()).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Biometric Enrollment Tab */}
            {activeTab === 4 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">🔐 Biometric Enrollment</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Enroll fingerprint and/or face recognition for attendance tracking. At least one method is required.
                  </p>
                  
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Fingerprint Section */}
                    <div className="bg-white rounded-xl p-5 border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xl">👆</span>
                          </div>
                          <h4 className="font-semibold text-slate-800">Fingerprint Scan</h4>
                        </div>
                        {fingerprintCaptured && (
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                            Enrolled ✓
                          </span>
                        )}
                      </div>
                      
                      {!fingerprintCaptured ? (
                        <div className="text-center py-6">
                          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 sm:h-24 sm:w-24">
                            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                          </div>
                          <Button 
                            onClick={captureFingerprint} 
                            disabled={capturing}
                            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                          >
                            {capturing ? 'Scanning...' : 'Capture Fingerprint'}
                          </Button>
                          <p className="text-xs text-slate-500 mt-3">
                            Place finger on scanner to capture fingerprint
                          </p>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 sm:h-16 sm:w-16">
                            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-emerald-600 mb-1">Fingerprint Captured</p>
                          <p className="text-xs text-slate-500">Quality: {fingerprintData?.quality}%</p>
                        </div>
                      )}
                    </div>

                    {/* Face Recognition Section */}
                    <div className="bg-white rounded-xl p-5 border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xl">😊</span>
                          </div>
                          <h4 className="font-semibold text-slate-800">Face Recognition</h4>
                        </div>
                        {faceCaptured && (
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                            Enrolled ✓
                          </span>
                        )}
                      </div>
                      
                      {!faceCaptured ? (
                        <div className="text-center py-6">
                          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 sm:h-24 sm:w-24">
                            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <Button 
                            onClick={() => setShowFaceModal(true)} 
                            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                          >
                            Capture Face
                          </Button>
                          <p className="text-xs text-slate-500 mt-3">
                            Position your face in the frame for capture
                          </p>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-emerald-100 sm:h-16 sm:w-16">
                            {faceData?.imageData && (
                              <img src={faceData.imageData} alt="Face capture" className="w-full h-full object-cover" />
                            )}
                          </div>
                          <p className="text-sm font-medium text-emerald-600 mb-1">Face Captured</p>
                          <p className="text-xs text-slate-500">Confidence: {faceData?.confidence}%</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {(fingerprintCaptured || faceCaptured) && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <Button onClick={resetBiometric} variant="secondary" className="text-sm">
                        Reset Biometric Enrollment
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="border-t border-white/50 bg-white/30 px-4 py-5 backdrop-blur-sm sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button
                variant="secondary"
                onClick={() => setActiveTab(activeTab - 1)}
                disabled={activeTab === 0}
                className="w-full rounded-lg border border-slate-300 px-6 py-2.5 font-medium transition-all hover:shadow-lg sm:w-auto"
              >
                ← Previous
              </Button>
              {activeTab < tabs.length - 1 ? (
                <Button 
                  onClick={() => setActiveTab(activeTab + 1)} 
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2.5 font-medium text-white transition-all hover:shadow-lg sm:w-auto"
                >
                  Next →
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit} 
                  disabled={!isAdmin || (!fingerprintCaptured && !faceCaptured)}
                  className={`w-full rounded-lg px-6 py-2.5 font-medium text-white transition-all sm:w-auto ${(!fingerprintCaptured && !faceCaptured) ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-emerald-600 hover:shadow-lg'}`}
                >
                  {!isAdmin ? 'Only Admin Can Enroll' : 'Complete Enrollment'}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Biometric Info Note */}
        <div className="mt-4 p-4 bg-blue-50/50 backdrop-blur-sm border border-blue-200 rounded-lg">
          <p className="text-blue-700 text-sm flex items-center gap-2">
            <span className="text-lg">🔐</span>
            Biometric data is securely stored and will be used for daily attendance tracking.
          </p>
        </div>
      </div>

      {/* Face Capture Modal */}
      <Modal
        isOpen={showFaceModal}
        onClose={() => {
          setShowFaceModal(false);
          stopCamera();
        }}
        title="Face Capture for Enrollment"
        size="lg"
      >
        <div className="space-y-4">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="h-64 w-full object-cover sm:h-80"
            />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            {!stream && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <Button onClick={startCamera} className="bg-blue-600 text-white">
                  Start Camera
                </Button>
              </div>
            )}
          </div>
          
          {stream && (
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={captureFace} disabled={capturing} className="bg-blue-600 text-white">
                {capturing ? 'Processing...' : 'Capture Face'}
              </Button>
              <Button onClick={stopCamera} variant="secondary">
                Stop Camera
              </Button>
            </div>
          )}
          
          {capturing && (
            <div className="text-center">
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
              </div>
              <p className="text-sm text-slate-500 mt-2">Processing face capture...</p>
            </div>
          )}
          
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-blue-700">
              📸 Position your face clearly in the frame. Ensure good lighting and face the camera directly.
            </p>
          </div>
        </div>
      </Modal>

      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300">
                <AlertCircle className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Something went wrong
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">{modalMessage}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowErrorModal(false)}
                className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300">
                <AlertCircle className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Unsaved changes
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Are you sure? All unsaved changes will be lost.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="w-full rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700 sm:w-auto"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-bounce {
          animation: bounce 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
