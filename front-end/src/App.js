
import './App.css';
import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import NewReport from './components/newReport/NewReport';
import EditReport from './components/editReport/EditReport';
import BarChart from './components/barChart/BarChart';
import LineChart from './components/lineChart/LineChart';
import PieChart from './components/pieChart/PieChart';
// import ReportDetails from './components/reportDetails/ReportDetails';

// API
const API = process.env.REACT_APP_API_URL;



function App() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get(`${API}/reports`)
    .then((response) => setReports(response.data))
    .catch((c) => console.warn("catch", c));
  }, []);

  let chartData = {
      labels: reports.map((report) => report.transaction_date),
      datasets: [{
        label: "Accounting Daily Deposit",
        data: reports.map((report) => report.deposit), 
        borderColor: "black",
        backgroundColor: ["red", "gold", "green"]
      }]
    };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/reports/new" element={<NewReport />} />
          {/* <Route path='/reports/:id' element={<ReportDetails/>} /> */}
          <Route path='/reports/:id/edit' element={<EditReport />} />
          <Route path='/bar' element={<BarChart chartData={chartData} />} />
          <Route path='/line' element={<LineChart chartData={chartData} />} />
          <Route path='/pie' element={<PieChart chartData={chartData} />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
