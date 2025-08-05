import React from 'react'
// sharing state between components
const Card = (props) => {
  return (
    <div>
      <input type="text" value = {props.name} onChange={(e) => props.setName(e.target.value)} />
      <p>Name state variable ki value inside Card {props.title}: {props.name}</p>
    </div>
  )
}

export default Card
