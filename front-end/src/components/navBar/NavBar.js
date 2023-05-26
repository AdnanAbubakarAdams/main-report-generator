import React, {useState} from 'react'; 
import { Link } from "react-router-dom";
import "./NavBar.scss"
// import "./NavBar.css"

const NavBar = () => {

  const [active, setActive] = useState("navBar__menu");

  const [icon, setIcon] = useState("navBar__toggler");

  const navToggle = () => {
    if (active === "navBar__menu") {
      setActive("navBar__menu navBar__active");
    } else setActive("navBar__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("navBar__toggler toggle");
    } else setIcon("navBar__toggler");
  };

  return (
    <nav className="navBar">
      <Link to="/" className="navBar__brand">
        report generator
      </Link>
      <ul className={active}>
        <li className="navBar__item">
          <Link to="/bar" className="navBar__link">
            Bar Chart
          </Link>
        </li>
        <li className="navBar__item">
          <Link to="/line" className="navBar__link">
            Line Chart
          </Link>
        </li>
        <li className="navBar__item">
          <Link to="/pie" className="navBar__link">
            Pie Chart
          </Link>
        </li>
        <li className="navBar__item">
          <Link to="/reports/new" className="navBar__link">
            New Report
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default NavBar;


{/* <nav className='navBar'>
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
    </nav> */}