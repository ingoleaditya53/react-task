import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { TaskContext } from './context/TaskContext';  // Ensure correct import

const TaskSummary = () => {
  const { tasks } = useContext(TaskContext); // Access tasks from context

  // Ensure tasks is an array before calling .filter()
  if (!tasks || !Array.isArray(tasks)) {
    return <Typography variant="body1">No tasks available.</Typography>;
  }

  const completed = tasks.filter(t => t.completed).length;
  const overdue = tasks.filter(t => new Date(t.deadline) < new Date() && !t.completed).length;

  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Total</Typography>
          <Typography>{tasks.length}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Completed</Typography>
          <Typography>{completed}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Overdue</Typography>
          <Typography>{overdue}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TaskSummary;
