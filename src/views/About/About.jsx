import "./About.css"

import Hero from "../../components/Hero/Hero";

function About() {
  return (
    <>
    <Hero />
    <main className="main">
        <section className="home__section">
        <div className="row">
            <h2>About</h2>
        </div>
        <div className="row">
            <div className="col">
            <p>The Parks Improvement Project was started by Sean & Hilton.</p>
        <p>The aim was to ....</p>
                </div>
        
        </div>
        </section>    
    </main>
    </>
    
    
  )
}

export default About