import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavBar = () => {
  const styleLink = {
    'color': 'white',
    'text-decoration': 'none',
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to='/' style={styleLink}>Admin Panel</Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;