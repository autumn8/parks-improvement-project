import './Header.css';

import { Link } from "react-router-dom";
import FullMenu from '../Menu/FullMenu/FullMenu';
import SpaIcon from '@mui/icons-material/Spa';
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";



function Header() {

  let header;
  // const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:760px)');
  const navigate = useNavigate();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onClickNav = (route, event) => {    
    navigate(`/${route.toLowerCase()}`);
    setState({ ...state, ['left']: false });
  }

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
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
        }}
      >

        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={event => onClickNav("", event)} >
                  <ListItemIcon style={{ minWidth: '45px' }}>
                    <SpaIcon></SpaIcon>
                  </ListItemIcon>
                  <h1 className="drawer-list__title" color="primary">PARKS IMPROVEMENT PROJECT</h1>
                </ListItemButton>
              </ListItem>
              <Divider />
              {['ABOUT', 'PROJECTS', 'EVENTS'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={event => onClickNav(text, event)}>
                    <ListItemIcon style={{ minWidth: '45px' }}>
                      <MailIcon />
                    </ListItemIcon>
                    {text}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>

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
    <>
      <header className="header">
        {header}
      </header>
    </>

  )
}

export default Header