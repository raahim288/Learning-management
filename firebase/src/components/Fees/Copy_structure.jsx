import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Copy_structure = ({Class,monthly_fee,yearly_fee}) => {
  return (
    <div>
      
     
     

       <Paper elevation={12} sx={{margin:'auto',padding:'2rem',position:'relative' ,bottom:'-5rem',width:{
        xs:'15rem',
        sm:'20rem',
        md:'30rem'
    },height:'4rem'
     }}>
      
      

       <Typography variant='h5'>
       Class- {Class}
        </Typography>
     
        <br />
        <Typography variant='p'>
        <b> Monthly Fee: Rs  {monthly_fee}</b>
        </Typography>
      
        <br />
        <Typography variant='p'>
    <b> Yearly Fee: Rs {yearly_fee}</b>
        </Typography>
       
        <br />
        
       
    </Paper>
      
    </div>
  )
}

export default Copy_structure
