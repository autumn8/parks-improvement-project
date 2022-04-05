import "./Projects.css";

import InfoCard from "../../components/framework/InfoCard/InfoCard";

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
                    Saratoga Park is beautiful park sitting between La Lucia and glenashley beach with old forest trees.
                    </p>

                </section>
                <section>
                <InfoCard 
                    headerText="Clean Up" 
                    descText={<>
                    <p>Trash was removed, gum poles painted, solar light installed.</p>
                    <p>More texxt about cleanup etc.</p>
                    </>} 
                    imgSrc="/cleanup.png"
                    align="right"
                >                    
                </InfoCard>
                <InfoCard 
                    headerText="Vegetation" 
                    descText={<><p>Alien plants were removed, verge and lawns trimmed.</p></>} 
                    imgSrc="/communityPlant.png"
                    align="left"
                >                    
                </InfoCard>
                </section>
            </main>
        </div>

    )
}

export default Projects