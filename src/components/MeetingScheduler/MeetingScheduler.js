import * as React from 'react';
import {
    teal, indigo, red, orange, green, blue, purple
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
    AppointmentTooltip,
    AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import Schedule from "./Schedule";
import "./MeetingScheduler.css"
import { Container, Card, Row, Col, ListGroup, DropdownButton, Form } from 'react-bootstrap';
import initialFriendList from './FriendList';
import FuzzySearch from 'fuzzy-search';
import initialRestaurantList from './Restaurants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faUserFriends, faHourglassHalf, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import dateFormat from "dateformat";
import Swal from 'sweetalert2';


const MeetingScheduler = () => {
    // Today
    const [date, setDate] = React.useState(new Date());

    const [friends, setFriends] = React.useState(initialFriendList);
    const [restaurants, setRestaurants] = React.useState(initialRestaurantList);
    const [searchedFriend, setSearchedFriend] = React.useState("");
    const [searchedRestaurant, setSearchedRestaurant] = React.useState("");
    const [meetingDurationMinutes, setMeetingDurationMinutes] = React.useState(30);

    const MAX_SELECTED_RESTAURANTS = 1;
    const MAX_SELECTED_FRIENDS = 3;
    const selectedFriends = friends.filter(friend => friend.active);
    const selectedRestaurants = restaurants.filter(restaurant => restaurant.active);

    const numOfFriendSelectionsRemaining = MAX_SELECTED_FRIENDS - selectedFriends.length;
    const numOfRestaurantSelectionsRemaining = MAX_SELECTED_RESTAURANTS - selectedRestaurants.length;

    const friendListHint = numOfFriendSelectionsRemaining
        ? `Select up to ${numOfFriendSelectionsRemaining} more friend${numOfFriendSelectionsRemaining > 1 ? "s" : ""}`
        : "Unselect a friend to select another";

    const friendColours = [blue, orange, purple];

    const friendSearcher = new FuzzySearch(friends, ["name"]);
    const friendsToShow = friendSearcher.search(searchedFriend);

    const restaurantSearcher = new FuzzySearch(restaurants, ["name"]);
    const restaurantsToShow = restaurantSearcher.search(searchedRestaurant);

    // Select up to a max
    const flipFriendActiveStatus = (name) => {
        setFriends(
            friends.map(friend => friend.name === name && ((!friend.active && numOfFriendSelectionsRemaining) || friend.active)
                ? { ...friend, active: !friend.active }
                : friend
            )
        );
    };

    // Select only 1
    const flipRestaurantActiveStatus = (name) => {
        setRestaurants(
            restaurants.map(restaurant => restaurant.name === name
                ? { ...restaurant, active: !restaurant.active }
                : { ...restaurant, active: false }
            )
        );
    };

    const getProposedTime = (today, meetingDurationMinutes) => {
        const startingTime = new Date(today);

        // Sunday
        if (today.getDay() === 0) startingTime.setHours(10, 30, 0);
        // Monday
        else if (today.getDay() === 1) startingTime.setHours(10, 0, 0);
        // Tuesday
        else if (today.getDay() === 2) startingTime.setHours(10, 30, 0);
        // Wednesday
        else if (today.getDay() === 3) startingTime.setHours(10, 30, 0);
        // Thursday
        else if (today.getDay() === 4) startingTime.setHours(10, 30, 0);
        // Friday
        else if (today.getDay() === 5) startingTime.setHours(14, 30, 0);
        // Saturday
        else startingTime.setHours(10, 30, 0);

        const endingTime = new Date(startingTime);
        endingTime.setMinutes(startingTime.getMinutes() + meetingDurationMinutes);

        return [startingTime, endingTime];
    }

    const proposedTime = {
        id: 43,
        title: "Suggestion",
        name: "Suggestion",
        startDate: getProposedTime(date, meetingDurationMinutes)[0],
        endDate: getProposedTime(date, meetingDurationMinutes)[1]
    };

    const calendarColumns =
        [
            {
                text: 'Me',
                id: 'Jack Buckley',
                color: indigo
            }
        ].concat(
            selectedFriends.map((friend, i) => (
                {
                    text: friend.name,
                    id: friend.name,
                    color: friendColours[i]
                }
            ))
        ).concat(
            selectedRestaurants.map((restaurant, i) => (
                {
                    text: restaurant.name,
                    id: restaurant.name,
                    color: red
                }
            ))
        ).concat(
            [
                {
                    text: 'Suggestion',
                    id: 'Suggestion',
                    color: green
                }
            ]
        );

    return (
        <Container fluid>
            <Row>
                <Col md={3} className="mb-3">
                    <Card>
                        <Card.Body>
                            <h4>1. Choose your friends</h4>
                            <Card className="mt-3 h-75">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                        <Form.Control variant="text" placeholder="Search friends..." value={searchedFriend} onChange={(e) => setSearchedFriend(e.target.value)} />
                                    </ListGroup.Item>
                                    <div className="scrollableFriendlist">
                                        {friendsToShow.map(friend =>
                                            <ListGroup.Item key={friend.name} active={friend.active} onClick={() => flipFriendActiveStatus(friend.name)} className="d-flex justify-content-between align-items-center flex-wrap clickable">
                                                <h6 className="mb-0 font-weight-bold"><img src={friend.image} className="friendPhoto rounded-circle mr-2" />{friend.name}</h6>
                                            </ListGroup.Item>
                                        )}
                                    </div>
                                    <p className="text-muted">{friendListHint}</p>
                                </ListGroup>
                            </Card>
                            <hr />
                            <h4>2. Select a restaurant</h4>
                            <Card className="mt-3 h-75">
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                        <Form.Control variant="text" placeholder="Search restaurants..." value={searchedRestaurant} onChange={(e) => setSearchedRestaurant(e.target.value)} />
                                    </ListGroup.Item>
                                    <div className="scrollableRestaurantlist">
                                        {restaurantsToShow.map(restaurant =>
                                            <ListGroup.Item key={restaurant.name} active={restaurant.active} onClick={() => flipRestaurantActiveStatus(restaurant.name)} className="d-flex justify-content-between align-items-center flex-wrap clickable">
                                                <h6 className="mb-0 font-weight-bold"><img src={restaurant.image} className="friendPhoto rounded-circle mr-2" />{restaurant.name}</h6>
                                            </ListGroup.Item>
                                        )}
                                    </div>

                                </ListGroup>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={9} hidden={!(selectedRestaurants.length && selectedRestaurants.length)}>
                    <Card>
                        <Card.Body>
                            <h4>3. Select a time</h4>
                            <Form.Row>
                                <Col md={6}>
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faUserFriends} />  Availability</Form.Label>
                                    <Form.Control as="select">
                                        <option>All people available</option>
                                        <option>At least 2 people available</option>
                                    </Form.Control>
                                </Col>
                                <Col md={6}>
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faHourglassHalf} /> Eating Duration</Form.Label>
                                    <Form.Control as="select" onChange={e => setMeetingDurationMinutes(parseInt(e.target.value))}>
                                        <option value={30}>30 minutes</option>
                                        <option value={60}>1 hour</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                            <hr />
                            <Paper>
                                {/* TODO: Don't allow dates in the past to be picked */}
                                <Scheduler data={Schedule.concat([proposedTime])} min={new Date(2020, 11, 3)}>
                                    <ViewState
                                        // Today
                                        currentDate={date}
                                        onCurrentDateChange={(d) => setDate(d)}
                                    />
                                    <DayView startDayHour={8} endDayHour={18} />
                                    <GroupingState grouping={[
                                        { resourceName: "name" }
                                    ]} />
                                    <Appointments />
                                    <AppointmentTooltip />
                                    <AppointmentForm />
                                    <Resources data={[{
                                        fieldName: 'name',
                                        instances: calendarColumns
                                    }]} />
                                    <IntegratedGrouping />
                                    <GroupingPanel />
                                    <Toolbar />
                                    <DateNavigator />
                                    <TodayButton />

                                </Scheduler>
                            </Paper>
                            <Form.Row>
                                <Col md={12}>
                                    <h5>Suggested time: <b>{dateFormat(getProposedTime(date, meetingDurationMinutes)[0], "dddd, mmmm dS 'at' h:MM TT")}</b></h5>
                                    <h6>All friends available. Restaurant usually not busy.</h6>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col md={12}>
                                    <button class="form-control btn-warning font-weight-bold" onClick={() => Swal.fire({
                                        icon: 'success',
                                        title: 'Invitation sent',
                                        showConfirmButton: false,
                                        timer: 1500,
                                        timerProgressBar: true
                                    })}><FontAwesomeIcon icon={faPaperPlane} /> Send invitation</button>
                                </Col>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >

    );
}

export default MeetingScheduler;