import React, { useContext } from 'react';
import { Card, CardContent, Typography, Box, Checkbox } from '@mui/material';
import { TaskContext } from './context/TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const toggleComplete = () => {
    dispatch({ type: 'UPDATE_TASK', payload: { ...task, completed: !task.completed } });
  };

  const removeTask = () => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="subtitle1" sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {task.category} • {task.deadline}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Checkbox checked={task.completed} onChange={toggleComplete} />
          <button onClick={removeTask} style={{backgroundColor:'red', color:'red', border: '1px solid black', background: 'transparent', cursor: 'pointer' }}>
            Delete
          </button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
