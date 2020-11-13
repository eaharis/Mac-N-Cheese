import * as React from 'react';
import {
    teal, indigo, red, orange
} from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { ViewState, GroupingState, IntegratedGrouping, Resources } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
    DayView,
    GroupingPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import Schedule from "./Schedule";
import "./MeetingScheduler.css"


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
        }
    ];

    return (
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
    );
}

export default MeetingScheduler;