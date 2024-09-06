import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

const Copy_result = ({name,Class,result,comment}) => {
  return (
    <div>
      
     
       <Paper elevation={12} sx={{margin:'auto',padding:'2rem',position:'relative' ,bottom:'-5rem', width:'28rem',height:'10rem'}}>
      
      
     
       <Typography variant='h5'>
           Student Name:- {name}
        </Typography>
     <br />
       <Typography variant='p'  sx={{fontWeight:'bold'}}>
        Class:- {Class}
        </Typography>
     <br />
        <Typography variant='p' sx={{fontWeight:'bold'}}>
      Result:- {result}
        </Typography>
      
        <br />
        <br />
        <Typography variant='h5'>
      Comment:- {comment}
        </Typography>
       
        <br />
        
        <br />

      
    </Paper>
    </div>
  )
}

export default Copy_result
