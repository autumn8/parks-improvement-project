import { Link } from "react-router-dom";
import FullMenu from '../Menu/FullMenu/FullMenu';
import UserMenu from '../UserMenu/UserMenu';
import Typography from '@mui/material/Typography';
import './Header.css';


function Header() {
  return (
    <div className="header__wrapper">
      <header className="header">
        <Link to="/" className="header__full-menu-link">
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            PARKS IMPROVEMENT PROJECT
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            PIP
          </Typography>
        </Link>

        <div className="header__spacer"></div>
        <FullMenu />
        <UserMenu />
      </header>

    </div>
  )
}

export default Header