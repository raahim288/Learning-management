import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Navbar from '../Students/Navbar';
import Student from '../Students/Student';
import { collection, getDocs } from 'firebase/firestore';

import Teacher_table from './Teacher_table';

const Tecaherlist = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Teacher_registration"));
      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      console.log("Fetched Data:", arr); // Debugging statement
      setUserData(arr); // Update state with fetched data
    } catch (error) {
      console.log("Error fetching data:", error); // Debugging statement
    }
  };

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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: 2, 
            mb: 4,
          }}
        >
          <Student/>
        </Box>
        <Teacher_table data={userData}/>
      </Box>
    </div>
  );
};

export default Tecaherlist;
