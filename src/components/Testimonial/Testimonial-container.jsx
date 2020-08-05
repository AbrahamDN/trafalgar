import React from "react"
import "./Testimonial-container-styles.scss"
import ProfileImage from "../ProfileImage/Profile-Image-component"
const Testimonial = ({title,name,info,review}) => {
    return(
        <div className="testimonial">
             <h1 className="testimonial-title">{title}</h1>
            <div className="container">
               

                <div className="testimonial-main">

                    <div className="testimonial-profile">
                        <ProfileImage/>
                        <div className="testimonial-profile-info">
                            <h4 className="testimonial-name">{name}</h4>
                            <p className="testimonial-info">{info}</p>
                        </div>
                    </div>

                    <div className="testimonial-review">
                        <p>{review}</p>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Testimonial
