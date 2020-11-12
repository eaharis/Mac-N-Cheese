import React, { Component } from 'react'
import { connect } from 'react-redux';
import restaurantsData from '../restaurant.data';
import './styling/Home.css';

import Card from 'react-bootstrap/Card'
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import StarRatings from 'react-star-ratings';

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
          <Badge variant="secondary">All Restaurants</Badge>
        </h1>
        <div className='preview'>
          {
            this.state.restaurants.map(({name, imageUrl, rating}) => (
              <Card style={{ width: '23rem', margin: '3px' }}>
                <Card.Header>
                  <Image
                    src={imageUrl}
                    style={{
                      display: "block",
                      margin: "auto",
                      width: "158px",
                      height: "148px",
                    }}
                    rounded
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Title style={{ "font-size": "30px" }}>{name}</Card.Title>
                  <Card.Title style={{ "font-size": "30px" }}>
                    Rating: <Badge variant="info">{rating}</Badge>{" "}
                  </Card.Title>
                  <StarRatings
                    rating={rating}
                    starRatedColor="green"
                    numberOfStars={5}
                    starSpacing='1px'
                    name='rating'
                  />
                </Card.Body>
              </Card>
            ))
          }
        </div>
        <h1>
          <Badge variant="secondary">All Reviews</Badge>
        </h1>
        <div className='preview'>
        </div>
      </div>
    )
  }
}

export default connect()(Home);