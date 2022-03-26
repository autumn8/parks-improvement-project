const events = [
    {
        name: 'Easter Egg Hunt 2',
        description: null,
        image: "./easter.jpg" ,
        date: "Sun April 24 2022 08:00:00 GMT+0200",
        dateTime: 1650780000000
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

function getFutureEvents() {
    const date = new Date().getTime();
    return events.filter(event =>  event.dateTime - date > 0);
}

function getNextEvent() {
    const futureEvents = getFutureEvents();
    futureEvents.sort((a,b)=> a.dateTime - b.dateTime);
    console.log(futureEvents);
    return futureEvents[0];
}

function getPastEvents() {
    return [];
}


export {getEvents, getNextEvent, getFutureEvents};