const events = [
    {
        name: 'Easter Egg Hunt 2',
        description: null,
        image: "./easter.jpg" ,
        date: "Sun April 24 2022 08:00:00 GMT+0200",
        dateTime: 1650780000000
    },
    {
        name: 'Easter Egg Hunt',
        description: null,
        image: "./easter.jpg" ,
        date: "Sun Apr 17 2022 08:00:00 GMT+0200",
        dateTime: 1650175200000
    },
    {
        name: 'Old Easter Egg Hunt',
        description: null,
        image: "./easter.jpg" ,
        date: "Sat March 12 2022 08:00:00 GMT+0200",
        dateTime: 1647064800000
    }
];



function getEvents() {
    return events;
}

function getUpcomingEvents() {
    const date = new Date().getTime();
    return events.filter(event =>  event.dateTime - date > 0);
}

function getNextEvent() {
    const upcomingEvents = getUpcomingEvents();
    upcomingEvents.sort((a,b)=> a.dateTime - b.dateTime);
    console.log(upcomingEvents);
    return upcomingEvents[0];
}

function getPastEvents() {
    return [];
}


export {getEvents, getNextEvent, getUpcomingEvents};