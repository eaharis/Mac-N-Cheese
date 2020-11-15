import React, { Component, useRef } from "react";
import { connect } from "react-redux";
import Stories from "react-insta-stories";
import Story from "react-insta-stories";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import PromotionItem from "../Promotions/PromotionItem";

class stories extends Component {
  state = {};


  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      storyimgsrcs: [
        ["/samplestories/chinese.jpg", "/samplestories/oreo.jpg"],
        ["/samplestories/mcdeez.png", "/samplestories/donuts.jpg"],
        ["/samplestories/minipizza.jpg", "/samplestories/pizza.jpg"],
        ["/samplestories/fries.jpg", "/samplestories/popcorn.jpg"],
        [
          "/samplestories/juices.jpg",
          "/samplestories/cherry.jpg",
          "/samplestories/flurry.jpg",
        ],
        ["/samplestories/burgers.jpg", "/samplestories/chips.jpg"],
      ],
      profs: [
        {
          imgsrc: "profiles/declan.jpg",
          name: "Declan",
          id: 0,
          restaurantname: "Pink's",
          newref: "/pinks",
        },
        {
          imgsrc: "profiles/esam.jpg",
          name: "Esam",
          id: 1,
          restaurantname: "Subway",
          newref: "/subway",
        },
        {
          imgsrc: "profiles/ali.jpg",
          name: "Ali",
          id: 2,
          restaurantname: "McDonald's",
          newref: "/mcdonalds",
        },
        {
          imgsrc: "profiles/jack.jpg",
          name: "Jack",
          id: 3,
          restaurantname: "Bistro",
          newref: "/bistro",
        },
        {
          imgsrc: "profiles/jennifer.jpg",
          name: "Jennifer",
          id: 4,
          restaurantname: "McDonald's",
          newref: "/mcdonalds",
        },
        {
          imgsrc: "profiles/eric.jpg",
          name: "Eric",
          id: 5,
          restaurantname: "Centro",
          newref: "/centro",
        },
      ],
      currstoryI: 0,
      ownstorytext: "",
    };
  }
  changeStory = (idnum) => {
    if (idnum === 6) {
      idnum = 5;
    }
    console.log(idnum);
    this.setState({ currstoryI: idnum });
  };
  highlightclass = (idnum) => {
    if (idnum === this.state.currstoryI) {
      return "card-body bg-success";
    }
    return "card-body";
  };
  uploadedStory = () => {
    this.setState({
      ownstorytext: "Picture uploading... your story will be updated",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className={"bg-dark pb-2"}>
          <h1 className={"display-1 text-light"}> Friends' Stories!</h1>
          {/*<Button*/}
          {/*  type={"button"}*/}
          {/*  class="btn btn-primary"*/}
          {/*  className={"text-right text-light mx-2 my-2"}*/}
          {/*  variant="primary "*/}
          {/*  onClick={""}*/}
          {/*>*/}
          {/*  Upload a story <input type="file" hidden />*/}
          {/*</Button>{" "}*/}
          {/*<input type="file" hidden={false} accept=".png, .jpg, .svg" />*/}
          <label
            type={"button"}
            class="btn btn-primary"
            className={"text-primary mx-2 my-2"}
          >
            Upload your own story{" "}
            <input type="file" onChange={this.uploadedStory} hidden />
          </label>
          <p className={"text-success"}>{this.state.ownstorytext}</p>
        </div>

        <div>
          <Row>
            {this.state.profs.map((prof) => (
              <Col md={2} className="mb-1 ">
                <Card>
                  <Card.Body className={this.highlightclass(prof.id)}>
                    <div className="d-flex flex-column align-items-center text-center">
                      <div className="profilePicture rounded-circle">
                        <img
                          src={prof.imgsrc}
                          onClick={() => this.changeStory(prof.id)}
                        />
                      </div>
                      <div className="mt-3">
                        <h4>{prof.name}</h4>
                      </div>
                      <a href={prof.newref}>Was at {prof.restaurantname}</a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            {/*<Col md={2} className="mb-1">*/}
            {/*  <Card>*/}
            {/*    <Card.Body className="card-body">*/}
            {/*      <div className="d-flex flex-column align-items-center text-center">*/}
            {/*        <div className="profilePicture rounded-circle">*/}
            {/*          <input*/}
            {/*            type="file"*/}
            {/*            hidden={true}*/}
            {/*            accept=".png, .jpg, .svg"*/}
            {/*          />*/}
            {/*          <img src={this.state.profimgsrcs[0]} />*/}
            {/*        </div>*/}
            {/*        <div className="mt-3">*/}
            {/*          <h4>Declan</h4>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </Card.Body>*/}
            {/*  </Card>*/}
            {/*</Col>*/}
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "bg-secondary",
          }}
          className={" py-4 "}
        >
          <Story
            className={"centred"}
            stories={this.state.storyimgsrcs[this.state.currstoryI]}
            defaultInterval={10500}
            keyboardNavigation={true}
            onAllStoriesEnd={() => this.changeStory(this.state.currstoryI + 1)}
            loop={true}
            width={432}
            height={768}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default connect()(stories);
