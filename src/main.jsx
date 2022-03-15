import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4d9e4c',
    },
    secondary: {
      main: '#3ec2c7',
    },
  },
});

ReactDOM.render(  
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
    </ThemeProvider>
  ,
  document.getElementById('root')
)
