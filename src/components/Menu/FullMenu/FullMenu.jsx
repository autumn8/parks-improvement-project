import "./FullMenu.css";

import {
    Link
} from "react-router-dom";

function FullMenu() {
    return (
        <nav className="header__full-menu">
            <Link to="/proposals" className="header__full-menu-link">Proposals</Link>
            <Link to="/events" className="header__full-menu-link">Events</Link>
            <Link to="/about" className="header__full-menu-link">About</Link>
        </nav>
    )
}

export default FullMenu