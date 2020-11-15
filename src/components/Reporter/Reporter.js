import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Reporter() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className="buttons" variant="light" onClick={handleShow}>Report an inaccuracy</Button>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Report an inaccuracy on Mac 'N Cheese
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Please enter your email address" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Please describe the issue</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formRestaurant">
                                <Form.Label>Select restaurant</Form.Label>
                                <Form.Control as="select" >
                                    <option>Pinks</option>
                                    <option>Centro</option>
                                    <option>Bistro</option>
                                    <option>Subway</option>
                                    <option>Tim Hortons</option>
                                    <option>Starbucks</option>
                                    <option>McDonalds</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Other</Form.Label>
                                <Form.Control placeholder="Enter any additional details"/>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Reporter;