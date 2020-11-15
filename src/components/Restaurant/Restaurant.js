import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Restaurant.css';
import restaurantsData from "../restaurant.data";
import ShowReview from "../ShowReview/ShowReview";
import reviewData from "../ShowReview/review.data";
import WriteReview from '../WriteReview/WriteReview';
import Reporter from "../Reporter/Reporter";
import { Rating } from '@material-ui/lab';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";


class Restaurant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurant: restaurantsData.find(element => element.name.toLowerCase() === this.props.match.params.restaurant),
            reviewsList: reviewData,
        }
    }

    onSortUp() {
        let sorted = [...this.state.reviewsList].sort((a, b) => {
            return a.rating - b.rating;
        });
        this.setState({
            reviewsList: sorted
        });
    }
    onSortDown() {
        let sorted = [...this.state.reviewsList].sort((a, b) => {
            return b.rating - a.rating;
        });
        this.setState({
            reviewsList: sorted
        });
    }


    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card className="infoCard" border="secondary">
                                <Card.Body>
                                    <Card.Title className="restName" >{this.state.restaurant.name}</Card.Title>
                                    <Card.Subtitle className="caption">{this.state.restaurant.caption}</Card.Subtitle>
                                    <Card.Subtitle className="address">{this.state.restaurant.address}</Card.Subtitle>
                                    <Card.Subtitle className="hoursTitle">Hours</Card.Subtitle>
                                    <Card.Subtitle className="hours">{this.state.restaurant.hours[0]}</Card.Subtitle>
                                    <Card.Subtitle className="hours">{this.state.restaurant.hours[1]}</Card.Subtitle>
                                    <Card.Title className="busynessTitle">Current traffic:</Card.Title>
                                    <Card.Subtitle className={this.state.restaurant.busyness === "Not very busy" ? "notBusy" : "busy"}>{this.state.restaurant.busyness}</Card.Subtitle>
                                </Card.Body>
                                <Card.Footer>
                                    <Button className="buttons" variant="dark" href={"/" + this.props.match.params.restaurant + "/menu"}>View Menu</Button>
                                    <WriteReview />
                                    <Reporter />

                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md="auto">
                            <Image
                                src={this.state.restaurant.imageUrl}
                                style={{
                                    display: "block",
                                    margin: "auto",
                                    width: "40vw",
                                    height: "40vh",
                                }}
                                rounded
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h1 className="reviewsTitle" ><Badge pill variant="dark">{this.state.restaurant.name} Reviews</Badge></h1>
                            <h1 className="overallRating" > <Rating name="half-rating-read" defaultValue={this.state.restaurant.rating} precision={0.5} readOnly />{' '}
                                <Badge pill variant="warning">{this.state.restaurant.rating}/5</Badge></h1>
                        </Col>
                        <Col className="sortButton">
                            <DropdownButton id="dropdown-basic-button" title="Sort">
                                <Dropdown.Item onClick={this.onSortUp.bind(this)}>Ratings <FontAwesomeIcon icon={faSortUp} /></Dropdown.Item>
                                <Dropdown.Item onClick={this.onSortDown.bind(this)}>Ratings <FontAwesomeIcon icon={faSortDown} /></Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row className="reviews">
                        <ShowReview restaurantName={this.state.restaurant.name} />
                    </Row>
                </Container>
            </div>
        );
    }

}

export default connect()(Restaurant);