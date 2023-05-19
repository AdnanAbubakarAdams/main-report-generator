import React from 'react';
// import { Link } from "react-router-dom";

const Report = ({ report, id }) => {
  return (
    <tr>
        <td>
            {report.id}
        </td>
        <td>
            {report.transaction_date}
        </td>
        <td>
            {report.location}
        </td>
        <td>
            {report.deposit}
        </td>
        <td>
            {report.name}
        </td>

    </tr>
  )
}

export default Report