import FutureEvents from "../../components/Event/FutureEvents/FutureEvents";
import Hero from "../../components/Hero/Hero";
import "./Events.css";

function Events() {
  return (
    <>
    <Hero />
    <main className="main">
        <section className="home__section">
        <div className="row">
            <h2>Events</h2>
        </div>
        <div className="row">
            <div className="col">
              <FutureEvents/>
            </div>
        
        </div>
        </section>    
    </main>
    </>
  )
}

export default Events