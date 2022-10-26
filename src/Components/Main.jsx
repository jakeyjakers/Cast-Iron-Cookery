import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AuthContext from '../Store/AuthContext'
import icon from '../../src/StockPhotos/icon.png'
import { CASTIRON_COOKERY_API } from '../Store/Config'
import './Main.css'
import RecipeCard from './ReuableElements/RecipeCard'

const Main = () => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get(`${CASTIRON_COOKERY_API}/recipes`)
    .then((response) => {
      console.log(response.data)
      setRecipes(response.data)
    }).catch((error) => {
      console.log(`ERROR in promise of getallrecipes main.jsx`)
      console.log(error)
      
    })
  },[])

  const recipeDsipley = recipes.map((recipe, index) => {
    return <RecipeCard recipe={recipe} displayState={true} />
  })

  const searchDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.title.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((recipe, index) => {
      return (
        <RecipeCard recipe={recipe} displayState={true}/>
      )
    })
  
  return (
    <div className='main__screen'>
      <div className='main__search'>
        <img src={icon} color="#DA7635"/>
        <input type='text' value={search} placeholder='Search for recipe' onChange={(event) => setSearch(event.target.value) }/>
      </div>
      <div className='main__screen__display'>
      {searchDisplay}
      </div>
    </div>
  )
}

export default Main