import { useState } from "react"
import "../App.css"

function Header () {

  const [nightMode, setNightMode] = useState(false)

	return (
		<>
			<header className="header-site">
        <a href="#"><h1><span className="red">UZ</span><span className="green">DEV</span><span className="blue">JOBS</span></h1></a>


        <button onClick={() => setNightMode(!nightMode)}>
					{nightMode ? "SUN" : "MOON"}
				</button>

				{/* <div className={nightMode ? "night-mode": null}>

			  </div> */}

			</header>
		</>
	)
}

export default Header