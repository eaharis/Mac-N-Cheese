import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rating } from '@material-ui/lab';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import reviewData from "./reviewData";


class ShowReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: reviewData
        }
    }

    render() {
        return (
            <div className="review">
                {
                    this.state.reviews.map(({ name, imageURL, rating, description, restaurant, tags }) => (
                        <Card className="m-1" style={{width: "23rem"}}>
                            <Card.Header>
                                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{restaurant}</Card.Title>
                                <Card.Title style={{"font-size": "1.6em"}}>{name}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <Card.Subtitle>{tags}</Card.Subtitle>
                                <Image
                                    src={{imageURL}}
                                    style={{
                                        display: "block",
                                        margin: "auto",
                                        width: "15vw",
                                        height: "15vh",
                                    }}
                                    rounded />
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        );
    }

}

export default connect()(ShowReview);
