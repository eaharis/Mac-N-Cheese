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
    const appointments = [
        {
            id: 1,
            title: "COMPSCI 4HC3",
            macId: "bucklj4",
            startDate: new Date(2017, 4, 28, 12, 30),
            endDate: new Date(2017, 4, 28, 14, 30),
            rRule: "FREQ=DAILY"
        },
        {
            id: 2,
            title: "COMPSCI 4O03",
            macId: "declan",
            startDate: new Date(2017, 4, 28, 13, 30),
            endDate: new Date(2017, 4, 28, 15, 30),
        },
        {
            id: 3,
            title: "COMPSCI 4HC3",
            macId: "xxx",
            startDate: new Date(2017, 4, 28, 12, 30),
            endDate: new Date(2017, 4, 28, 14, 30),
        },
        {
            id: 4,
            title: "COMPSCI 4O03",
            macId: "declan",
            startDate: new Date(2017, 4, 28, 13, 30),
            endDate: new Date(2017, 4, 28, 15, 30),
        }
    ];

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
                                        <ListGroup.Item active={true} className="d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg" className="friendPhoto rounded-circle mr-2" />Esam Haris</h6>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg" className="friendPhoto rounded-circle mr-2" />Esam Haris</h6>                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg" className="friendPhoto rounded-circle mr-2" />Esam Haris</h6>                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg" className="friendPhoto rounded-circle mr-2" />Esam Haris</h6>                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg" className="friendPhoto rounded-circle mr-2" />Esam Haris</h6>                                        </ListGroup.Item>
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