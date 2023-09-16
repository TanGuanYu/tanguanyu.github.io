import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function IntroSection() : JSX.Element {
  return (
    <Box
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      bgcolor='black'>
      <Typography color="white">
        Introduction.
      </Typography>
    </Box>
  );
}
