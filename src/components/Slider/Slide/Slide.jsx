import React from "react"
import "./Slide-styles.scss"
const Slide = ({content}) => {
    return(
    <div 
    style={{
        height: "100%",
        backgroundSize: "cover",
        backgroundImage: `url(${content})`
    }}
    className="slide">
        

    </div>
    )


}

export default Slide
