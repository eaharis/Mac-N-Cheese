import React, { Component } from 'react';
import { connect } from 'react-redux';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

const menuCategory = ({menu}) => {
  return (
    <div>
      <div>
      {
        menu.map(({ name, imageUrl, price, description, id }) => (
            <div key={id}>
              <Card style={{ padding: "30px" }}>
                <Row>
                  <Col xs={3} md={2}>
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
                  </Col>
                  <Col xs={12} md={8}>
                    <Card.Title>{name.toUpperCase()}</Card.Title>
                    <Card.Title>
                      Price: <Badge variant="info">{price}</Badge>{" "}
                    </Card.Title>
                    <Card.Text>{description}</Card.Text>
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
export default connect()(menuCategory);