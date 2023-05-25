import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";

// CSS
import "./LineChart.scss";

const LineChart = ({ chartData }) => {
  return (
    <div className='lineChart'>
        <Line data={chartData} />
    </div>
  )
}

export default LineChart;