import React, { Component } from "react";
import { connect } from "react-redux";

class promotionItem extends Component {
  // state = {  order: 0, imgsrc: "../../public/Logos/McDs.png", title: 'Free Big Mac with any $20+ purchase', expiry: '1 week'};

  constructor(props) {
    super(props);

    this.state = {
      order: this.props.order,
      imgsrc: this.props.imgsrc,
      text: this.props.text,
      expiry: this.props.expiry,
    };
  }

  render() {
    return (
      <div className="px-5 py-5 text-left media ">
        <img
          src={this.state.imgsrc}
          className="photo small align-self-start mr-3 table-dark Aliphoto"
          alt="..."
        />
        <div className=" pl-2 media-body align-baseline text-light textblock bg-success">
          <h5 className=" display-4 font-weight-bold text-lg-left mt-0 ">
            {this.state.text}
          </h5>

          {/*<p>{this.state.text}</p>*/}
          <p align={"right"} className={"bg-danger px-5"}>
            {" "}
            Expiry date in {this.state.expiry}
          </p>

          {/*<a className="stretched-link">Go somewhere</a>*/}
        </div>
      </div>
    );
  }
}

export default connect()(promotionItem);
