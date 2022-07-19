import React from 'react'
import './Recipe.css'

function Recipe(props) {
  return (
    <div className='recipe-card'>
      <img src={props.img} alt={props.title} />
      <div className='recipe-content'>
        <p>{props.title}</p>
        <h4>Calories: {props.calories}</h4>
      </div>
    </div>
  )
}

export default Recipe