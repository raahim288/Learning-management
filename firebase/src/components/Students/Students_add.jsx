import React, { useEffect, useState } from 'react';
import { Box, Collapse, IconButton, Tooltip } from '@mui/material';
import Tables from './Table';
import StudentButton from './Manu';
import Navbar from './Navbar';
import Student from './Student';

import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../Config/firebase';

const Students_add = () => {



  const [userData, setUserData] = useState([]);



  useEffect(() => {
    getData();
  },[]);
  
  //   Data get from firebase Firestore Database
  
  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Student_registration"));
  
      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
  
      setUserData(arr);
    } catch (error) {
      console.log(error);
    }
  };







    const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }
  return (
    <div>

<Navbar/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          gap: 2, // Adding space between items
        }}
      >
       <Student/>

        <Tables data={userData}/>
      </Box>




    </div>
  );
};

export default Students_add;
