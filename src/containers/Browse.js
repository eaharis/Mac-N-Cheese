import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

import * as actionTypes from "../store/actionTypes"
import * as pageNames from '../store/pageNames';

class Browse extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <h3>Browse Page</h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(Browse);