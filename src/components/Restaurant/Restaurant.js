import React, { Component } from 'react';
import { connect } from 'react-redux';
import restaurantsData from "../restaurant.data";

class restaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: restaurantsData,
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }

}

export default connect()(restaurant);