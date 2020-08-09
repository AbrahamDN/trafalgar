import React from "react"
import "./Button-styles.scss"

const Button = ({value, primary}) => {
    return(
        <div>
            <button className={primary ? "cta" : null}>{value}</button> 
        </div>
    )
}

export default Button
