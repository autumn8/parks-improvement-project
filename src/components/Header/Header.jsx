import { Link } from "react-router-dom";
import FullMenu from '../Menu/FullMenu/FullMenu';
import UserMenu from '../UserMenu/UserMenu';
import SpaIcon from '@mui/icons-material/Spa';
import './Header.css';


function Header() {
  return (
    <div className="header__wrapper">
      <header className="header">
        <Link to="/" className="header__full-menu-link">
          <div className="header__title-wrapper">
            <SpaIcon></SpaIcon>          
            <h1 className="header__title">PARKS IMPROVEMENT PROJECT</h1>
          </div>          
        </Link>

        <div className="header__spacer"></div>
        <FullMenu />
        <UserMenu />
      </header>

    </div>
  )
}

export default Header