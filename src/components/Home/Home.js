import React, { Component } from 'react'
import { connect } from 'react-redux';
import restaurantsData from '../restaurant.data';
import './Home.css';
import { NavLink } from "react-router-dom";

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
                  <Card.Title>{name}</Card.Title>
                  <NavLink to={`/${name.toLowerCase()}`}>
                    <Card.Title style={{ "font-size": "1.8em" }}>{name}</Card.Title>
                  </NavLink>
                  <Card.Title style={{ "font-size": "1.8em" }}>
                    Rating: <Badge variant="info">{rating}</Badge>{" "}
                  </Card.Title>
                  <StarRatings
                    rating={rating}
                    starRatedColor="green"
                    starDimension="1.8em"
                    numberOfStars={5}
                    starSpacing='1px'
                    name='rating'
                  />
                  <NavLink to={`/${name.toLowerCase()}/menu`}>
                    <Card.Text className='mt-2' style={{ "font-size": "1.2em" }}>See Menu</Card.Text>
                  </NavLink>
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