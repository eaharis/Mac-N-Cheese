import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styling/Map.css';

import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import restaurantsData from '../restaurant.data';
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurantsData,
    }
  }
  onSortUp() {
    let sorted = [...this.state.restaurants].sort((a, b) => {
      return a.rating - b.rating;
    });
    this.setState({
      restaurants: sorted
    });
  }
  onSortDown() {
    let sorted = [...this.state.restaurants].sort((a, b) => {
      return b.rating - a.rating;
    });
    this.setState({
      restaurants: sorted
    });
  }

  Map() {
    return <GoogleMap defaultZoom={15} defaultCenter={{lat: 43.2609, lng: -79.9192}} />
  }

  WrappedMap = withScriptjs(withGoogleMap(this.Map));

  render() {
    return (
      <div className='map-container'>
        <div style={{ width: "50vw", height: "100vh" }} className='map'>
          <this.WrappedMap googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />} />
        </div>
        <div className='category'>
          <Card border="primary">
            <Card.Header style={{ "font-size": "1.8em" }}>All Restaurants</Card.Header>
            <Card.Body>
              <Card.Text style={{ "font-size": "1.5em" }}>
                Below are a list of all restaurants. All of them would have been displayed on Google Map, but due to development budgets, we are unable to mark them on map. 
              </Card.Text>
              <Card.Title>Sort by ratings</Card.Title>
              <Button className='mr-2'  onClick={this.onSortUp.bind(this)}>ascending <FontAwesomeIcon icon={faSortUp} /></Button>
              <Button onClick={this.onSortDown.bind(this)}>descending <FontAwesomeIcon icon={faSortDown} /></Button>

            </Card.Body>
          </Card>
        {
          this.state.restaurants.map(({id, name, imageUrl, rating}) => (
              <div key={id}>
                <Card className='p-2'>
                  <Row>
                    <Col sm={4}>
                      <Card.Header>
                        <Image
                          src={imageUrl}
                          style={{
                            display: "block",
                            margin: "auto",
                            width: "13vw",
                            height: "15vh",
                          }}
                          rounded
                        />
                      </Card.Header>
                    </Col>
                    <Col sm={8}>
                      <Card.Title style={{ "font-size": "1.8em" }}>{name}</Card.Title>
                      <Card.Title style={{ "font-size": "1.8em" }}>
                        Rating: <Badge variant="info">{rating}</Badge>{" "}
                      </Card.Title>
                      <StarRatings
                        rating={rating}
                        starDimension="1.8em"
                        starRatedColor="green"
                        numberOfStars={5}
                        starSpacing='1px'
                        name='rating'
                      />
                    </Col>
                  </Row>
                </Card>
              </div>
            )
          )
        }
        </div>
      </div>
    )
  }

}

export default connect()(Map);