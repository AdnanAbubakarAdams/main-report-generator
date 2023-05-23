import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const ReportDetails = () => {
    const [report, setReport] = useState([]);
    let {id} = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`${API}/reports/${id}`)
        .then((response) => {
            setReport(response.data);
        })
    },[id, navigate, API]);

    const deleteReport = () => {
        axios
          .delete(`${API}/reports/${id}`)
          .then(() => {
            navigate(`/reports`);
          })
          .catch((c) => console.error("catch", c));
      };
    
      const handleDelete = () => {
        deleteReport();
      };
  return (
    <div className='reportDetails'>
        <section>
        <table>
          <thead>
            <tr>
              <th>DEPORT ID</th>
              <th>DEPOSIT DATE</th>
              <th>STORE</th>
              <th>DAILY DEPOSIT</th>
              <th>EMPLOYEE NAME</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody> 
        </table>
      </section>

    </div>
  )
}

export default ReportDetails;