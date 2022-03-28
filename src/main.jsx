import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    info: {
      contrastText: "#fff",
      main: "#5bc0de"
    },
    primary: {
      contrastText: "#fff",
      main: '#7a7a7a',
    },
    success: {
      contrastText: "#fff",
      main: '#aedd94',
    }
    
  }
  
  //   secondary: {
  //     main: '#3ec2c7',
  //   },
  // },
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
