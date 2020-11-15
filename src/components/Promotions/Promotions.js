import React, { Component } from "react";
import { connect } from "react-redux";
import PromotionItem from "./PromotionItem";
import { Button, Dropdown } from "react-bootstrap";

class Promotions extends Component {

  state = {};

  constructor(props) {
    super(props);

    this.state = {
      currpromos: this.shuffle([
        {
          order: 0,
          imgsrc: "/Logos/McDs.png",
          title: "Free Big Mac with any $20+ purchase",
          nextref: "/mcdonalds",
          expiry: "1 week",
        },
        {
          order: 1,
          imgsrc: "Logos/Subway.png",
          title: "Buy 1 foot long, get another free",
          nextref: "/subway",
          expiry: "1 week, 2 days",
        },
        {
          order: 2,
          imgsrc: "Logos/Subway.png",
          title: "Free drink with any premium foot long sub",
          nextref: "/subway",
          expiry: "1 week, 3 days",
        },
        {
          order: 3,
          imgsrc: "Logos/McDs.png",
          title: "Free fries with uber eats order of $20",
          nextref: "/mcdonalds",
          expiry: "2 weeks",
        },
        {
          order: 4,
          imgsrc: "Logos/pinks.png",
          title: "Free upgrade to cheese fries with any Triple Burger combo",
          nextref: "/pinks",
          expiry: "3 weeks",
        },
        {
          order: 5,
          imgsrc: "Logos/Subway.png",
          nextref: "/subway",
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
          nextref: "/mcdonalds",
          expiry: "1 week",
        },
        {
          order: 1,
          imgsrc: "Logos/Subway.png",
          title: "Buy 1 foot long, get another free",
          nextref: "/subway",
          expiry: "1 week, 2 days",
        },
        {
          order: 2,
          imgsrc: "Logos/Subway.png",
          title: "Free drink with any premium foot long sub",
          nextref: "/subway",
          expiry: "1 week, 3 days",
        },
        {
          order: 3,
          imgsrc: "Logos/McDs.png",
          title: "Free fries with uber eats order of $20",
          nextref: "/mcdonalds",
          expiry: "2 weeks",
        },
        {
          order: 4,
          imgsrc: "Logos/pinks.png",
          title: "Free upgrade to cheese fries with any Triple Burger combo",
          nextref: "/pinks",
          expiry: "3 weeks",
        },
        {
          order: 5,
          imgsrc: "Logos/Subway.png",
          nextref: "/subway",
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
          nextref: "/mcdonalds",
          expiry: "1 week",
        },
        {
          order: 1,
          imgsrc: "Logos/Subway.png",
          title: "Buy 1 foot long, get another free",
          nextref: "/subway",
          expiry: "1 week, 2 days",
        },
        {
          order: 2,
          imgsrc: "Logos/Subway.png",
          title: "Free drink with any premium foot long sub",
          nextref: "/subway",
          expiry: "1 week, 3 days",
        },
        {
          order: 3,
          imgsrc: "Logos/McDs.png",
          title: "Free fries with uber eats order of $20",
          nextref: "/mcdonalds",
          expiry: "2 weeks",
        },
        {
          order: 4,
          imgsrc: "Logos/pinks.png",
          title: "Free upgrade to cheese fries with any Triple Burger combo",
          nextref: "/pinks",
          expiry: "3 weeks",
        },
        {
          order: 5,
          imgsrc: "Logos/Subway.png",
          nextref: "/subway",
          title:
            "Free macadamia nut cookie with the purchase of a foot long combo",
          expiry: "4 weeks",
        },
      ].reverse(),
      clickedPromo: false,
      successtext: "",
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
    this.setState({ clickedPromo: false, successtext: "" });
    if (clickedOption === "sort") {
      this.setState({ currpromos: this.state.sortedpromos });
    } else if (clickedOption === "reverse") {
      this.setState({ currpromos: this.state.reversedpromos });
    }
  };
  newPromo = () => {
    this.setState({ clickedPromo: true });
  };
  submittedURL = () => {
    this.setState({
      successtext:
        "Thank you for submitting the promotion! Our team will review and post it shortly.",
    });
  };
  render() {
    if (this.state.clickedPromo) {
      return (
        <React.Fragment>
          <div className={"bg-dark pb-2"}>
            <h1 className={"display-1 text-success"}>Promotions!</h1>

            <Dropdown className={"text-right px-2"}>
              <Dropdown.Toggle
                className={"text-dark"}
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
          <Button
            type={"button"}
            class="btn btn-primary"
            className={"float-right text-light mx-2 my-2"}
            variant="primary "
            onClick={this.newPromo}
          >
            Submit a link to a new promotion
          </Button>{" "}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text text-bg-light "
                id="basic-addon1"
              >
                Enter URL to food promotion:
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="URL"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <button
              onClick={this.submittedURL}
              className="btn btn-primary btn-sm m-2"
            >
              Submit
            </button>
          </div>
          <a>{this.state.successtext}</a>
          <div className={"py-5"}> </div>
          <div>
            {this.state.currpromos.map((promo) => (
              <PromotionItem
                text={promo.title}
                id={promo.order}
                key={promo.order}
                imgsrc={promo.imgsrc}
                expiry={promo.expiry}
                nextref={promo.nextref}
              />
            ))}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className={"bg-dark pb-2"}>
            <h1 className={"display-1 text-success"}>Promotions!</h1>

            <Dropdown className={"text-right px-2"}>
              <Dropdown.Toggle
                className={"text-dark"}
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
          <Button
            type={"button"}
            class="btn btn-primary"
            className={"float-right text-light mx-2 my-2"}
            variant="primary "
            onClick={this.newPromo}
          >
            Submit a link to a new promotion
          </Button>{" "}
          <div className={"py-5"}> </div>
          <div>
            {this.state.currpromos.map((promo) => (
              <PromotionItem
                text={promo.title}
                id={promo.order}
                key={promo.order}
                imgsrc={promo.imgsrc}
                expiry={promo.expiry}
                nextref={promo.nextref}
              />
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default connect()(Promotions);

