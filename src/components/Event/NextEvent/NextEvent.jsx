import "./NextEvent.css";
import {
  Link
} from "react-router-dom";

import {getNextEvent} from "../../../services/parkEvents";

function NextEvent() {
  const nextEvent = getNextEvent();
  
  return (
    <div>
     
      <h2>Next Event</h2>  
      
      <div className="row">   
      <div className="col">
        <Link to="/events" className="header__full-menu-link button__hover">                  
            <img src={nextEvent.image} className="next-event__primary-image" />                 
        </Link>
        </div>
      {/* <div className="col">
        <p>Join us for an easter egg hunt at Saratoga park on Sunday the 17th of April</p>
      </div> */}
      
      </div>
    </div>
    
  )
}

export default NextEvent;