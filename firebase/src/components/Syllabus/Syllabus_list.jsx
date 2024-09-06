import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';



import Tables from '../Students/Table';

import Navbar from '../Students/Navbar';
import Student from '../Students/Student';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../Config/firebase';
import Syllabus_table from './Syllabus_table';

const Syllabus_list = () => {




  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Syllabus_registration")); // Ensure correct collection
      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      console.log("Fetched Data:", arr); // Debugging statement
      setUserData(arr); // Update state with fetched data
    } catch (error) {
      console.log("Error fetching data:", error); // Debugging statement
    }
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', // Allows buttons to wrap onto new lines
            justifyContent: 'center',
            gap: 2, // Space between buttons
            mb: 4, // Margin bottom
          }}
        >
      <Student/>
        </Box>

        <Syllabus_table title='Syllabus list' data={userData}/>
      </Box>
    </div>
  );
};

export default Syllabus_list;



