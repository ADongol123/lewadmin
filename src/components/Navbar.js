import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import{Avatar} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Avatar className="avatar"/>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text">
              <div className="nav__main">
                <div className="nav__first">
                  <FaIcons.FaCartPlus />
                  <span>Products</span>
                  <ArrowDropDownIcon  style={{marginLeft:15}}/>
                </div>
                <div className="nav__second">
                  <Link style={{marginTop:5}} to="/airvent">
                   <p>Airvent</p>
                  </Link>
                  <Link style={{marginTop:5}} to="/ductfans">
                   <p>Duct Fans</p>
                  </Link> 
                   <Link style={{marginTop:5}} to="/ductlines">
                   <p>Duct Lines</p>
                  </Link> 
                  <Link style={{marginTop:5}} to="/exaustfans">
                   <p>Exaust Fans</p>
                  </Link>
                  <Link style={{marginTop:5}} to="/metalworks">
                   <p>Metal Works</p>
                  </Link> 
                   <Link style={{marginTop:5}} to="/prefabhouse">
                   <p>Prefab House</p>
                  </Link>
                </div>
              </div>
              
            </li>
             <li className="nav-text">
              <Link style={{marginTop:320}} to="/message">
              <FaIcons.FaEnvelopeOpenText/>
              <span>Messages</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link style={{marginTop:280}} to="/Messages">
              <LogoutIcon/>
              <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
