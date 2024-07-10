import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img width={80} height={60}  src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Services </Link>
          <div class="dropdown">
            <button class="dropbtn"> Trainings
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to="/SeleniumJava">Selenium Java</Link>
              <Link to="/SeleniumCSharp">Selenium C#</Link>
              <Link to="/PlaywrightType">Plawright TypeScript</Link>
              <Link to="/RestAssured">REST API Automation</Link>
            </div>
          </div>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        
        <Link to="/"> Services </Link>
        <div class="dropdown">
        <button class="dropbtn"> Trainings
        <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <Link to="/SeleniumJava">Selenium Java</Link>
          <Link to="/SeleniumCSharp">Selenium C#</Link>
          <Link to="/PlaywrightType">Plawright TypeScript</Link>
          <Link to="/RestAssured">REST API Automation</Link>
        </div>
        </div>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        
        <button class="togglebtn" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
    </div>
  </div>
  );
}

export default Navbar;