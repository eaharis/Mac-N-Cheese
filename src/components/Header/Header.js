import React, { Component } from 'react';
import logo from './logo_transparent.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import * as actionTypes from "../../store/actionTypes"
import * as pages from '../../store/pageNames';
import FontSizeChanger from 'react-font-size-changer';

class Header extends Component {
    render() {
        return (
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href={pages.HOME}>
                    <img
                        alt=""
                        src= {logo}
                        width="125"
                        height="125"
                        className="d-inline-block align-top"
                        onClick={this.props.clickedHome}
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={pages.HOME} onSelect={this.props.clickedHome}> Home</Nav.Link>
                        <Nav.Link href={pages.NEWMAP} onSelect={this.props.clickedBrowse}>Browse</Nav.Link>
                        <Nav.Link href={pages.PROMOTIONS} onSelect={this.props.clickedPromotions}>Promotions</Nav.Link>
                        <Nav.Link href={pages.DINEIN} onSelect={this.props.clickedDineIn}>Dine In</Nav.Link>
                        <Nav.Link href={pages.STORIES} onSelect={this.props.clickedStories}>Stories</Nav.Link>

                        <NavDropdown title="Accessibility" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#increase-size" className="dropdown">
                                <FontSizeChanger
                                    targets={['body']}
                                    options={{
                                        stepSize: 2,
                                        range: 3
                                    }}
                                />
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Nav className="nav-right">
                        <Nav.Link href={pages.PROFILE} className="profile" onSelect={this.props.clickedProfile}>Profile</Nav.Link>
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
        clickedProfile: () => dispatch({type: actionTypes.CLICKPROFILE})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
