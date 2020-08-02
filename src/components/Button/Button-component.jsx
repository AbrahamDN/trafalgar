import React from "react"
import "./Button-styles.scss"

const Button = ({value, buttonClass}) => {
    return(
        <div>
            <button className={`${buttonClass}`}>{value}</button> 
        </div>
    )
}

export default Button
