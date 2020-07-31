import React from "react"
import "./Header.scss"
const Header= () => {
    return(
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={"/logo192.png"}/>
                <p className="logo-title">Trafalgar</p>
            </div>

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

export default Header
