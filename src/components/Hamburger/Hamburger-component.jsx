import React from "react"
import "./Hamburger-styles.scss"
const Hamburger = ({shown,onClick }) => {
        return(
            <div className="close">
                {shown ?
                 <span className="hamburger"  onClick={onClick}>&#9776;</span>:
                 <span className="times"  onClick={onClick}>&times;</span>
                }
               
            </div>
        )
    }

export default Hamburger
