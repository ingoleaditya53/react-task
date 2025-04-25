import React from 'react';
import { Pagination as MuiPagination, Stack } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onChange }) => {
  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(e, value) => onChange(value)}
        color="primary"
        sx={{
          display: { xs: 'block', sm: 'inline-block' }
        }}
      />
    </Stack>
  );
};

export default Pagination;
