import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Admission_table({ data }) {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Button onClick={() => navigate('/login/Student/studentRegistration')} variant='contained'>
        Add
      </Button>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Id</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Class</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <StyledTableRow key={e.id}>
              <StyledTableCell component="th" scope="row">
                {e.id}
              </StyledTableCell>
              <StyledTableCell align="center">{e.name}</StyledTableCell>
              <StyledTableCell align="center">{e.last}</StyledTableCell>
              <StyledTableCell align="center">{e.email}</StyledTableCell>
              <StyledTableCell align="center">{e.Class}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
