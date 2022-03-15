import "./UpcomingEvents.css";
import {
  Link
} from "react-router-dom";

import {getNextEvent} from "../../../services/parkEvents";

function UpcomingEvents() {
  const nextEvent = getNextEvent();
  
  return (
    <div>
      <h2>Upcoming Events</h2>      
      <Link to="/events" className="header__full-menu-link button__hover">                  
          <img src={nextEvent.image} className="upcoming-events__primary-image" />                 
      </Link>
      <p>Join us for an easter egg hunt at Saratoga park on Sunday the 17th of April</p>
    </div>
    
  )
}

export default UpcomingEvents