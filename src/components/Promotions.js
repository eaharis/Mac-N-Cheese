import React, { Component } from "react";
import { connect } from "react-redux";
import PromotionItem from "./PromotionItem";
import { Dropdown } from "react-bootstrap";

class promotions extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      currpromos: this.shuffle([
        {
          order: 0,
          imgsrc: "/Logos/McDs.png",
          title: "Free Big Mac with any $20+ purchase",
          expiry: "1 week",
        },
        {
          order: 1,
          imgsrc: "Logos/Subway.png",
          title: "Buy 1 foot long, get another free",
          expiry: "1 week, 2 days",
        },
        {
          order: 2,
          imgsrc: "Logos/Subway.png",
          title: "Free drink with any premium foot long sub",
          expiry: "1 week, 3 days",
        },
        {
          order: 3,
          imgsrc: "Logos/McDs.png",
          title: "Free fries with uber eats order of $20",
          expiry: "2 weeks",
        },
        {
          order: 4,
          imgsrc: "Logos/pinks.png",
          title: "Free upgrade to cheese fries with any Triple Burger combo",
          expiry: "3 weeks",
        },
        {
          order: 5,
          imgsrc: "Logos/Subway.png",
          title:
            "Free macadamia nut cookie with the purchase of a foot long combo",
          expiry: "4 weeks",
        },
      ]),
      sortedpromos: [
        {
          order: 0,
          imgsrc: "/Logos/McDs.png",
          title: "Free Big Mac with any $20+ purchase",
          expiry: "1 week",
        },
        {
          order: 1,
          imgsrc: "Logos/Subway.png",
          title: "Buy 1 foot long, get another free",
          expiry: "1 week, 2 days",
        },
        {
          order: 2,
          imgsrc: "Logos/Subway.png",
          title: "Free drink with any premium foot long sub",
          expiry: "1 week, 3 days",
        },
        {
          order: 3,
          imgsrc: "Logos/McDs.png",
          title: "Free fries with uber eats order of $20",
          expiry: "2 weeks",
        },
        {
          order: 4,
          imgsrc: "Logos/pinks.png",
          title: "Free upgrade to cheese fries with any Triple Burger combo",
          expiry: "3 weeks",
        },
        {
          order: 5,
          imgsrc: "Logos/Subway.png",
          title:
            "Free macadamia nut cookie with the purchase of a foot long combo",
          expiry: "4 weeks",
        },
      ],
      reversedpromos: [
        {
          order: 0,
          imgsrc: "/Logos/McDs.png",
          title: "Free Big Mac with any $20+ purchase",
          expiry: "1 week",
        },
        {
          order: 1,
          imgsrc: "Logos/Subway.png",
          title: "Buy 1 foot long, get another free",
          expiry: "1 week, 2 days",
        },
        {
          order: 2,
          imgsrc: "Logos/Subway.png",
          title: "Free drink with any premium foot long sub",
          expiry: "1 week, 3 days",
        },
        {
          order: 3,
          imgsrc: "Logos/McDs.png",
          title: "Free fries with uber eats order of $20",
          expiry: "2 weeks",
        },
        {
          order: 4,
          imgsrc: "Logos/pinks.png",
          title: "Free upgrade to cheese fries with any Triple Burger combo",
          expiry: "3 weeks",
        },
        {
          order: 5,
          imgsrc: "Logos/Subway.png",
          title:
            "Free macadamia nut cookie with the purchase of a foot long combo",
          expiry: "4 weeks",
        },
      ].reverse(),
      // currpromos: [],
    };

    // this.state.reversedpromos.reverse();
  }
  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };
  changeOrder = (clickedOption) => {
    if (clickedOption === "sort") {
      this.setState({ currpromos: this.state.sortedpromos });
    } else if (clickedOption === "reverse") {
      this.setState({ currpromos: this.state.reversedpromos });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className={"bg-dark pb-2"}>
          <h1 className={"display-1 text-success"}>Promotions!</h1>
          <Dropdown className={"text-right px-2"}>
            <Dropdown.Toggle
              className={"text-light"}
              variant="success"
              id="dropdown-basic"
            >
              Sort by:
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#sorted"
                onClick={() => this.changeOrder("sort")}
              >
                Earlier expiry dates first
              </Dropdown.Item>
              <Dropdown.Item
                href="#reversed"
                onClick={() => this.changeOrder("reverse")}
              >
                Earlier expiry dates last
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          {this.state.currpromos.map((promo) => (
            <PromotionItem
              text={promo.title}
              id={promo.order}
              key={promo.order}
              imgsrc={promo.imgsrc}
              expiry={promo.expiry}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(promotions);
