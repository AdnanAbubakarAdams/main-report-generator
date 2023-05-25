import React from 'react'; 
import { Link } from "react-router-dom";
import "./NavBar.scss"

const NavBar = () => {
  return (
    <nav className='navBar'>
      <h1>
        <Link to="/">Report Generator</Link>
      </h1>
      <h1>
        <Link to="/bar">Bar Chart</Link>
      </h1>
      <h1>
        <Link to="/line">Line Chart</Link>
      </h1>
      <h1>
        <Link to="/pie">Pie Chart</Link>
      </h1>
      <h1>
        <Link to="/reports/new">NEW DEPOSIT</Link>
      </h1>
    </nav>
  )
}

export default NavBar;