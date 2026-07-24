export const subjectsConfig = {
  primary: [
    "English Reading",
    "English Writing",
    "Urdu Reading",
    "Urdu Writing",
    "General Knowledge",
    "Science",
    "Drawing",
    "Islamiat",
    "Math"
  ],
  middle: [
    "English",
    "Urdu",
    "Math",
    "Science",
    "Islamiat",
    "Geography",
    "Drawing"
  ],
  secondary: [
    "English",
    "Urdu",
    "Math",
    "Physics",
    "Chemistry",
    "Biology/Computer",
    "Islamiat",
    "Pak Studies",
    "Quran"
  ]
};

export const getSubjectsByClass = (className) => {
  // Handle string class names
  if (!className) return subjectsConfig.primary;
  
  const numClass = parseInt(className);
  
  // Check for Pre-Nursery, Nursery, KG (non-numeric class names)
  if (isNaN(numClass)) {
    if (["Pre-Nursery", "Nursery", "KG"].includes(className)) {
      return subjectsConfig.primary;
    }
    return subjectsConfig.primary;
  }
  
  // Numeric class names
  if (numClass <= 5) return subjectsConfig.primary;
  if (numClass <= 8) return subjectsConfig.middle;
  return subjectsConfig.secondary;
};