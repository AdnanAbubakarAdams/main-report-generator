import React, { useState, useEffect } from 'react';
import axios from "axios";
import Report from '../report/Report';

// CSS
import "./Reports.scss";

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
            {reports.map((report, id) => {
              return <Report key={id} report={report} id={id} />;
            })}
          </tbody> 
        </table>
      </section>
    </div>
  )
}

export default Reports;


