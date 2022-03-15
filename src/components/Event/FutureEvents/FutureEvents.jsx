import "./FutureEvents.css";
import {
  Link
} from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


import {getFutureEvents} from "../../../services/parkEvents";

function FutureEvents() {
  const futureEvents = getFutureEvents();
  
  return (
    <div>
      <h3>Future Events</h3>
      <div className="future-events__wrapper">
      {futureEvents.map((event,i) => (        
        <Card key={i}>
          <CardMedia
          sx={{ maxWidth: 200 }}
          component="img"          
          image={event.image}
          alt={event.name}
        />         
        </Card>
      ))}  
        </div> 
         
      {/* <Link to="/events" className="header__full-menu-link button__hover">                  
          <img src={nextEvent.image} className="upcoming-events__primary-image" />                 
      </Link> */}      
    </div>
    
  )
}

export default FutureEvents