import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import TaskForm from '../TaskForm';
import TaskFilter from '../TaskFilter';
import TaskList from '../TaskList';
import TaskSummary from '../TaskSummary';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom style={{marginBottom:'100px'}}>
        Task Manager
      </Typography>
      <Grid container spacing={3}>
        {/* Grid items are now more straightforward */}
        <Grid xs={12} md={6}>
          <TaskForm />
        </Grid>
        <Grid xs={12} md={6}>
          <TaskFilter />
        </Grid>
        <Grid xs={12}>
          <TaskSummary />
        </Grid>
        <Grid xs={12}>
          <TaskList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
