import React, { useState } from "react"
import logo from "./logo.png"
import "./header.css"
const Header = () => {
    const [isShown, setIsShown] = useState(true)

    const toggleShown = () => {
        setIsShown(!isShown)
    }

    return(
        <div className="header">
            <div className="logo">
            <button aria-label="Close navigation" className="open-nav" onClick={toggleShown}>&#9776;</button>
                <div className="logo-main"> <img src={logo} alt = "logo" className="logo-img"/></div>
                <h4 className="logo-title">Trafalgar</h4>
            </div>

            <nav className={isShown ? "" : "navigation-open"}>
                
            {isShown ? 
                    null:
                    <button aria-label="Close navigation" className="close-nav" onClick={toggleShown}>&times;</button>
                }
                <ul className={isShown ? "nav-list-open": "nav-list"}>
                    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Find a doctor</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Apps</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Testimonials</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">About us</a></li>
                </ul>
            </nav>
           

        </div>
    )
}

export default Header
