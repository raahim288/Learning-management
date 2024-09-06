import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'

import './App.css'
import Student from './components/Students/Student'
import StudentRegistration from './components/Students/StudentRegistration'
import Students_add from './components/Students/Students_add'
import Teacherlist from './components/Teacher/Teacherlist'
import Teacher_add from './components/Teacher/Teacher_add'
import Subject_add from './components/Subject/Subject_add'
import Subject_list from './components/Subject/Subject_list'
import Syllabus_form from './components/Syllabus/Syllabus_form'
import Syllabus_list from './components/Syllabus/Syllabus_list'
import Student_Registration from './components/School/Student_Registration'
import Teacher_Registration from './components/School/Teacher_Registration'

import Fee_Structure from './components/Fees/Fee_Structure'
import Fee_voucher from './components/Fees/Fee_voucher'
import Admission_form from './components/Admission/Admission_form'
import Admission_list from './components/Admission/Admission_list'
import Exam_Schedule from './components/Exam/Exam_Schedule'
import Exam_result from './components/Exam/Exam_result';


const App = () => {
  return (
    <div>


     
      <Routes>
        <Route index element={<Signup/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='/login/Student' element={<Student/>}/>
        <Route path='/login/Student/studentRegistration' element={<StudentRegistration/>}/>
        <Route path='/login/Student/studentaddlist' element={<Students_add/>}/>
        <Route path='/login/Student/Teacher_add' element={<Teacher_add/>}/>
        <Route path='/login/Student/Teacherlist' element={<Teacherlist/>}/>
        <Route path='/login/Student/Subject_add' element={<Subject_add/>}/>
        <Route path='/login/Student/Subject_list' element={<Subject_list/>}/>
        <Route path='/login/Student/Syllabus_form' element={<Syllabus_form/>}/>
        <Route path='/login/Student/Syllabus_list' element={<Syllabus_list/>}/>
        <Route path='/login/Student/Student_Registration' element={<Student_Registration/>}/>
        <Route path='/login/Student/Teacher_Registration' element={<Teacher_Registration/>}/>

        {/* <Route path='/login/Student/Class_form' element={<Class_form/>}/>
        <Route path='/login/Student/Class_list' element={<Class_list/>}/> */}
        <Route path='/login/Student/Fee_structure' element={<Fee_Structure/>}/>
        <Route path='/login/Student/Fee_voucher' element={<Fee_voucher/>}/>
        <Route path='/login/Student/Admission_form' element={<Admission_form/>}/>
        <Route path='/login/Student/Admission_list' element={<Admission_list/>}/>
        <Route path='/login/Student/Exam_Schedule' element={<Exam_Schedule/>}/>
        <Route path='/login/Student/Exam_result' element={<Exam_result/>}/>
        
      </Routes>
    </div>
  )
}

export default App
