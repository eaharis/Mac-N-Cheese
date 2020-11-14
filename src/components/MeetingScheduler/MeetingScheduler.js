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
import initialFriendList from './FriendList';


const MeetingScheduler = () => {
    const [friends, setFriends] = React.useState(initialFriendList);

    const flipFriendActiveStatus = (macId) => {
        setFriends(
            friends.map(friend => friend.macId === macId && ((!friend.active && numOfFriendSelectionsRemaining) || friend.active)
                ? { ...friend, active: !friend.active }
                : friend
            )
        );
    };

    const MAX_SELECTED_FRIENDS = 3;
    const selectedFriends = friends.filter(friend => friend.active);
    const numOfFriendSelectionsRemaining = MAX_SELECTED_FRIENDS - selectedFriends.length;

    const calendarColumns =
        [
            {
                text: 'Me',
                id: 'bucklj4',
                color: indigo
            }
        ].concat(
            selectedFriends.map(friend => (
                {
                    text: friend.name,
                    id: friend.macId,
                    color: red
                }
            ))
        ).concat(
            [
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
            ]
        );

    return (
        <Container fluid>
            <Row>
                <Col md={3} className="mb-3">
                    <Card>
                        <Card.Body className="card-body">
                            <h4>1. Choose your friends</h4>
                            <Card className="mt-3 h-75">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                        <Form.Control variant="text" placeholder="Search friends..." />
                                    </ListGroup.Item>
                                    <div className="scrollableFriendlist">
                                        {friends.map(friend =>
                                            <ListGroup.Item key={friend.macId} active={friend.active} onClick={() => flipFriendActiveStatus(friend.macId)} className="d-flex justify-content-between align-items-center flex-wrap clickable">
                                                <h6 className="mb-0 font-weight-bold"><img src={friend.image} className="friendPhoto rounded-circle mr-2" />{friend.name}</h6>
                                            </ListGroup.Item>
                                        )}
                                    </div>
                                    <p class="text-muted" hidden={!numOfFriendSelectionsRemaining}>Select up to {numOfFriendSelectionsRemaining} more friend{numOfFriendSelectionsRemaining > 1 ? "s" : ""} </p>
                                </ListGroup>


                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={9}>
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
                                instances: calendarColumns
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