import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to='/' className='text-white text-decoration-none'>Admin Panel</Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;