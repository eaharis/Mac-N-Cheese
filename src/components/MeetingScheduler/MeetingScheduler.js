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
} from '@devexpress/dx-react-scheduler-material-ui';
import Schedule from "./Schedule";
import "./MeetingScheduler.css"
import { Container, Card, Row, Col, ListGroup, DropdownButton, Form } from 'react-bootstrap';
import initialFriendList from './FriendList';
import FuzzySearch from 'fuzzy-search';
import initialRestaurantList from './Restaurants';


const MeetingScheduler = () => {
    const [friends, setFriends] = React.useState(initialFriendList);
    const [restaurants, setRestaurants] = React.useState(initialRestaurantList);
    const [searchedFriend, setSearchedFriend] = React.useState("");
    const [searchedRestaurant, setSearchedRestaurant] = React.useState("");

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
            [
                {
                    text: 'Restaurant',
                    id: 'Restaurant',
                    color: red
                },
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
                        <Card.Body className="card-body">
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
                                { resourceName: "name" }
                            ]} />
                            <Appointments />
                            <Resources data={[{
                                fieldName: 'name',
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