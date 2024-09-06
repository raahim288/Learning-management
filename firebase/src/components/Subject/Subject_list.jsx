import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Navbar from '../Students/Navbar';
import Student from '../Students/Student';
import Subject_table from './Subject_table';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../Config/firebase';

const Subject_list = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Subject_registration")); // Ensure correct collection
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
      <Navbar />
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
            flexWrap: 'wrap', // Allows buttons to wrap onto new lines
            justifyContent: 'center',
            gap: 2, // Space between buttons
            mb: 4, // Margin bottom,
            color: 'white'
          }}
        >
          <Student />
        </Box>
        <Subject_table data={userData} /> {/* Pass userData to Subject_table */}
      </Box>
    </div>
  );
};

export default Subject_list;
