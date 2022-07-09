import React from 'react'
import './Recipe.css'

function Recipe(props) {
  return (
    <div className='recipe-card'>
      <img src={props.img} alt={props.title} />
      <div className='recipe-content'>
        <h3>{props.title}</h3>
        <h4>Calories: {props.calories}</h4>
      </div>
    </div>
  )
}

export default Recipe