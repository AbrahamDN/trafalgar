import React from "react"
import "./ProfileImage.scss"
const ProfileImage = ({image}) => {
    return(<img className="profile-image" src={image} alt="profile"/>)
}

export default ProfileImage
