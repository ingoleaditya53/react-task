import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { TaskProvider } from './components/context/TaskContext'; // Correctly import TaskProvider
import { CssBaseline } from '@mui/material';
import './App.css';
// import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <TaskProvider> {/* Correctly wrap the application with TaskProvider */}
      <CssBaseline />
      {/* <TaskForm /> TaskForm is inside the TaskProvider, so it can access context */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </TaskProvider>
  );
};

export default App;
