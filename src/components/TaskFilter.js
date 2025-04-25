import React, { useState } from 'react';
import { TextField, MenuItem, Paper, Box, Typography, Button } from '@mui/material';
import { useTaskContext } from './context/TaskContext';

export const TaskFilter = () => {
  const [category, setCategory] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('All');
  const { dispatch } = useTaskContext();

  const handleFilterChange = () => {
    dispatch({
      type: 'SET_FILTERS',
      payload: { category, startDate, endDate, status },
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Filter Tasks</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Category" select value={category} onChange={(e) => setCategory(e.target.value)}>
          {['All', 'Work', 'Personal', 'Urgent'].map(cat => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </TextField>
        <TextField type="date" label="Start Date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <TextField type="date" label="End Date" InputLabelProps={{ shrink: true }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <TextField label="Status" select value={status} onChange={(e) => setStatus(e.target.value)}>
          {['All', 'Pending', 'Completed', 'Overdue'].map(statusOption => (
            <MenuItem key={statusOption} value={statusOption}>{statusOption}</MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={handleFilterChange}>Apply Filters</Button>
      </Box>
    </Paper>
  );
};

export default TaskFilter;
