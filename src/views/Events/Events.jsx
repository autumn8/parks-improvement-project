import FutureEvents from "../../components/Event/FutureEvents/FutureEvents";
import Hero from "../../components/Hero/Hero";
import "./Events.css";

function Events() {
  return (
    <div className="home">
        
        <main className="main">
            <section className="project__intro">
              <div className="event__header-wrapper">
                <h1 className="app__h1 event__h1">EASTER EGG HUNT</h1>                
              </div>
              <p className="project__intro-info">
                    Saratoga Park is beautiful park sitting between La Lucia and glenashley beach with old forest trees. This is some more info abou this great location, lorem ipsum some more info and then the last bit is here
                </p>
                <div className="project__header-divider"><div className="project__header-stamp"></div></div>
                
                
                <div className="event__img-wrapper">
                    <img src="/easter.jpg" alt="" className="event__img" />
                </div> 
                
                
                

            </section>
            
        </main>
    </div>

)
}

export default Events