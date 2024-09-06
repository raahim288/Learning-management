import React, { useState } from 'react';

import { Box, Button, FormControl, Typography, TextField } from '@mui/material';

import Navbar from '../Students/Navbar';
import Student from '../Students/Student';
import RowRadioButtonsGroup from '../Students/Radio';
import Uploadpdf from './Uploadpdf';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../Config/firebase';

const Syllabus_form = () => {




  const [name, SetName] = useState('');
  const [list, setList] = useState('');

  const handle_submit = async () => {
    const syllabus = {
      ad_name,
    };

    try {
      const subject_registration = await addDoc(collection(database, "Syllabus_registration"), syllabus);
      console.log("Subject_registration ", subject_registration);
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

          <Student/>
        

          <FormControl
            sx={{
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '100%',
              // Responsive form control
              width: { xs: '90%', sm: '80%', md: '60%' },
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" sx={{ mb: 3 ,color:'white'}}>
             Syllabus Add
            </Typography>
            
            <TextField
            onChange={(e)=>SetName(e.target.value)}
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
              label="Subject"
              placeholder="Subject name"
            />
            
            <TextField

onChange={(e)=>setList(e.target.value)}
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
              type='number'
            />

           

           
            <Button
             
              sx={{
                width: '100%',
                maxWidth: '400px',
                mt: 2,
              }}
            >
             <Uploadpdf/>
            </Button>
            <Button
            onClick={handle_submit}
              variant="contained"
              sx={{
                width: '75%',
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

export default Syllabus_form;
