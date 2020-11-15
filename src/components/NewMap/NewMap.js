import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import './Map.css';
import SearchBox from '../SearchBox/SearchBox';

import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
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

const MacGeo = { lat: 43.2609, lng: -79.9192 }

function Map () {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedRestaurant(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
      <GoogleMap defaultZoom={15} defaultCenter={{ lat: 43.2609, lng: -79.9192 }} >
        {
          restaurantsData.map((restaurant) => (
            <Marker 
              key={restaurant.id} 
              position={{lat: restaurant.geo.lat, lng: restaurant.geo.lng}}
              onClick={() => { setSelectedRestaurant(restaurant) }}
            />
          ))
        }
        {selectedRestaurant && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedRestaurant(null);
            }}
            position={{
              lat: selectedRestaurant.geo.lat,
              lng: selectedRestaurant.geo.lng
            }}
          >
            <div>
              <h2>{selectedRestaurant.name}</h2>
              <p>Distance to Mac: {
                Math.round(window.google.maps.geometry.spherical.computeDistanceBetween(new window.google.maps.LatLng(selectedRestaurant.geo.lat, selectedRestaurant.geo.lng), new window.google.maps.LatLng(MacGeo.lat, MacGeo.lng)))
              } Meters </p>
            </div>
          </InfoWindow>
      )}
      </GoogleMap>
    )
}

class NewMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurantsData,
      searchField: ""
    }
  }

  distance(p) {
    return Math.round(window.google.maps.geometry.spherical.computeDistanceBetween(new window.google.maps.LatLng(p.geo.lat, p.geo.lng), new window.google.maps.LatLng(MacGeo.lat, MacGeo.lng)));
  }

  handleChange = event => {
    this.setState({ searchField: event.target.value });
  };

  onSortUp(key = "rating") {
    let sorted;
    if (key === "rating") {
      sorted = [...this.state.restaurants].sort((a, b) => {
        return a.rating - b.rating; 
      });
    } else {
      sorted = [...this.state.restaurants].sort((a, b) => {
        return this.distance(a) - this.distance(b); 
      });
    }
    
    this.setState({
      ...this.state,
      restaurants: sorted
    });
  }
  onSortDown(key = "rating") {
    let sorted;
    if (key === "rating") {
      sorted = [...this.state.restaurants].sort((a, b) => {
        return b.rating - a.rating; 
      });
    } else {
      sorted = [...this.state.restaurants].sort((a, b) => {
        return this.distance(b) - this.distance(a); 
      });
    }

    this.setState({
      ...this.state,
      restaurants: sorted
    });
  }

  WrappedMap = withScriptjs(withGoogleMap(Map));

  render() {
    return (
      <div className='map-container'>
        <div style={{ width: "50vw", height: "100vh" }} className='map'>
          <this.WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
              AIzaSyBsQaYd0ykkDEzoSXP44ZIkDEaXahY6SdM
            `}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />} />
        </div>
        <div className='category m-1'>
          <Card border="primary">
            <Card.Header style={{ "font-size": "1.8em" }}>All Restaurants</Card.Header>
            <Card.Body>
              <SearchBox
                placeholder="search all restaurants"
                handleChange={this.handleChange}
                className='mb-2'
              />
              <div className='sort m-2'>
                <div>
                  <Card.Title>Sort by ratings</Card.Title>
                  <Button className='mr-2' onClick={this.onSortUp.bind(this)}>ascending <FontAwesomeIcon icon={faSortUp} /></Button>
                  <Button onClick={this.onSortDown.bind(this)}>descending <FontAwesomeIcon icon={faSortDown} /></Button>
                </div>
                <div>
                  <Card.Title>Sort by distance to Mac</Card.Title>
                  <Button className='mr-2' onClick={() => this.onSortUp("geo")}>ascending <FontAwesomeIcon icon={faSortUp} /></Button>
                  <Button onClick={() => this.onSortDown("geo")}>descending <FontAwesomeIcon icon={faSortDown} /></Button>
                </div>
              </div>

            </Card.Body>
          </Card>
          <div className='cards'>
            {
              this.state.restaurants
              .filter(restaurant => restaurant.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
              .map(({ id, name, imageUrl, rating }) => (
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
                        <NavLink to={`/${name.toLowerCase()}`}>
                          <Card.Title style={{ "font-size": "1.8em" }}>{name}</Card.Title>
                        </NavLink>
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
                        <NavLink to={`/${name.toLowerCase()}/menu`}>
                          <Card.Text className='mt-2' style={{ "font-size": "1.2em" }}>See Menu</Card.Text>
                        </NavLink>
                      </Col>
                    </Row>
                  </Card>
                </div>
              )
              )
            }
          </div>
        </div>
      </div>
    )
  }

}

export default connect()(NewMap);