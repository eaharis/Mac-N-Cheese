import React from 'react';
import { Rating } from '@material-ui/lab';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function WriteReview() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className="buttons" variant="outline-dark" onClick={handleShow}>Leave a Review</Button>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Leave a Review:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formRestaurant">
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
                        <Form.Group controlId="formDetails">
                            <Form.Label>Review</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control placeholder="Enter tags such as 'Great Service'" />
                        </Form.Group>
                        <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="input" label="Add a photo" />
                        </Form.Group>
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

export default WriteReview;