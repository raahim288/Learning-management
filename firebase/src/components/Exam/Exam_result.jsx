import React from 'react';
import { Box, Typography } from '@mui/material';
import Copy_result from './Copy_result';
import Navbar from '../Students/Navbar';

const Exam_result = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: { xs: 2, sm: 3, md: 4 },
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            marginBottom: { xs: 2, sm: 3, md: 4 },
            textDecoration: 'underline',
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
          }}
        >
          Report Card
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Copy_result name='Raahim' Class='10' result='A+' comment='Excellent work! Keep it up!' />
          <Copy_result name='Haris' Class='8' result='A+' comment='Great job! You’ve done really well.' />
          <Copy_result name='Shoukat' Class='10' result='A' comment='Good effort, but there’s room for improvement.' />
          <Copy_result name='Tanveer' Class='10' result='B' comment='Satisfactory performance. Consider focusing more.' />
          <Copy_result name='Perdesi' Class='5' result='C' comment='Needs improvement. Seek help if needed.' />
          <Copy_result name='Ahmed' Class='4' result='D' comment='Unsatisfactory. Please work harder and seek support.' />
          <Copy_result name='Umar' Class='3' result='F' comment='Need To Work hard!' />
          <Copy_result name='Kashif' Class='2' result='A' comment='Great job! You’ve done really well.' />
          <Copy_result name='Kashan' Class='1' result='C' comment='You have to improve!' />
        </Box>
      </Box>
    </>
  );
};

export default Exam_result;
