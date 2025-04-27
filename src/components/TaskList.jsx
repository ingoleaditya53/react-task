import React, { useContext } from 'react';
import { TaskContext } from './context/TaskContext';
import TaskItem from './TaskItem';
import { Typography } from '@mui/material';

const TaskList = () => {
  const { state } = useContext(TaskContext);
  const { tasks, filters } = state;

  const filteredTasks = tasks.filter(task => {
    const categoryMatch = filters.category === 'All' || task.category === filters.category;
    const statusMatch = filters.status === 'All' || task.status === filters.status;
    const startDateMatch = !filters.startDate || new Date(task.deadline) >= new Date(filters.startDate);
    const endDateMatch = !filters.endDate || new Date(task.deadline) <= new Date(filters.endDate);

    return categoryMatch && statusMatch && startDateMatch && endDateMatch;
  });

  // if (!filteredTasks.length) {
  //   return <Typography variant="body1">No tasks available.</Typography>;
  // }

  return (
    <>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
