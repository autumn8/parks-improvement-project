import "./FullMenu.css";

import Button from '@mui/material/Button';
import { Link as RouterLink } from "react-router-dom";


function FullMenu() {
    return (
        <nav className="header__full-menu">
            <Button component={RouterLink} to="/about">
                About
            </Button>
            <Button component={RouterLink} to="/events">
                Events
            </Button>
            <Button component={RouterLink} to="/projects">
                Projects
            </Button>
            {/* <Link to="/proposals" className="header__full-menu-link">Proposals</Link>
            <Link to="/events" className="header__full-menu-link">Events</Link>
            <Link to="/about" className="header__full-menu-link">About</Link> */}
        </nav>
    )
}

export default FullMenu