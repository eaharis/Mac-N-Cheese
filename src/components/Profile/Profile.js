import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, Breadcrumb, Form, ListGroup, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPencilAlt, faUser, faPhoneAlt, faEnvelope, faUtensils, faBell, faStore, faSave, faPaperPlane, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import "./Profile.css";

import McMasterLogo from "./McMaster.png";
import CalendarIcon from "./calendar.png";


import foodWhitelist from './FoodWhitelist';
import TagInput from '../TagInput/TagInput';

import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import PhoneInput from 'react-phone-number-input/input'

import Swal from 'sweetalert2';


const Profile = () => {
    const [firstName, setFirstName] = useState("Ada");
    const [lastName, setLastName] = useState("Lovelace");

    const [phoneNumber, setPhoneNumber] = useState("+19055259140");
    const [email, setEmail] = useState("lovelace@mcmaster.ca");
    const [description, setDescription] = useState("English mathematician and writer, known for work on Babbage's Analytical Engine");

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
                                    <h4>{firstName} {lastName}</h4>
                                    <Form.Row>
                                        <Col md={12} className="mb-3">
                                            <Form.Group>
                                                <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faPencilAlt} /> Description</Form.Label>
                                                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Enter a short description about yourself here..." style={{ resize: "none" }}></Form.Control>
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
                                <Button onClick={() => window.open("https://cap.mcmaster.ca/mcauth/login.jsp?app_id=1505&app_name=Avenue")} variant="outline-secondary">
                                    lovelace
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><img width="24" height="24" src={CalendarIcon} className="mr-2" />External calendar</h6>
                                <DropdownButton title="Outlook" variant="outline-secondary" type="button">
                                    <Dropdown.Item onClick={() => window.open("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1605477804&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d32d35a63-cad3-6831-360a-7ba042e05826&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015")}>Outlook</Dropdown.Item>
                                    <Dropdown.Item onClick={() => window.open("https://calendar.google.com")}>Google Calendar</Dropdown.Item>
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                <Button onClick={() => window.open("https://twitter.com/AdaLovelaceInst?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor")} title="@lovelace" variant="outline-secondary" type="button">
                                    @lovelace
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                <Button onClick={() => window.open("https://www.facebook.com/AdaLovelaceDay/")} title="@lovelace" variant="outline-secondary" type="button">
                                    @lovelace
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><FontAwesomeIcon icon={faUserFriends} /> Add Friend</h6>
                                <br />
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter Friend's MacID"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" onClick={() => Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Friend invitation sent',
                                            showConfirmButton: false,
                                            timerProgressBar: true,
                                            timer: 1500,
                                        })}><FontAwesomeIcon icon={faPaperPlane} /></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Form.Row>
                                <Col md={4} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faUser} /> First name</Form.Label>
                                    <Form.Control as="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Ada" required />
                                </Col>
                                <Col md={4} className="mb-3">
                                    <Form.Label className="font-weight-bold">Last name</Form.Label>
                                    <Form.Control as="input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Lovelace" required />
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
                                <Col className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                                    <Form.Control as="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@provider.com" required />
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
                                    <TagInput placeholder="Enter a favourite restaurant of yours like Burrito Banditos" whitelist={
                                        [
                                            { value: "Burrito Banditos", image: "https://logo.clearbit.com/burritobanditos.com" },
                                            { value: "Quik Chik", image: "https://logo.clearbit.com/quikchik.ca" },
                                            { value: "Subway", image: "https://logo.clearbit.com/subway.ca" },
                                            { value: "Tim Hortons", image: "https://food.ubc.ca/wp-content/uploads/2019/05/logo-tim-hortons.png" },
                                            {
                                                value: "McDonald's", image: "data:image/png;base64,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",
                                            },
                                            {
                                                value: "Pinks", image: "data:image/jpeg;base64,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AKkWIIuCDyCIFYOKlTzPswqLhlxCa1dKtTbyAdqIdX06ypIFvcqRPUwGT1zTY1TXYrh3FMqSjAs9WwVGcjWqaAuokgEXIuZN8Jg6dJdNNFRedKAKN+TYTutAheR0cStCoKatfzVtdWpecpAV706xJSw3upFyL95lV6WIC0K1RGfy6zlqQCsaaFGpqyhfj2N+5sx9rSVWi0rr5iuvPKCZjjK5+0VwKiUaaJVptUQUizI7M1EXs1tIsdQ/FtecqeVYlx5vr884eq6amOhK1QkopW+klRYC42APuZNcRhkqDS6qwuDZgCLg3Bse4IvOwCSlXmIwbMj+UmJp0tNMNrFRy1QMSSaZYM4sLNpPqBG5tPTwNPFjD0tFNuK16ZawBFVjSqA1DrXUCCEJIXYbaZMLRabWcnVVtzOoxSyiu+Iao1eqn3NFSyrSGsg1WYWZCBbXbb378zGrZVW1VqoDmo+KpW9Temkho30i9gp8sk25vvJhafbTEqvyzLsYVc1WreZ5LLV8qnUUl2K3Id6pFS3qI0D4bgWuFnt5RQxQoALTNjWYFfVSV08tSKuiqS1P1rp0g2Nybb3k0tFptZydbW3M6h2Z0qn3b1ftK1zS/jYdQ5UliTQamqMpC7WLKe+/N8BsoxNQVatRHFcYWl5eg6fvA1c/CradYuhPIGo2NjLAtFomdJnZ1Xj0MU2MDBKi/fVA/pqW8vyqioxql9JViEIVV9JIvuLzGo5bjqeEWk2suBQLsFdh5ISxoikrg3Vh6gDcj819Msy0WmMVliMvxApUzas5vW0UzTqqhDFdKWWqXpHY6WY+kMdhsJZVC+kX2Nhec7T7AREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q==",
                                            },
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
                            position: 'center',
                            icon: 'success',
                            title: 'Profile saved',
                            showConfirmButton: false,
                            timerProgressBar: true,
                            timer: 1500,
                        })}><FontAwesomeIcon icon={faSave} /> Save</Button>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default Profile;