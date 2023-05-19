import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// MATERIAL UI
import {
    Grid,
    TextField,
    // Button,
    Card,
    CardContent,
    // MenuItem,
} from "@mui/material";
  

// CSS
import "./NewReport.sass";

// API
const API = process.env.REACT_APP_API_URL;

const NewReport = () => {

    const navigate = useNavigate();

    const addNewReport = (newReport) => {
        axios.post(`${API}/reports`, newReport)
        .then(() => {
            navigate(`/reports`)
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
    <div className='newReport'>
        <Grid>
            <Card>
            <CardContent>
                <h3>Daily Deposit Report</h3>
                <form>
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
                        <Grid xs={12} item>
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
                        <Grid xs={12} item>
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
                    </Grid>
                </form>
            </CardContent>
            </Card>
        </Grid>
    </div>
  )
}

export default NewReport;