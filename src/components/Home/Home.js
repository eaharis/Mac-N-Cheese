import React, { Component } from 'react'
import { connect } from 'react-redux';
import restaurantsData from '../restaurant.data';
import './Home.css';
import ShowReview from "../ShowReview/ShowReview";
import { Rating } from '@material-ui/lab';
import Card from 'react-bootstrap/Card'
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurantsData,
    }
  }

  render() {
    return (
      <div>
        <h1>
          <Badge variant="secondary">Top Restaurants</Badge>
        </h1>
        <div className='preview'>
          {
            this.state.restaurants.map(({ name, imageUrl, rating }) => (
              <Card className='m-1' style={{ width: '23rem' }}>
                <Card.Header>
                  <Image
                    src={imageUrl}
                    style={{
                      display: "block",
                      margin: "auto",
                      width: "15vw",
                      height: "15vh",
                    }}
                    rounded
                  />
                </Card.Header>
                <Card.Body>

                  <Card.Title style={{ "font-size": "1.8em" }}>{name}</Card.Title>
                  <Card.Title style={{ "font-size": "1.8em" }}>
                    Rating: <Badge variant="info">{rating}</Badge>{" "}
                  </Card.Title>
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                </Card.Body>
              </Card>
            ))
          }
        </div>
        <h1>
          <Badge variant="secondary">Top Reviews</Badge>
        </h1>
        <div className='preview'>
            <ShowReview />
        </div>
      </div>
    )
  }
}

export default connect()(Home);