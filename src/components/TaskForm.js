import React, { useState } from 'react';
import { TextField, MenuItem, Paper, Box, Button, Typography } from '@mui/material';
import { useTaskContext } from './context/TaskContext'; // Importing the custom hook

const TaskForm = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('Pending');
  const [completed, setCompleted] = useState(false);

  const { dispatch } = useTaskContext(); // Using the custom hook to access the context

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(), // unique ID
      category,
      title,
      deadline,
      status,
      completed,
    };

    dispatch({
      type: 'ADD_TASK',
      payload: newTask,
    });

    // Reset form fields after submit
    setTitle('');
    setCategory('');
    setDeadline('');
    setStatus('Pending');
    setCompleted(false);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Add New Task</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Category" select value={category} onChange={(e) => setCategory(e.target.value)}>
          {['Work', 'Personal', 'Urgent'].map(cat => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </TextField>
        <TextField label="Deadline" type="date" InputLabelProps={{ shrink: true }} value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <TextField label="Status" select value={status} onChange={(e) => setStatus(e.target.value)}>
          {['Pending', 'Completed', 'Overdue'].map(statusOption => (
            <MenuItem key={statusOption} value={statusOption}>{statusOption}</MenuItem>
          ))}
        </TextField>
        <Button variant="contained" type="submit">Add Task</Button>
      </Box>
    </Paper>
  );
};

export default TaskForm;
