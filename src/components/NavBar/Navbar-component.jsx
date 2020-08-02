import React from "react"
import "./Navbar-styles.scss"
const Navbar= () => {
    return(
        <div className="header">
            <img src="/assets/png/logo.png"/>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Find a doctor</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Apps</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Testimonials</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
