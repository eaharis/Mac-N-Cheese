import React, { Component } from 'react';
import { connect } from 'react-redux';

class promotions extends Component {
    state = {}
    render() {
        return(<div className={"bg-info pb-3"}>
            <h1 className={"display-1 text-light"}>Live Feed</h1>
        </div>)
    }
}

export default connect()(promotions);