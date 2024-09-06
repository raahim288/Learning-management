

import React from 'react';


import { Box, Button, FormControl, Typography, TextField } from '@mui/material';

import StudentButton from '../Students/Manu';
import Navbar from '../Students/Navbar';
import Student from '../Students/Student';
import RowRadioButtonsGroup from '../Students/Radio';

const Teacher_Registration = () => {
  return (
    <>
    <div>
        <Navbar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            gap: 2,
         
            padding: { xs: 1, sm: 2, md: 3 },
          }}
        >
          
           <Student/>
       

          <FormControl
            sx={{
              
             backgroundColor:'black',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '100%',
             
              width: { xs: '90%', sm: '80%', md: '60%' },
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" sx={{ mb: 3,color:'white' }}>
            Teacher Registration Form
            </Typography>
            
            <TextField
               sx={{
                mb: 3,
                width: '100%',
                maxWidth: '400px',
                "& .MuiInputBase-root": {
                  height: 45,
                  fontSize: "1rem",
                  color: 'white'
                },
                "& .MuiInputLabel-root": {
                  color: 'white', 
                  "&.Mui-focused": {
                    color: 'white', 
                  }
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: 'white', 
                  },
                  "&:hover fieldset": {
                    borderColor: 'white',
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: 'white', 
                  }
                }
              }}
              label="First name"
              placeholder="Enter your first name"
            />
            
            <TextField
               sx={{
                mb: 3,
                width: '100%',
                maxWidth: '400px',
                "& .MuiInputBase-root": {
                  height: 45,
                  fontSize: "1rem",
                  color: 'white'
                },
                "& .MuiInputLabel-root": {
                  color: 'white', 
                  "&.Mui-focused": {
                    color: 'white', 
                  }
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: 'white', 
                  },
                  "&:hover fieldset": {
                    borderColor: 'white', 
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: 'white', 
                  }
                }
              }}
              label="Last Name"
              placeholder="Enter your last name"
            />
            <TextField
               sx={{
                mb: 3,
                width: '100%',
                maxWidth: '400px',
                "& .MuiInputBase-root": {
                  height: 45,
                  fontSize: "1rem",
                  color: 'white'
                },
                "& .MuiInputLabel-root": {
                  color: 'white', 
                  "&.Mui-focused": {
                    color: 'white', 
                  }
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: 'white', 
                  },
                  "&:hover fieldset": {
                    borderColor: 'white', 
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: 'white', 
                  }
                }
              }}
              label="Email"
              placeholder="Enter your email "
            />

            <TextField
              sx={{
                mb: 3,
                width: '100%',
                maxWidth: '400px',
                "& .MuiInputBase-root": {
                  height: 45,
                  fontSize: "1rem",
                  color: 'white'
                },
                "& .MuiInputLabel-root": {
                  color: 'white', 
                  "&.Mui-focused": {
                    color: 'white', 
                  }
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: 'white', 
                  },
                  "&:hover fieldset": {
                    borderColor: 'white', 
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: 'white', 
                  }
                }
              }}
              label="Class"
              placeholder="Enter your class"
            />

<RowRadioButtonsGroup main='Gender' one='Male' two='Female'  three='Other' />


            <Button
              variant="contained"
              sx={{
                width: '100%',
                maxWidth: '400px',
                mt: 2,
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </div>
    </>
  );
}

export default Teacher_Registration;
