import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rating } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import reviewData from "./review.data";

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);


class ShowReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: reviewData,
            restaurantName: props.restaurantName,
        }
    }

    render() {
        return (
            <div className="preview">
                {
                    this.state.reviews.map(({ name, imageURL, rating, description, restaurant, tags, like }) => (
                        <Card className="m-1" style={{width: "23rem"}}>
                            <Card.Header>
                                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{this.state.restaurantName === undefined ? restaurant : this.state.restaurantName}</Card.Title>
                                <Card.Title style={{"font-size": "1.6em"}}>{name}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <Card.Subtitle>{tags.toString()}</Card.Subtitle>
                                <Image
                                    src={imageURL}
                                    style={{
                                        display: "block",
                                        margin: "auto",
                                        width: "15vw",
                                        height: "15vh",
                                    }}
                                    rounded
                                />
                            </Card.Body>
                            <Card.Footer>
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={like ? 1 : 0}
                                    max={1}
                                    precision={1}
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                />
                            </Card.Footer>
                        </Card>
                    ))
                }
            </div>
        );
    }
}

export default connect()(ShowReview);
