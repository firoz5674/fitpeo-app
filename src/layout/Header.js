import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import searchIcon from "../assets/images/search.png";
import icon1 from "../assets/images/enevlope.png";
import icon2 from "../assets/images/setting.png";
import icon3 from "../assets/images/bell.png";
import profileImg from "../assets/images/man.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="header">
      <Navbar expand="md">
        <div className='search-box'>
          <div className='icon'>
            <img src={searchIcon} className='img-fluid' alt="" />
          </div>
          <input type="text" name='search' placeholder='Search' />
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <ul className='options'>
              <li>
                <img src={icon1} className='img-fluid' alt="" />
              </li>
              <li>
                <img src={icon2} className='img-fluid' alt="" />
              </li>
              <li>
                <img src={icon3} className='img-fluid' alt="" />
              </li>
            </ul>
            <div className='profile'>
              <img src={profileImg} className='img-fluid' alt="" />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
