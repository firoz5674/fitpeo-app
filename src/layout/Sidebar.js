import React from 'react';
import logo from "../assets/images/google-logo.png";
import homeIcon from "../assets/images/home1.png";
import statsIcon from "../assets/images/stats1.png";
import checkIcon from "../assets/images/check1.png";
import walletIcon from "../assets/images/wallet1.png";
import bagIcon from "../assets/images/bag-check1.png";
import logoutIcon from "../assets/images/logout.png";

function Sidebar() {
  return (
    <aside className='sidebar'>
      <img src={logo} className='img-fluid logo' alt="" />
      <div className='sidebar-menu'>
        <ul>
          <li className='active'>
            <img src={homeIcon} className='img-fluid' alt="" />
          </li>
          <li>
            <img src={statsIcon} className='img-fluid' alt="" />
          </li>
          <li>
            <img src={checkIcon} className='img-fluid' alt="" />
          </li>
          <li>
            <img src={walletIcon} className='img-fluid' alt="" />
          </li>
          <li>
            <img src={bagIcon} className='img-fluid' alt="" />
          </li>
        </ul>
        <img src={logoutIcon} className='img-fluid logout-icon' alt="" />
      </div>
    </aside>
  );
}

export default Sidebar;
