import "./IconStatement.css";

function IconStatement({children, icon}) {
  return(
    <div className="icon-statement">
        <img src={icon} className="icon-statement__image" />
        <p className="icon-statement__text">{children}</p>
        </div>
  )
}

export default IconStatement