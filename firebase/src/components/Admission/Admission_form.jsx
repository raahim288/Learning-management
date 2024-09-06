import React, { useState } from 'react';
import { Box, Button, FormControl, Typography, TextField } from '@mui/material';
import Navbar from '../Students/Navbar';
import RowRadioButtonsGroup from '../Students/Radio';
import { Database } from 'firebase/database';
import { addDoc, collection } from 'firebase/firestore';

const Admission_form = () => {
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [Class, setClass] = useState('');

  const handle_submit = async () => {
    const Admission = {
    name,
    last,
    email,
    Class
    };
    
    try {
      const admission_registration = await addDoc(collection(database, "Admission_registration"), Admission);
      console.log("Users ", admission_registration);
    } catch (e) {
      console.error("Error ", e);
    }
  };

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
          <FormControl
            sx={{
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '100%',
              width: { xs: '90%', sm: '80%', md: '60%' },
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, color: 'white' }}>
              Admission_form
            </Typography>
            <TextField
              onChange={(e) => setName(e.target.value)}
              sx={{
                mb: 3,
                width: '100%',
                maxWidth: '400px',
                "& .MuiInputBase-root": {
                  height: 45,
                  fontSize: "1rem",
                  color: 'white',
                },
                "& .MuiInputLabel-root": {
                  color: 'white', 
                  "&.Mui-focused": {
                    color: 'white', 
                  },
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
                  },
                },
              }}
              label="First name"
              placeholder="Enter your first name"
            />
            <TextField
              onChange={(e) => setLast(e.target.value)}
              sx={{
                mb: 3,
                width: '100%',
                maxWidth: '400px',
                "& .MuiInputBase-root": {
                  height: 45,
                  fontSize: "1rem",
                  color: 'white',
                },
                "& .MuiInputLabel-root": {
                  color: 'white', 
                  "&.Mui-focused": {
                    color: 'white', 
                  },
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
                  },
                },
              }}
              label="Last Name"
              placeholder="Enter your last name"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 3,
                width: '100%',
                maxWidth: '400px',
                "& .MuiInputBase-root": {
                  height: 45,
                  fontSize: "1rem",
                  color: 'white',
                },
                "& .MuiInputLabel-root": {
                  color: 'white', 
                  "&.Mui-focused": {
                    color: 'white', 
                  },
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
                  },
                },
              }}
              label="Email"
              placeholder="Enter your email"
            />
            <TextField
              onChange={(e) => setClass(e.target.value)}
              sx={{
                mb: 3,
                width: '100%',
                maxWidth: '400px',
                "& .MuiInputBase-root": {
                  height: 45,
                  fontSize: "1rem",
                  color: 'white',
                },
                "& .MuiInputLabel-root": {
                  color: 'white', 
                  "&.Mui-focused": {
                    color: 'white', 
                  },
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
                  },
                },
              }}
              label="Class"
              placeholder="Enter your class"
            />
            <RowRadioButtonsGroup main='Gender' one='Male' two='Female' three='Other' />
            <Button
              onClick={handle_submit}
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

export default Admission_form;
