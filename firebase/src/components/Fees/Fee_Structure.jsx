import React from 'react';
import Copy_structure from './Copy_structure';
import Navbar from '../Students/Navbar';
import { Typography, Box } from '@mui/material';

const Fee_Structure = () => {
  return (
    <div>
      <Navbar />

      <Box
        sx={{
          padding: { xs: 2, sm: 3, md: 4 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            marginBottom: { xs: 1, sm: 2, md: 3 },
            textDecoration: 'underline',
            fontWeight: 'bold',
          }}
        >
          Fee Structure
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1, sm: 2, md: 3 },
            alignItems: 'center',
            padding: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Copy_structure Class='1' monthly_fee='4500' yearly_fee='54000' />
          <Copy_structure Class='2' monthly_fee='5000' yearly_fee='14000' />
          <Copy_structure Class='3' monthly_fee='5400' yearly_fee='30000' />
          <Copy_structure Class='4' monthly_fee='6000' yearly_fee='54500' />
          <Copy_structure Class='5' monthly_fee='6400' yearly_fee='50000' />
          <Copy_structure Class='6' monthly_fee='7000' yearly_fee='60000' />
          <Copy_structure Class='7' monthly_fee='8400' yearly_fee='54000' />
        </Box>
      </Box>
    </div>
  );
}

export default Fee_Structure;
