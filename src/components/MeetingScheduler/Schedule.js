import {
    teal, indigo, red, orange, green
} from '@material-ui/core/colors';

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

const Schedule = [
    // Declan's schedule
    // Monday
    {
        id: 1,
        title: "COMPSCI 4HC3 - T03",
        macId: "wus92",
        startDate: new Date("2020-11-09 11:30"),
        endDate: new Date("2020-11-09 12:20"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 2,
        title: "ECON 3BE3 - C01",
        macId: "wus92",
        startDate: new Date("2020-11-09 3:30 PM"),
        endDate: new Date("2020-11-09 4:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 3,
        title: "COMMERCE 4FP3 - C02",
        macId: "wus92",
        startDate: new Date("2020-11-09 7:00 PM"),
        endDate: new Date("2020-11-09 10:00 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Tuesday
    {
        id: 4,
        title: "COMPSCI 4TH3 - C01",
        macId: "wus92",
        startDate: new Date("2020-11-10 9:30 AM"),
        endDate: new Date("2020-11-10 10:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 5,
        title: "COMPSCI 4HC3 - C01",
        macId: "wus92",
        startDate: new Date("2020-11-10 11:30 AM"),
        endDate: new Date("2020-11-10 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Wednesday
    {
        id: 6,
        title: "COMPSCI 4TH3 - T01",
        macId: "wus92",
        startDate: new Date("2020-11-11 9:30 AM"),
        endDate: new Date("2020-11-11 10:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 7,
        title: "COMPSCI 4ZP6A - C01",
        macId: "wus92",
        startDate: new Date("2020-11-11 2:30 PM"),
        endDate: new Date("2020-11-11 4:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Thursday
    {
        id: 8,
        title: "COMPSCI 4HC3 - C01",
        macId: "wus92",
        startDate: new Date("2020-11-12 11:30 AM"),
        endDate: new Date("2020-11-12 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 9,
        title: "ECON 3BE3 - C01",
        macId: "wus92",
        startDate: new Date("2020-11-12 3:30 PM"),
        endDate: new Date("2020-11-12 5:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Friday
    {
        id: 10,
        title: "COMPSCI 4TH3 - C01",
        macId: "wus92",
        startDate: new Date("2020-11-13 9:30 AM"),
        endDate: new Date("2020-11-13 11:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 11,
        title: "COMPSCI 4HC3 - C01",
        macId: "wus92",
        startDate: new Date("2020-11-13 11:30 AM"),
        endDate: new Date("2020-11-13 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 12,
        title: "COMPSCI 4ZP6A - C01",
        macId: "wus92",
        startDate: new Date("2020-11-13 3:30 PM"),
        endDate: new Date("2020-11-13 4:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // -----------------------------------------------
    // Esam's schedule
    // Monday
    {
        id: 13,
        title: "COMPSCI 4HC3 - T03",
        macId: "harise",
        startDate: new Date("2020-11-09 11:30"),
        endDate: new Date("2020-11-09 12:20"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 14,
        title: "COMPSCI 4O03 - T04",
        macId: "harise",
        startDate: new Date("2020-11-09 1:30 PM"),
        endDate: new Date("2020-11-09 2:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Tuesday
    {
        id: 15,
        title: "COMPSCI 4TH3 - C01",
        macId: "harise",
        startDate: new Date("2020-11-10 9:30 AM"),
        endDate: new Date("2020-11-10 10:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 16,
        title: "COMPSCI 4HC3 - C01",
        macId: "harise",
        startDate: new Date("2020-11-10 11:30 AM"),
        endDate: new Date("2020-11-10 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 17,
        title: "COMPSCI 4O03 - C01",
        macId: "harise",
        startDate: new Date("2020-11-10 12:30 PM"),
        endDate: new Date("2020-11-10 1:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 18,
        title: "COMPSCI 3EA3 - C01",
        macId: "harise",
        startDate: new Date("2020-11-10 3:30 PM"),
        endDate: new Date("2020-11-10 5:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Wednesday
    {
        id: 19,
        title: "COMPSCI 4TH3 - T01",
        macId: "harise",
        startDate: new Date("2020-11-11 9:30 AM"),
        endDate: new Date("2020-11-11 10:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 20,
        title: "COMPSCI 4O03 - C01",
        macId: "harise",
        startDate: new Date("2020-11-11 12:30 PM"),
        endDate: new Date("2020-11-11 1:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 21,
        title: "COMPSCI 4ZP6A - C01",
        macId: "harise",
        startDate: new Date("2020-11-11 2:30 PM"),
        endDate: new Date("2020-11-11 4:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Thursday
    {
        id: 22,
        title: "COMPSCI 4HC3 - C01",
        macId: "harise",
        startDate: new Date("2020-11-12 11:30 AM"),
        endDate: new Date("2020-11-12 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Friday
    {
        id: 23,
        title: "COMPSCI 4TH3 - C01",
        macId: "harise",
        startDate: new Date("2020-11-13 9:30 AM"),
        endDate: new Date("2020-11-13 11:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 24,
        title: "COMPSCI 4HC3 - C01",
        macId: "harise",
        startDate: new Date("2020-11-13 11:30 AM"),
        endDate: new Date("2020-11-13 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 25,
        title: "COMPSCI 4O03 - C01",
        macId: "harise",
        startDate: new Date("2020-11-13 12:30 PM"),
        endDate: new Date("2020-11-13 1:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 26,
        title: "COMPSCI 4ZP6A - C01",
        macId: "harise",
        startDate: new Date("2020-11-13 3:30 PM"),
        endDate: new Date("2020-11-13 4:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Jack (me)'s schedule
    // Tuesday
    {
        id: 27,
        title: "COMPSCI 4TH3 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-10 9:30 AM"),
        endDate: new Date("2020-11-10 10:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 28,
        title: "COMPSCI 4HC3 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-10 11:30 AM"),
        endDate: new Date("2020-11-10 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 29,
        title: "COMPSCI 4O03 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-10 12:30 PM"),
        endDate: new Date("2020-11-10 1:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 30,
        title: "FRENCH 2G03 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-10 2:30 PM"),
        endDate: new Date("2020-11-10 3:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 31,
        title: "COMPSCI 4O03 - T01",
        macId: "bucklj4",
        startDate: new Date("2020-11-10 4:30 PM"),
        endDate: new Date("2020-11-10 5:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Wednesday
    {
        id: 32,
        title: "COMPSCI 4TH3 - T01",
        macId: "bucklj4",
        startDate: new Date("2020-11-11 9:30 AM"),
        endDate: new Date("2020-11-11 10:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 33,
        title: "COMPSCI 4O03 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-11 12:30 PM"),
        endDate: new Date("2020-11-11 1:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 34,
        title: "COMPSCI 4HC3 - T01",
        macId: "bucklj4",
        startDate: new Date("2020-11-11 1:30 PM"),
        endDate: new Date("2020-11-11 2:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 35,
        title: "COMPSCI 4ZP6A - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-11 2:30 PM"),
        endDate: new Date("2020-11-11 4:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Thursday
    {
        id: 36,
        title: "COMPSCI 4HC3 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-12 11:30 AM"),
        endDate: new Date("2020-11-12 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 37,
        title: "FRENCH 2G03 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-12 2:30 PM"),
        endDate: new Date("2020-11-12 4:20 PM"),
        rRule: "FREQ=WEEKLY"
    },

    // Friday
    {
        id: 38,
        title: "COMPSCI 4TH3 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-13 9:30 AM"),
        endDate: new Date("2020-11-13 11:20 AM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 39,
        title: "COMPSCI 4HC3 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-13 11:30 AM"),
        endDate: new Date("2020-11-13 12:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 40,
        title: "COMPSCI 4O03 - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-13 12:30 PM"),
        endDate: new Date("2020-11-13 1:20 PM"),
        rRule: "FREQ=WEEKLY"
    },
    {
        id: 41,
        title: "COMPSCI 4ZP6A - C01",
        macId: "bucklj4",
        startDate: new Date("2020-11-13 3:30 PM"),
        endDate: new Date("2020-11-13 4:20 PM"),
        rRule: "FREQ=WEEKLY"
    },


    // Restaurant
    {
        id: 42,
        title: "Restaurant",
        macId: "restaurant",
        startDate: new Date("2020-11-12 3:30 PM"),
        endDate: new Date("2020-11-12 4:20 PM"),
        rRule: "FREQ=DAILY"
    },

    // Suggestion
    {
        id: 43,
        title: "Suggestion",
        macId: "suggestion",
        startDate: new Date("2020-11-12 4:30 PM"),
        endDate: new Date("2020-11-12 5:20 PM"),
        rRule: "FREQ=DAILY"
    },
];

export { owners, Schedule };