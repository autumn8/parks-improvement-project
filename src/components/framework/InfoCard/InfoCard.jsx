import "./InfoCard.css";

function InfoCard({headerText, descText, imgSrc}) {
    return (
        <div className="col info-card__col">            
            <h1 className="info-card__h1">{headerText}</h1>
            <div className='info-card__desc'>{descText}</div>            
            <div className="info-card__img-col">
                <img src={imgSrc} alt="" className="info-card__img"/>
            </div>
        </div>
    )
}

export default InfoCard