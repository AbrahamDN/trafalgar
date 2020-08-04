import React from "react"
import Dots from "./Dots/Dots"

const ArrowMove = (props) => {


    return(
        <div>

        <Dots slides={props.slides} activeIndex={props.activeIndex}/>
        </div>

    )
}

export default ArrowMove
