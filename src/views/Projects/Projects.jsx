import "./Projects.css";

import InfoCard from "../../components/framework/InfoCard/InfoCard";

function Projects() {
    return (
        <div className="home">
            <div className="app__hero2-wrapper">
                <img src="/parkCommunity.png" alt="" className="app__hero2" />
            </div>
            <main className="main">
                <section className="project__intro-info">
                    <h1 className="app__h1">SARATOGA PARK</h1>
                    <p className="project__info-intro">
                        Saratoga Park is beautiful park sitting between La Lucia and glenashley beach with old forest trees. This is some more info abou this great location
                    </p>

                </section>
                <section>
                    <div className="block-header__wrapper">
                        <div className="block-header">What's been done?</div>
                    </div>
                    <div className="row">
                        <InfoCard
                            headerText="Trash Cleared"
                            descText={<>
                                <p>Trash was removed, gum poles painted, solar light installed.</p>
                                <p>More texxt about cleanup etc. More Info lorem ipsum and then some more just in case you didn't get the first bit</p>
                            </>}
                            imgSrc="/cleanup.png"
                            align="right"
                        >
                        </InfoCard>
                        <InfoCard
                            headerText="Alien Vegetation Removed"
                            descText={<><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></>}
                            imgSrc="/communityPlant.png"
                            align="left"
                        >
                        </InfoCard>
                    </div>
                    <div className="row">
                        <InfoCard
                            headerText="Clean Up"
                            descText={<>
                                <p>Trash was removed, gum poles painted, solar light installed.</p>
                                <p>More texxt about cleanup etc. Blach blah lorem ipsum lorem lorem ipsum lorum</p>
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
                    </div>

                </section>
            </main>
        </div>

    )
}

export default Projects