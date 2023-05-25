import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// MATERIAL UI
import {
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
} from "@mui/material";
  

// CSS
import "./NewReport.scss";

// API
const API = process.env.REACT_APP_API_URL;

const NewReport = () => {

    const navigate = useNavigate();

    const addNewReport = (newReport) => {
        axios.post(`${API}/reports`, newReport)
        .then(() => {
            navigate(`/`)
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c))
    }

    const [report, setReport] = useState({
        location: "",
        transaction_date: "",
        deposit: "",
        name: ""
    });

    const handleTextChange = (event) => {
        setReport({ ...report, [event.target.id] : event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewReport(report);
    };


  return (
    // <div className='newReport'>
        <Grid className='newReport'>
            <Card className='newReport__Card'>
            <CardContent>
                <h3>Daily Deposit Report</h3>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={6} item>
                            <TextField
                            label="Store Location"
                            placeholder='Brook Ave'
                            variant='outlined'
                            id='location'
                            value={report.location}
                            onChange={handleTextChange}
                            fullWidth
                            required
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                            label="Date"
                            placeholder='2023-1-1'
                            variant='outlined'
                            id='transaction_date'
                            value={report.transaction_date}
                            onChange={handleTextChange}
                            fullWidth
                            required
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                            label="Amount"
                            placeholder='$'
                            variant='outlined'
                            id='deposit'
                            value={report.deposit}
                            onChange={handleTextChange}
                            fullWidth
                            required
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                            label="Employee Name"
                            placeholder='Adams'
                            variant='outlined'
                            id='name'
                            value={report.name}
                            onChange={handleTextChange}
                            fullWidth
                            required
                            />
                        </Grid>
                        <Grid item xs={12}>
                  <Button sx={{background:'rgb(138, 191, 3) !important'}} className="new-button" type="submit" variant="contained" fullWidth>
                    Submit
                  </Button>
                </Grid>
                    </Grid>
                </form>
            </CardContent>
            </Card>
        </Grid>
    // </div>
  )
}

export default NewReport;