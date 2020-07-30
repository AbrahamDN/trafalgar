import React from "react"

const ProfileImage = ({image}) => {
    return(
        <div>
            <img 
            // Remove this style once we move to that part of the project
            style = {{width: "50px", borderRadius: "30px", border: "2px solid red"}}
            src={image} alt="profile"/>
        </div>
    )
}

export default ProfileImage
