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


const MeetingScheduler = () => {
    const [friends, setFriends] = React.useState(initialFriendList);
    const [searchedFriend, setSearchedFriend] = React.useState("");

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
    const friendListHint = numOfFriendSelectionsRemaining
        ? `Select up to ${numOfFriendSelectionsRemaining} more friend${numOfFriendSelectionsRemaining > 1 ? "s" : ""}`
        : "Unselect a friend to select another";

    const friendColours = [blue, orange, purple];

    const friendSearcher = new FuzzySearch(friends, ["name"]);
    const friendsToShow = friendSearcher.search(searchedFriend);

    const calendarColumns =
        [
            {
                text: 'Me',
                id: 'bucklj4',
                color: indigo
            }
        ].concat(
            selectedFriends.map((friend, i) => (
                {
                    text: friend.name,
                    id: friend.macId,
                    color: friendColours[i]
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
                                        <Form.Control variant="text" placeholder="Search friends..." value={searchedFriend} onChange={(e) => setSearchedFriend(e.target.value)} />
                                    </ListGroup.Item>
                                    <div className="scrollableFriendlist">
                                        {friendsToShow.map(friend =>
                                            <ListGroup.Item key={friend.macId} active={friend.active} onClick={() => flipFriendActiveStatus(friend.macId)} className="d-flex justify-content-between align-items-center flex-wrap clickable">
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
                                        <Form.Control variant="text" placeholder="Search restaurants..." />
                                    </ListGroup.Item>
                                    <ListGroup.Item active={true} className="d-flex justify-content-between align-items-center flex-wrap clickable">
                                        <h6 className="mb-0 font-weight-bold"><img src="data:image/jpeg;base64,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AKkWIIuCDyCIFYOKlTzPswqLhlxCa1dKtTbyAdqIdX06ypIFvcqRPUwGT1zTY1TXYrh3FMqSjAs9WwVGcjWqaAuokgEXIuZN8Jg6dJdNNFRedKAKN+TYTutAheR0cStCoKatfzVtdWpecpAV706xJSw3upFyL95lV6WIC0K1RGfy6zlqQCsaaFGpqyhfj2N+5sx9rSVWi0rr5iuvPKCZjjK5+0VwKiUaaJVptUQUizI7M1EXs1tIsdQ/FtecqeVYlx5vr884eq6amOhK1QkopW+klRYC42APuZNcRhkqDS6qwuDZgCLg3Bse4IvOwCSlXmIwbMj+UmJp0tNMNrFRy1QMSSaZYM4sLNpPqBG5tPTwNPFjD0tFNuK16ZawBFVjSqA1DrXUCCEJIXYbaZMLRabWcnVVtzOoxSyiu+Iao1eqn3NFSyrSGsg1WYWZCBbXbb378zGrZVW1VqoDmo+KpW9Temkho30i9gp8sk25vvJhafbTEqvyzLsYVc1WreZ5LLV8qnUUl2K3Id6pFS3qI0D4bgWuFnt5RQxQoALTNjWYFfVSV08tSKuiqS1P1rp0g2Nybb3k0tFptZydbW3M6h2Z0qn3b1ftK1zS/jYdQ5UliTQamqMpC7WLKe+/N8BsoxNQVatRHFcYWl5eg6fvA1c/CradYuhPIGo2NjLAtFomdJnZ1Xj0MU2MDBKi/fVA/pqW8vyqioxql9JViEIVV9JIvuLzGo5bjqeEWk2suBQLsFdh5ISxoikrg3Vh6gDcj819Msy0WmMVliMvxApUzas5vW0UzTqqhDFdKWWqXpHY6WY+kMdhsJZVC+kX2Nhec7T7AREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q==" className="friendPhoto rounded-circle mr-2" />Pinks</h6>
                                    </ListGroup.Item>
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