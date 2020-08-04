import React from "react"
import "./Dots.scss"
const Dot = ({ active }) => (
    <span
    className={active ? "blacky" : "whitey"}
      style={{
        padding: `10px`,
        marginRight: `5px`,
        cursor: `pointer`,
        borderRadius: `50%`,
      }}
    />
  )
  
  const Dots = ({ slides, activeIndex }) => (
    <div
      style={{
        position: `absolute`,
        bottom: `25px`,
        width: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`
      }}
    >
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))}
    </div>
  )

export default Dots
