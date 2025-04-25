import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { loadFromStorage, saveToStorage } from '../hooks/useLocalStorage'; // Assuming you have custom hooks for loading and saving to localStorage.

export const TaskContext = createContext();

const initialState = {
  tasks: loadFromStorage('tasks') || [],
  filters: {
    category: 'All',
    startDate: '',
    endDate: '',
    status: 'All',
  },
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };

    case 'REMOVE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };

    case 'UPDATE_TASK':
      return { 
        ...state, 
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) 
      };

    case 'SET_FILTERS':
      return { ...state, filters: action.payload };

    default:
      return state;
  }
};

// Custom hook to use TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    saveToStorage('tasks', state.tasks);  // Save tasks to localStorage
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
