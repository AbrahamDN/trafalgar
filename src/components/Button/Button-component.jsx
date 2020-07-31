import React from "react"
import "./Button.scss"

const Button = ({value, buttonClass}) => {
    return(
        <div>
            <input 
            className={`btn btn-${buttonClass}`}
            type="button" 
            value={value}
            />
        </div>
    )
}

export default Button
