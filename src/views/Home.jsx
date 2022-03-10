import "./Home.css";
import Hero from "../components/Hero/Hero";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import IconStatement from "../components/IconStatement/IconStatement";

function Home() {
    return (
        <div className="home">
            <Hero />
            <main className="home__main">
                <section className="home__section">
                <div className="row">
                    <h2>What are we about?</h2>
                </div>
                <div className="row home__row">
                    <div className="home__icon-statement-wrapper">
                    <IconStatement icon="./icon/sprout.svg" className="home__statement">                    
                    A community initiative aimed at reinvigorating green spaces.
                    </IconStatement>
                        </div>
                </div>
                <div className="row home__row"> 
                <IconStatement icon="./icon/walk.svg" className="home__statement">
                   Encouraging active mobility in the neighbourhood.
                    </IconStatement>    
                </div>
                </section>
                
                
                
                <UpcomingEvents/>
            </main>
        </div>
    )
}

export default Home