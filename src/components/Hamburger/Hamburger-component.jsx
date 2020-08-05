import React, { Component } from "react"
import "./Hamburger-styles.scss"
const Hamburger = ({shown,onClick }) => {
        return(
            <div>
                {shown ?
                 <a className="hamburger" href="#" onClick={onClick}>&#9776;</a>:
                 <a className="times" href="#" onClick={onClick}>&times;</a>
                }
               
            </div>
        )
    }

export default Hamburger
