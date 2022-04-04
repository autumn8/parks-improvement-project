import "./Projects.css";

function Projects() {
    return (
        <div className="home">
            <div className="app__hero2-wrapper">
                <img src="/parkCommunity.png" alt="" className="app__hero2" />
            </div>
            <main className="main">
                <section className="app__info">
                    <h1 className="app__h1">Saratoga Park</h1>
                    <p className="app__info-intro">
                    A community initiative aimed at reinvigorating public spaces, encouraging active mobility & fostering community.
                    A community initiative aimed at reinvigorating public spaces, encouraging active mobility & fostering community.
                    A community initiative aimed at reinvigorating public spaces, encouraging active mobility & fostering community.
                    A community initiative aimed at reinvigorating public spaces, encouraging active mobility & fostering community.
                    </p>

                </section>
                <section>
                    <div className="row info__box">
                        <div className="col ">
                        <h1>Clean up</h1>
                        <p>Trash was removed, grass cut, alien species removed, indigenous plants planted to encourage bio-diversity,  paiting done, toilets serviced.                        
                        </p>
                        </div>
                        <div className="col">
                            <img src="/cleanup.png" alt="" className="src" />
                        </div>
                    </div>
                    

                </section>
            </main>
        </div>

    )
}

export default Projects