import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

const Copy_voucher = ({Class,monthly_fee,yearly_fee}) => {
  return (
    <div>
       <div>
      
     
     

      <Paper elevation={12} sx={{margin:'auto',padding:'2rem',position:'relative' ,bottom:'-5rem',width:{
       xs:'15rem',
       sm:'20rem',
       md:'30rem'
   },height:'8rem'
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
       <br />
      <Button sx={{height:'1.9rem',width:'20%'}}  variant='contained'> Pay</Button>
      
   </Paper>
     
   </div>
    </div>
  )
}

export default Copy_voucher
