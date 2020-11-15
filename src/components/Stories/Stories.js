import React, { Component } from "react";
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
        ["/samplestories/donuts.jpg"],
        ["/samplestories/minipizza.jpg", "/samplestories/pizza.jpg"],
        ["/samplestories/fries.jpg"],
        ["/samplestories/juices.jpg"],
        ["/samplestories/burgers.jpg"],
      ],
      profs: [
        { imgsrc: "profiles/declan.jpg", name: "Declan", id: 0 },
        { imgsrc: "profiles/esam.jpg", name: "Esam", id: 1 },
        { imgsrc: "profiles/ali.jpg", name: "Ali", id: 2 },
        { imgsrc: "profiles/jack.jpg", name: "Jack", id: 3 },
        { imgsrc: "profiles/jennifer.jpg", name: "Jennifer", id: 4 },
        { imgsrc: "profiles/eric.jpg", name: "Eric", id: 5 },
      ],
      currstoryI: 0,
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
      return "card-body bg-primary";
    }
    return "card-body";
  };
  render() {
    return (
      <React.Fragment>
        <div className={"bg-dark pb-2"}>
          <h1 className={"display-1 text-primary"}> Friends' Stories!</h1>
          <Button
            type={"button"}
            class="btn btn-primary"
            className={"text-right text-light mx-2 my-2"}
            variant="primary "
            onClick={""}
          >
            Upload a story
          </Button>{" "}
        </div>

        <div>
          <Row>
            {this.state.profs.map((prof) => (
              <Col md={2} className="mb-1 ">
                <Card>
                  <Card.Body className={this.highlightclass(prof.id)}>
                    <div className="d-flex flex-column align-items-center text-center">
                      <div className="profilePicture rounded-circle">
                        <input
                          type="file"
                          hidden={true}
                          accept=".png, .jpg, .svg"
                        />
                        <img
                          src={prof.imgsrc}
                          onClick={() => this.changeStory(prof.id)}
                        />
                      </div>
                      <div className="mt-3">
                        <h4>{prof.name}</h4>
                      </div>
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
