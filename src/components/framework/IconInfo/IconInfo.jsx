import "./IconInfo.css";

import DoneIcon from '@mui/icons-material/Done';

function IconInfo({children}) {
    return (
        <div className="row info-icon__row">
            <div className="col">
                <DoneIcon sx={{fontSize: '38px'}} className="circle-border"></DoneIcon>
            </div>
            <div className="col">
                {children}
            </div>
        </div>
    )
}

export default IconInfo