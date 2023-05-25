// import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";

// CSS 
import "./BarChart.scss";

const BarChart = ({ chartData }) => {
  return (
        <div className="barChart">
        <Bar data={chartData}/>
        </div>
  )
}

export default BarChart;