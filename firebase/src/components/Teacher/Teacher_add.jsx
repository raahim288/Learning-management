import React, { useState } from 'react';
import { Box, Button, FormControl, Typography, TextField } from '@mui/material';
import Student from '../Students/Student';
import Navbar from '../Students/Navbar';
import RowRadioButtonsGroup from '../Students/Radio';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../Config/firebase';

const Teacher_add = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [Class, setClass] = useState('');

  // Handle form submission
  const handle_submit = async () => {
    const Teacher_users = {
      teacher_name: name,
      teacher_last: last,
      teacher_Class: Class,
    };

    try {
      const Student_registration = await addDoc(collection(database, "Teacher_registration"), Teacher_users);
      console.log("Teacher_registration ", Student_registration);
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
          <Student />

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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              label="Last name"
              placeholder="Enter your last name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
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
              value={Class}
              onChange={(e) => setClass(e.target.value)}
            />

            <RowRadioButtonsGroup main="Gender" one='Male' two='Female' three='Other' />

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

export default Teacher_add;
