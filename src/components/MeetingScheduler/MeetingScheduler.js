import * as React from 'react';
import {
    teal, indigo, red, orange, green
} from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { ViewState, GroupingState, IntegratedGrouping, Resources } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
    DayView,
    GroupingPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import Schedule from "./Schedule";
import "./MeetingScheduler.css"
import { Container, Card, Row, Col, ListGroup, DropdownButton, Form } from 'react-bootstrap';


const MeetingScheduler = () => {
    const owners = [
        {
            text: 'Me',
            id: 'bucklj4',
            color: indigo
        },
        {
            text: 'Declan Wu',
            id: 'wus92',
            color: teal
        },
        {
            text: 'Esam Haris',
            id: 'harise',
            color: orange
        },
        {
            text: 'Restaurant',
            id: 'restaurant',
            color: red
        },
        {
            text: 'Suggestion',
            id: 'suggestion',
            color: green
        }
    ];

    const friendList = [
        {
            name: "Declan Wu",
            macId: "wu92",
            image: "https://www.famousbirthdays.com/faces/bell-drake-image.jpg",
            active: true
        },
        {
            name: "Tobey Maguire",
            macId: "tobey",
            image: "https://vz.cnwimg.com/thumb-1200x/wp-content/uploads/2009/11/GettyImages-461562263-e1579796582726.jpg",
            active: false
        },
        {
            name: "Esam Haris",
            macId: "harise",
            image: "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg",
            active: true
        },
        {
            name: "Ali Howidi",
            macId: "howidia",
            image: "https://pbs.twimg.com/profile_images/1045049020794761231/9EXXIIk6.jpg",
            active: true
        },
        {
            name: "Jake Johnson",
            macId: "jake",
            image: "https://www.earwolf.com/wp-content/uploads/2013/11/7750-300x300.jpg",
            active: false
        },
        {
            name: "Alan Turing",
            macId: "turing",
            image: "https://i.cbc.ca/1.2900956.1421864100!/fileImage/httpImage/image.jpg_gen/derivatives/original_620/alan-turing.jpg",
            active: false
        },
        {
            name: "Alonzo Church",
            macId: "church",
            image: "https://galois.com/wp-content/uploads/2014/06/Church1-480x480.jpeg",
            active: false
        },
        {
            name: "David Parnas",
            macId: "parnas",
            image: "https://memberservices.membee.com/feeds/membershipclientfiles/1498/images/a68e8450-8523-5341-ce09-116cb4fd582b.jpg",
            active: false
        },
    ];

    return (
        <Container className="Profile">
            <Row>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Body className="card-body">
                            <h4>1. Choose your friends</h4>
                            <Card className="mt-3 h-75">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                        <Form.Control variant="text" placeholder="Search friends..." />
                                    </ListGroup.Item>
                                    <div className="scrollableFriendlist">
                                        {friendList.map(friend =>
                                            <ListGroup.Item key={friend.macId} active={friend.active} className="d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 className="mb-0 font-weight-bold"><img src={friend.image} className="friendPhoto rounded-circle mr-2" />{friend.name}</h6>
                                            </ListGroup.Item>
                                        )}
                                    </div>
                                </ListGroup>


                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Paper>
                        {/* TODO: Don't allow dates in the past to be picked */}
                        <Scheduler data={Schedule} min={new Date(2020, 11, 3)} startDate="2020-11-12" endDate="2020-11-13">
                            <ViewState
                                // Today
                                defaultCurrentDate={new Date()}
                                startDate="2020-11-12"
                                endDate="2020-11-13"
                            />
                            <DayView startDayHour={9} />
                            <GroupingState grouping={[
                                { resourceName: "macId" }
                            ]} />
                            <Appointments />
                            <Resources data={[{
                                fieldName: 'macId',
                                instances: owners
                            }]} />
                            <IntegratedGrouping />
                            <GroupingPanel />
                            <Toolbar />
                            <DateNavigator min="2020-08-12" />
                            <TodayButton />

                        </Scheduler>
                    </Paper>
                </Col>
            </Row>
        </Container >

    );
}

export default MeetingScheduler;