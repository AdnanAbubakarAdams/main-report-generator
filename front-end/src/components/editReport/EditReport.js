import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

//css
// import "./EditReport.scss";

// MATERIAL UI
import {
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
} from "@mui/material";


// API
const API = process.env.REACT_APP_API_URL;

const EditReport = () => {
    let { id } = useParams();

    let navigate = useNavigate();

    const [report, setReport] = useState({
        location: "",
        transaction_date: "",
        deposit: "",
        name: ""
    });


    const updateReport = (updatedReport) => {
        axios.put(`${API}/reports/${id}`, updatedReport)
        .then(() => {
            navigate(`/`)
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c))
    };

    const handleTextChange = (event) => {
        setReport({ ...report, [event.target.id] : event.target.value })
    };

    useEffect(() => {
        axios.get(`${API}/reports/${id}`)
        .then((response) => setReport(response.data),
        (error) => navigate(`/not-found`)
        )
    }, [id, navigate]);

    const deleteReport = () => {
        axios
          .delete(`${API}/reports/${id}`)
          .then(() => {
            navigate(`/`);
          })
          .catch((c) => console.error("catch", c));
      };
    
      const handleDelete = () => {
        deleteReport();
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateReport(report, id)
    };


  return (
    <div className='editReport'>
        <Grid >
            <Card className='editReport__Card'>
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
                        <Grid item xs={12} sm={6} className='editReport__button'>
                  <Button sx={{background:'#42999b !important'}} className="new-button" type="submit" variant="contained" fullWidth>
                    Submit
                  </Button>
                  </Grid>
                  <Grid item xs={12} sm={6} className='editReport__button'>
                  <Button onClick={handleDelete} sx={{background:'#42999b !important'}} className="new-button" variant="contained" fullWidth>
                    Delete
                  </Button>
                </Grid>
                    </Grid>
                </form>
            </CardContent>
            </Card>
        </Grid>

    </div>
  )
}

export default EditReport;