// // Helper function to load data from localStorage and ensure it's an array
export const loadFromStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];  // Return empty array if data is null or invalid
  } catch (error) {
    console.error("Error loading data from localStorage:", error); // Log any error for debugging
    return [];  // Return an empty array in case of error
  }
};

// Helper function to save data to localStorage
export const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving data to localStorage:", error); // Log errors if any
  }
};
