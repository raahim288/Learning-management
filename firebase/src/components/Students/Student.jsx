import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StudentButton from './Manu';

const Student = () => {
  const [rating, setRating] = useState(4);




  const navigate = useNavigate();

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <StudentButton
            name='Students'
            first='Student Registration'
            second='Student List'
            linkone={() => navigate('/login/Student/studentRegistration')}
            linktwo={() => navigate('/login/Student/studentaddlist')}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <StudentButton
            name='Teacher'
            first='Teacher Registration'
            second='Teacher List'
            linkone={() => navigate('/login/Student/Teacher_add')}
            linktwo={() => navigate('/login/Student/Teacherlist')}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <StudentButton
            name='Subject'
            first='Subject_add'
            second='Subject List'
            linkone={() => navigate('/login/Student/Subject_add')}
            linktwo={() => navigate('/login/Student/Subject_list')}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <StudentButton
            name='Syllabus'
            first='Syllabus Form'
            second='Syllabus List'
            linkone={() => navigate('/login/Student/Syllabus_form')}
            linktwo={() => navigate('/login/Student/Syllabus_list')}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <StudentButton
            name='School'
            first='Student Registration'
            second='Teacher Registration'
            linkone={() => navigate('/login/Student/Student_Registration')}
            linktwo={() => navigate('/login/Student/Teacher_Registration')}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <StudentButton
            name='Fees'
            first='Fee Structure'
            second='Fee Voucher'
            linkone={() => navigate('/login/Student/Fee_Structure')}
            linktwo={() => navigate('/login/Student/Fee_voucher')}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <StudentButton
            name='Admission'
            first='Admission Form'
            second='Admission List'
            linkone={() => navigate('/login/Student/Admission_form')}
            linktwo={() => navigate('/login/Student/Admission_list')}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <StudentButton
            name='Exam'
            first='Exam Schedule'
            second='Exam Result'
            linkone={() => navigate('/login/Student/Exam_schedule')}
            linktwo={() => navigate('/login/Student/Exam_result')}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Student;
