import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'

import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <div class="content-wrapper">
        Content</div>
      
    </div>
  )
}

export default App
