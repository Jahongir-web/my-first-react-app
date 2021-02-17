import React from 'react'
import ReactDOM from 'react-dom'
import "../App.css"


function Footer () {

  return (
    <footer>
       <a href="#"><h1><span className="red">UZ</span><span className="green">DEV</span><span className="blue">JOBS</span></h1></a>

       <ul>
         <li><a className="social-link" href="#">facebook</a></li>
         <li><a className="social-link" href="#">instagram</a></li>
         <li><a className="social-link" href="#">telegram</a></li>
       </ul>
    </footer>
  )

}


export default Footer