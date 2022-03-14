import "./UpcomingEvents.css";
import {
  Link
} from "react-router-dom";



function UpcomingEvents() {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <Link to="/events" className="header__full-menu-link button__hover">
        
          <img src="./easter.jpg" className="upcoming-events__primary-image" />
        
        
      </Link>
      
    </div>
    
  )
}

export default UpcomingEvents