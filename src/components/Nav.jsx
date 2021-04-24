import React, {Component} from 'react';
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

import logo from '../img/fitqi-logo-dark.png';

export default class MyNav extends Component {
    render() {
        return (
            <Navbar className="px-5 py-3" bg="" expand="sm" variant="none">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="100"
                        className="d-inline-block justift-content-left align-center"/>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link className="nav-link" to="/shop">
                            Shop
                        </Link>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
