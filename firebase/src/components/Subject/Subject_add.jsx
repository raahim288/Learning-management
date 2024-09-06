import React, { useState } from 'react';
import { Box, Button, FormControl, Typography, TextField } from '@mui/material';
import Navbar from '../Students/Navbar';
import Student from '../Students/Student';
import RowRadioButtonsGroup from '../Students/Radio';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../Config/firebase';
const Subject_add = () => {
  const [name, Setname] = useState('');
  const [list, setList] = useState('');

  const handle_submit = async () => {
    const subject = {
      Subject_name: name,
      Subject_class: list,
    };

    try {
      const subject_registration = await addDoc(collection(database, "Subject_registration"), subject);
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
              Subject Add
            </Typography>
            <TextField
              onChange={(e) => Setname(e.target.value)}
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
              onChange={(e) => setList(e.target.value)}
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
            <RowRadioButtonsGroup main='Select Groups' one='Pre-Engineering' two='Pre-Medical' three='Computer-Engineering' />
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

export default Subject_add;
