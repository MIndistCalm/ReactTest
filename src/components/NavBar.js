import React from 'react';
import {Navbar} from "react-bootstrap";
import {BrowserRouter, Link} from "react-router-dom";

const NavBar = () => {
    return (
        <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/" style={{color: 'white'}}>Admin Panel</Link></Navbar.Brand>
            </Navbar>
        </BrowserRouter>
    );
};

export default NavBar;