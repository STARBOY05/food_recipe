import React, { useState } from 'react'
import { useEffect } from 'react'
import Recipe from './Recipe'
import './App.css'

function App() {
  const APP_ID = "328b675a"
  const APP_KEY = "e58260b7cbb6903e1dd6a1cbe0a852eb"

  // Used for storing fetched recipes
  const [recipes, setRecipes] = useState([])
  // Used for storing search input
  const [search, setSearch] = useState('')
  // Used for storing the final search
  const [query, setQuery] = useState('')

  const getRecipes = async () => {
    // Some data which doesn't arrive instantly can be controlled using promises async and await
    // Acquiring data from API
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // IN JSON FORMAT
    const data = await response.json()
    // Store the data array
    setRecipes(data.hits)
  }
  // Takes input at runtime which leads to too many API Requests so create a state which stores the final search value query
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault() // To prevent default form submit
    setQuery(search)
    setSearch('')
  }
  // Whenever the page reloads, it runs the useEffect state
  // useEffect - You tell React that your component needs to do something after render.
  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query])

  return (
    <div className='App'>
      <div className='container'>
        <div className='search-area'>
          <form onSubmit={getSearch}>
            <input className='search-bar' type="text" value={search} onChange={handleSearch} placeholder="Search for Food"></input>
            <button className='search-button' type='submit'>Search</button>
          </form>
        </div>
        <div className='recipes-area'>
          {recipes.map(recipe => <Recipe key={Math.random(1, 100)} title={recipe.recipe.label} img={recipe.recipe.image} calories={Math.ceil(recipe.recipe.calories)} />)}
        </div>
      </div>
    </div>
  )
}

export default App