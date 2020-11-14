import React, { Component } from 'react';
import logo from '../logo_transparent.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/Header.css'
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import * as actionTypes from "../store/actionTypes"

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src= {logo}
                        width="200"
                        height="200"
                        className="d-inline-block align-top"
                        onClick={this.props.clickedHome}
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" onSelect={this.props.clickedHome}>Home</Nav.Link>
                        <Nav.Link href="/browse" onSelect={this.props.clickedBrowse}>Browse</Nav.Link>
                        <Nav.Link href="/promotions" onSelect={this.props.clickedPromotions}>Promotions</Nav.Link>
                        <Nav.Link href="/dine-in" onSelect={this.props.clickedDineIn}>Dine In</Nav.Link>
                        <Nav.Link href="/stories" onSelect={this.props.clickedStories}>Stories</Nav.Link>
                        <NavDropdown title="Accessibility" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#increase-size" className="dropdown">a | A</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="nav-right">
                        <Nav.Link href="/login" className="sign-in" onSelect={this.props.clickedSignIn}>Sign Up / Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

const mapStateToProps = state => {
    return {
        page: state.header.clickedPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clickedHome: () => dispatch({type: actionTypes.CLICKHOME}),
        clickedBrowse: () => dispatch({type: actionTypes.CLICKBROWSE}),
        clickedPromotions: () => dispatch({type: actionTypes.CLICKPROMOTIONS}),
        clickedDineIn: () => dispatch({type: actionTypes.CLICKDINEIN}),
        clickedStories: () => dispatch({type: actionTypes.CLICKSTORIES}),
        clickedSignIn: () => dispatch({type: actionTypes.CLICKSIGNIN})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
