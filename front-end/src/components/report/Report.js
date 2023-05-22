import React from "react";
import { Link } from "react-router-dom";

import "./Report.scss";

const Report = ({ report, id }) => {
  return (
    <tr>
      <td>{report.id}</td>

      <td>{report.transaction_date}</td>
      <td>{report.location}</td>

      <Link to={`/reports/${id}`}>
        <td>{report.deposit}</td>
      </Link>

      <td>{report.name}</td>
    </tr>
  );
};

export default Report;
