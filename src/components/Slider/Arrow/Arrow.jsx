import React from "react"
import "./Arrow-styles.scss"
const Arrow = ({direction, handleClick}) => {
    return(
        <div
        onClick={handleClick}
        className= {direction === "right" ? "righty" : "lefty"}
        style={
            
            {
                display: `flex`,
                position: `absolute`,
                // top: `50%`,
                height: '50px',
                width: '50px',
                justifyContent: 'center',
                background: 'white',
                borderRadius: '50px',
                cursor: 'pointer',
                alignItems: 'center',
                transition: 'transform ease-in 0.1s',
                bottom: `10px`,
                
        }
        }
        >

           {direction === "left" ? 
           <p>Prev</p> 
           : 
           <p >Next</p> }

        </div>
    )

}

export default Arrow
