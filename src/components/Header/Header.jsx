import './Header.css';

import { Link } from "react-router-dom";
import FullMenu from '../Menu/FullMenu/FullMenu';
import SpaIcon from '@mui/icons-material/Spa';
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import {IconButton, Drawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



function Header() {
  let header;  
  const isMobile = useMediaQuery('(max-width:600px)');
  const [state, setState] = useState({left:false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });     
  };

  if (isMobile) {
    header = <>
    <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
    <Drawer
      anchor="left"
      open={state.left}
      onClose={toggleDrawer('left', false)}
    >
      <Link to="/about" className="header__full-menu-link">
        <div className="header__title-wrapper">
          <SpaIcon color="primary"></SpaIcon>
          <h4 className="header__title">About</h4>
        </div>
      </Link>
    </Drawer>
    <div className="header__spacer"></div>
    <Link to="/" className="header__full-menu-link">
        <div className="header__title-wrapper">
          <SpaIcon color="primary"></SpaIcon>
          <h1 className="header__title">PIP</h1>
        </div>
      </Link>      
    </>;
  } else {
    header = <>
      <Link to="/" className="header__full-menu-link">
        <div className="header__title-wrapper">
          <SpaIcon color="primary"></SpaIcon>
          <h1 className="header__title">PARKS IMPROVEMENT PROJECT</h1>
        </div>
      </Link>
      <div className="header__spacer"></div>
      <FullMenu />
    </>;
  }
  return (
    <div className="header__wrapper">
      <header className="header">
      {header}
      </header>
    </div>

  )
}

export default Header