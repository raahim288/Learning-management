import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../Students/Navbar';
import Copy_schedule from './Copy_schedule';

const Exam_Schedule = () => {
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
          Exam Schedule
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Copy_schedule 
            Class='Class 1 - Mathematics' 
            date='Date: 2024-08-15' 
            starting_date='Start Time: 09:00 AM | End Time: 12:00 PM' 
          />
          <Copy_schedule 
            Class='Class 2 - English' 
            date='Date: 2024-08-16' 
            starting_date='Start Time: 11:00 AM | End Time: 2:00 PM' 
          />
          <Copy_schedule 
            Class='Class 3 - History' 
            date='Date: 2024-02-21' 
            starting_date='Start Time: 11:00 AM | End Time: 2:00 PM' 
          />
          <Copy_schedule 
            Class='Class 4 - Islamiyat' 
            date='Date: 2024-08-18' 
            starting_date='Start Time: 11:00 AM | End Time: 2:00 PM' 
          />
          <Copy_schedule 
            Class='Class 5 - Science' 
            date='Date: 2024-07-26' 
            starting_date='Start Time: 07:00 AM | End Time: 2:00 PM' 
          />
          <Copy_schedule 
            Class='Class 6 - English' 
            date='Date: 2024-01-11' 
            starting_date='Start Time: 09:00 AM | End Time: 2:00 PM' 
          />
          <Copy_schedule 
            Class='Class 7 - Geography' 
            date='Date: 2024-07-18' 
            starting_date='Start Time: 10:00 AM | End Time: 2:00 PM' 
          />
          <Copy_schedule 
            Class='Class 8 - Urdu' 
            date='Date: 2024-02-22' 
            starting_date='Start Time: 1:00 PM | End Time: 2:00 PM' 
          />
          <Copy_schedule 
            Class='Class 9 - English' 
            date='Date: 2024-08-18' 
            starting_date='Start Time: 12:00 PM | End Time: 2:00 PM' 
          />
          <Copy_schedule 
            Class='Class 10 - Physics' 
            date='Date: 2024-04-28' 
            starting_date='Start Time: 11:00 AM | End Time: 2:00 PM' 
          />
        </Box>
      </Box>
    </>
  );
}

export default Exam_Schedule;
