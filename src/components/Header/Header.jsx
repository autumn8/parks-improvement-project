import { Link } from "react-router-dom";
import FullMenu from '../Menu/FullMenu/FullMenu';
import Login from '../Login/Login';
import './Header.css';


function Header() {
  return (
    <div className="header__wrapper">
      <header className="header">  
      <Link to="/" className="header__full-menu-link">
        <h1 className="header__title">PARKS IMPROVEMENT PROJECT</h1>
      </Link>     
      
      <div className="header__spacer"></div> 
      <FullMenu />
      <Login />
      </header>

    </div>
  )
}

export default Header