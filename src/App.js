import {useState} from 'react';
import Header from "./Components/header"
import Main from './Components/main'
import Footer from './Components/footer'
import "./App.css"

function App() {

  const [nightMode, setNightMode] = useState(false)


  return (

    <div className={nightMode ? "night-mode": null}>
    <button className="btn" onClick={() => setNightMode(!nightMode)}>
    {nightMode ? "SUN" : "MOON"}
    </button>
    <Header/>
    <Main/>
    <Footer/>
    </div>
    )
  }

  export default App
