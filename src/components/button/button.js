import React from "react"
import "./button.css"

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
