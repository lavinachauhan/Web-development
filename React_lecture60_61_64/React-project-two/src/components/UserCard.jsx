import React from 'react'
import lavi from "../assets/lavi.jpeg"
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style = {props.style}>
        {/* curly bracket wala javascript ka syntax h */}
        <p id = 'title'>{props.name}</p>
        <img id='user-img' src={props.image} alt={props.name} />
        <p id = 'user-desc'>{props.desc} </p>
    </div>
  )
}

export default UserCard
