import "./InfoCard.css";

function InfoCard({headerText, descText, imgSrc, align}) {
    return (
        <div className="row info-card">
            <div className="col info-card__info-col">
                <h1 className="info-card__h1">{headerText}</h1>
                <p>{descText}</p>
            </div>
            <div className="col info-card__img-col">
                <img src={imgSrc} alt="" className="info-card__img"/>
            </div>
        </div>
    )
}

export default InfoCard