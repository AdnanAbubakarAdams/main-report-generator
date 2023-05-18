import React, { useState, useEffect } from 'react';
import axios from "axios";
// import Report from '../report/Report';

// MATERIAL UI
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


// API 
const API = process.env.REACT_APP_API_URL;

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get(`${API}/reports`)
    .then((response) => setReports(response.data))
    .catch((c) => console.warn("catch", c));
  }, []);


  return (
    <div className='reports'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">DATE</StyledTableCell>
            <StyledTableCell align="right">STORE</StyledTableCell>
            <StyledTableCell align="right">DAILY DEPOSIT</StyledTableCell>
            <StyledTableCell align="right">EMPLOYEE NAME</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <StyledTableRow key={report.id}>
              <StyledTableCell component="th" scope="row">
                {report.id}
              </StyledTableCell>
              <StyledTableCell align="right">{report.transaction_date}</StyledTableCell>
              <StyledTableCell align="right">{report.location}</StyledTableCell>
              <StyledTableCell align="right">{report.deposit}</StyledTableCell>
              <StyledTableCell align="right">{report.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Reports;