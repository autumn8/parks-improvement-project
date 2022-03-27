import "./Home.css";
import Hero from "../components/Hero/Hero";
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button'; 
import { Link as RouterLink } from "react-router-dom";


function Home() {
    return (
        <div className="home">
            <Hero />            
            <main className="main">
                <section className="home__section">
                <div className="flex-center__vertical">
                    <h2 className="home-about-us__title">What are we?</h2>
                    <p className="home-about-us__text">A community initiative aimed at reinvigorating public spaces, encouraging active mobility & fostering community.</p>                    
                    <Button component={RouterLink} to="/about" variant="contained" color="info" size="large">
                        Read more
                    </Button>
                    <div className="home-runner"></div>
                    <h2 className="home-about-us__title">How can I get involved?</h2>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <DoneIcon fontSize="large" className="circle-border"></DoneIcon>  
                                </div>
                                <div className="col">
                                <h3 className="get-involved__title">Give a hand</h3>
                                <p>Come break a sweat with us or maybe you have some other service to offer. </p>
                                </div>
                                
                                </div>        
                            
                        </div>
                        <div className="col">Donate</div>
                        <div className="col">Use your public spaces</div>
                    </div>
                </div>
                
                   
                </section>
                
               
            </main>
        </div>
    )
}

export default Home