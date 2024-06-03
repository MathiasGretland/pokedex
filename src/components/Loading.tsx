import React from 'react'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress data-testid="loading-1" />
    </Box>
  );
}

export default Loading