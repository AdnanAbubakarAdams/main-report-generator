import React, { useState, useEffect } from 'react';
import axios from "axios";
import Report from '../report/Report';
import Loading from '../loading/Loading';

// CSS
import "./Reports.scss";

// API 
const API = process.env.REACT_APP_API_URL;

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API}/reports`)
    .then((response) => {
      setTimeout(() => {
        setReports(response.data)
        setLoading(false)
      }, 1000);
    })
    .catch((c) => console.warn("catch", c));
  }, []);


  return (
    <div className='reports'>
      <section>
      <p>*** NB: Click on the Daily Deposit(Amount) to edit Deposit ***</p>
        <table>
          <thead>
            <tr>
              <th>DEPOSIT ID</th>
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
        <Loading loading={loading} />
      </section>
    </div>
  )
}

export default Reports;


