import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, Breadcrumb, Form, ListGroup, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPencilAlt, faUser, faPhoneAlt, faEnvelope, faUtensils, faBell, faStore, faSave } from '@fortawesome/free-solid-svg-icons'
import "./Profile.css";

import McMasterLogo from "./McMaster.png";
import CalendarIcon from "./calendar.png";


import foodWhitelist from './FoodWhitelist';
import TagInput from '../TagInput/TagInput';

import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import PhoneInput from 'react-phone-number-input/input'

import Swal from 'sweetalert2';

/*
 * dsjljd 
*/
const Profile = () => {

    const [phoneNumber, setPhoneNumber] = useState("");

    // Default image is Ada Lovelace
    const [profileImage, setProfileImage] = useState("https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwODQwOTQ2MTkw/ada-lovelace-20825279-1-402.jpg");
    const profilePictureInput = useRef(null);

    const updateProfilePicture = () => {
        const image = profilePictureInput.current.files[0];

        // Only update if an image has been chosen to upload
        if (image) {
            setProfileImage(URL.createObjectURL(image));
        }
    }

    return (
        <Container className="Profile">
            <script src="bootstrap-slider.min.js"></script>
            <link href="bootstrap-slider.min.css" rel="stylesheet" />
            <Row>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Body className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <div onClick={() => profilePictureInput.current.click()} className="profilePicture rounded-circle">
                                    <input ref={profilePictureInput} type="file" hidden={true} onChange={() => updateProfilePicture()} accept=".png, .jpg, .svg" />
                                    <img src={profileImage} />
                                    <p style={{ position: "absolute", margin: "0", background: "rgba(0,0,0,0.7)", bottom: 0, width: "100%" }}>
                                        <FontAwesomeIcon icon={faCamera} color="white" />
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <h4>Ada Lovelace</h4>
                                    <Form.Row>
                                        <Col md={12} className="mb-3">
                                            <Form.Group>
                                                <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faPencilAlt} /> Description</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder="Enter a short description about yourself here..." style={{ resize: "none" }}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><img width="24" height="24" src={McMasterLogo} className="mr-2" />McMaster</h6>
                                <DropdownButton title="bucklj4" variant="outline-secondary">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><img width="24" height="24" src={CalendarIcon} className="mr-2" />External calendar</h6>
                                <DropdownButton title="Outlook" variant="outline-secondary" type="button">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                <DropdownButton title="@lovelace" variant="outline-secondary" type="button">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                <DropdownButton title="@lovelace" variant="outline-secondary" type="button">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                <DropdownButton title="@lovelace" variant="outline-secondary" type="button">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="mb-3">
                        <Card.Body>
                            {/* TODO: Input validation? */}
                            <Form.Row>
                                <Col md={4} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faUser} /> First name</Form.Label>
                                    <Form.Control as="input" placeholder="Ada" required />
                                </Col>
                                <Col md={4} className="mb-3">
                                    <Form.Label className="font-weight-bold">Last name</Form.Label>
                                    <Form.Control as="input" placeholder="Lovelace" required />
                                </Col>
                                <Col md={4} className="mb-3">
                                    <Form.Label className="font-weight-bold"> Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="input" placeholder="lovelace" required />
                                    </InputGroup>
                                </Col>
                            </Form.Row>
                            <hr />
                            <Form.Row>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faPhoneAlt} /> Mobile</Form.Label>
                                    <PhoneInput className="form-control" country="CA" value={phoneNumber} onChange={setPhoneNumber} placeholder="(555) 555-5555" maxLength={14} />
                                </Col>
                                {/* TODO: Validation of email. Is there a React component we can use? */}
                                <Col className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                                    <Form.Control as="input" placeholder="email@provider.com" required />
                                </Col>
                            </Form.Row>
                            <hr />
                            <Form.Row>
                                <Col md={12} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faUtensils} /> Favourite foods and cuisines</Form.Label>
                                    <TagInput placeholder="Enter a favourite food/cuisine of yours like Pizza or Chinese Food" whitelist={foodWhitelist} />
                                </Col>
                            </Form.Row>
                            <hr />
                            <Form.Row>
                                <Col md={12} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faStore} /> Favourite restaurants</Form.Label>
                                    {/* TODO: Use proper API to source the restaurants */}
                                    <TagInput placeholder="Enter a favourite restaurant of yours like Burrito Banditos" whitelist={
                                        [
                                            { value: "Burrito Banditos", image: "https://logo.clearbit.com/burritobanditos.com" },
                                            { value: "Quik Chik", image: "https://logo.clearbit.com/quikchik.ca" },
                                            { value: "Subway", image: "https://logo.clearbit.com/subway.ca" },
                                        ]
                                    } />
                                </Col>
                            </Form.Row>
                            <hr />
                            <Form.Row>
                                <Col md={12} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faBell} /> Alerts</Form.Label>
                                    <Form.Switch id="suggestNewRestaurantsSwitch" label="Suggest me new restaurants based on my cuisine preferences" />
                                    <Form.Switch id="promotionAlertSwitch" label="Alert me when my favourite restaurants have active promotions" />
                                </Col>
                                <Form.Row className="w-100">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Send me alerts by</Form.Label>
                                            <Form.Control as="select">
                                                <option>Email</option>
                                                <option>Text Message</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>Alert frequency</Form.Label>
                                        <ReactBootstrapSlider id="freq" value={0} ticks={[0, 1, 2, 3]} tooltip="hide" ticks_labels={["Daily", "Weekly", "Biweekly", "Monthly"]} />
                                    </Col>
                                </Form.Row>
                            </Form.Row>
                        </Card.Body>
                        <Button variant="warning" size="lg" block={true} onClick={() => Swal.fire({
                            position: 'top-right',
                            icon: 'success',
                            title: 'Profile saved',
                            toast: true,
                            showConfirmButton: false,
                            timer: 1500
                        })}><FontAwesomeIcon icon={faSave} /> Save</Button>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default Profile;