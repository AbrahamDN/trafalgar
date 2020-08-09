import React, { useState } from "react"
import "./Slider-styles.scss"
import Slide from "./Slide/Slide"
import Arrow from "./Arrow/Arrow"
import ArrowMove from "./ArrowMove"
import SliderContent from "./Slider-Content/Slider-content"

const Slider = (props) => {
    const getWidth = () => window.innerWidth

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition:0.45
    })

    const {translate, transition, activeIndex} = state;

    const nextSlide = () => {
        if(activeIndex === props.slides.length - 1){
            return setState({
                ...state,
                translate: 0,
                activeIndex:0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex+1,
            translate: (activeIndex+ 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if(activeIndex === 0){
            return setState({
                ...state,
                translate: (props.slides.length - 1) * getWidth(),
                activeIndex: props.slides.length-1
            })
        }
        setState({
            ...state,
            activeIndex: activeIndex-1,
            translate: (activeIndex- 1) * getWidth()
        })

    }
   
    return(
        <div 
        style={{
            position: `relative`,
            height: `100vh`,
            width: `100vw`,
            margin: `0 auto`,
            overflow: `hidden`
         }}
        className="carousel">
            <SliderContent
            translate={translate}
            transition={transition}
            width={getWidth() * props.slides.length}
            >
                {
                    props.slides.map((slide,i) => {
                 
                        return(
                            <Slide key={slide + i} content={slide[i]}/>
                        )
                    })
                }
                
            </SliderContent>
            <div className="arrow-move">
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
            <ArrowMove  slides={props.slides}  activeIndex={activeIndex} />
            </div>

        </div>
    )
}

export default Slider
