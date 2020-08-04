import React from "react"
// import "./Slider-content-styles.scss"
const SliderContent = ({translate, transition, width, children}) => {
    return(
        <div 
        style={
            {
                transform: `translateX(-${translate}px)`, 
                transition: `transform ease-out ${transition}s`,
                width: `${width}px`,
                height: `100%`,
                display: `flex`,
            }
        }
      
        className="slider-content">
            {children}
           

        </div>
    )
}

export default SliderContent
