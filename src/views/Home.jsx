import "./Home.css";
import Hero from "../components/Hero/Hero";
import IconInfo from "../components/framework/IconInfo/IconInfo";
import Button from '@mui/material/Button';
import { Link as RouterLink } from "react-router-dom";



function Home() {
    return (
        <div className="home">
            <div className="app__hero2-wrapper">
                <img src="/parkCommunity.png" alt="" className="app__hero2" />
            </div>
            <main className="main">
                <section className="home__section">
                    <div className="flex-center__vertical">
                        <div className="home-what-is-it">
                            <h2 className="app__h2">What is it?</h2>
                            <p className="home-about-us__text">A community initiative aimed at reinvigorating public spaces, encouraging active mobility & fostering community.</p>
                            <Button component={RouterLink} to="/about" variant="contained" color="info" sx={{ width: 150 }}>
                                Read more
                            </Button>
                        </div>

                        <div><img src="/parkRunner.png" alt="" className="home-runner" /></div>
                        <h2 className="app__h2 get-involved__header">How can I get involved?</h2>
                        <div className="row get-involved">
                            <div className="col get-inolved__cols">
                                <IconInfo>
                                    <h3 className="info-icon__title">Give a hand</h3>
                                    <p className="info-icon__desc">Come join us in person or maybe you have some other services or ideas you'd like to offer. </p>
                                    <Button component={RouterLink} to="/about" variant="contained" color="info" sx={{ width: 150 }}>
                                        Read more
                                    </Button>
                                </IconInfo>
                            </div>
                            <div className="col get-inolved__cols">
                                <IconInfo>
                                    <h3 className="info-icon__title">Donate</h3>
                                    <p className="info-icon__desc">We're self funded, so donations will help to cover the cost of future improvements & events.  </p>
                                    <Button component={RouterLink} to="/about" variant="contained" color="success" sx={{ width: 150 }}>
                                        Donate
                                    </Button>
                                </IconInfo>
                            </div>
                            <div className="col get-inolved__cols">
                                <IconInfo>
                                    <h3 className="info-icon__title">Use Your Public Spaces</h3>
                                    <p className="info-icon__desc">We're trying to foster community and promote active mobility for healthier, happier and safer neighbourhoods.  </p>
                                </IconInfo>
                            </div>
                        </div>

                        <div><img src="/parkRider.png" alt="" className="home-rider" /></div>

                    </div>


                </section>
            </main>
            <div className="home-grass-divider"></div>
        </div>
    )
}

export default Home