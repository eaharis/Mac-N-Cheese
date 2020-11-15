import React, { Component } from 'react';
import { connect } from 'react-redux';
import menuData from './menu.data';
import './MenuCategory.css'

import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: this.props.match.params.restaurant,
      menulist: menuData[this.props.match.params.restaurant].menu,
      menuOnDisplay: menuData[this.props.match.params.restaurant].menu[0].name,
      menuItems: menuData[this.props.match.params.restaurant].menu[0].items,
      idx: 0
    }
  }

  handleClick(idx) {
    this.setState({
      ...this.state,
      menuOnDisplay: this.state.menulist[idx].name,
      menuItems: this.state.menulist[idx].items,
      idx: idx
    })
  }
  onSortUp() {
    let sorted = [...this.state.menuItems].sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      menuItems: sorted
    });
  }
  onSortDown() {
    let sorted = [...this.state.menuItems].sort((a, b) => {
      return b.price - a.price;
    });
    this.setState({
      menuItems: sorted
    });
  }

  render() {
    return (
      <div className='menu-container'>
        <div className="header m-1">
          <Image
            src={`/${this.state.restaurant}.jpg`}
            style={{
              display: "block",
              margin: "auto",
              width: "15vw",
              height: "15vh",
            }}
            rounded
          />
          <Dropdown as={ButtonGroup} className='m-1' >
            <Button variant="success">All Menus</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
              {
                this.state.menulist.map((menu, idx) => (
                  <Dropdown.Item onClick={() => this.handleClick(idx)} id={idx} >{menu.name.toUpperCase()}</Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
          <div style={{ "font-weight": "bold" }}>Sort by price:</div>
          <Button className='mr-2' onClick={this.onSortUp.bind(this)}>ascending <FontAwesomeIcon icon={faSortUp} /></Button>
          <Button onClick={this.onSortDown.bind(this)}>descending <FontAwesomeIcon icon={faSortDown} /></Button>
        </div>

        <div className='category'>
          {
            this.state.menuItems
              .map(({ name, imageUrl, price, description, id }) => (
                <div key={id}>
                  <Card border='primary' className='p-2' >
                    <Row>
                      <Col sm={4}>
                        <Card.Header>
                          <Image
                            src={imageUrl}
                            style={{
                              display: "block",
                              margin: "auto",
                              width: "13.5vw",
                              height: "15vh",
                            }}
                            rounded
                          />
                        </Card.Header>
                      </Col>
                      <Col sm={8}>
                        <Card.Title style={{ "font-size": "1.8em" }}>{name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>
                        <Card.Title style={{ "font-size": "1.8em" }}>
                          Price: <Badge variant="info">$ {price}</Badge>{" "}
                        </Card.Title>
                        <Card.Text style={{ "font-size": "1.6em" }}>{description}</Card.Text>
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

export default connect()(Menu);