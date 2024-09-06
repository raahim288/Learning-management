import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

const Copy_schedule = ({Class,date,starting_date}) => {
  return (
    <div>
      
     
       <Paper elevation={12} sx={{margin:'auto',padding:'2rem',position:'relative' ,bottom:'-5rem', width:'28rem',height:'8rem'}}>
      
      
     
       <Typography variant='h5'>
            {Class}
        </Typography>
     
        <br />
        <Typography variant='p'>
       {date}
        </Typography>
      
        <br />
        <Typography variant='p'>
      {starting_date}
        </Typography>
       
        <br />
        
        <br />

        <Button sx={{height:'1.9rem',width:'20%'}}  variant='contained'> Add</Button>
    </Paper>
    </div>
  )
}

export default Copy_schedule
