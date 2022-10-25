import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AuthContext from '../Store/AuthContext'
import { CASTIRON_COOKERY_API } from '../Store/Config'
import './Main.css'
import RecipeCard from './ReuableElements/RecipeCard'

const Main = () => {

  const [recipes, setRecipes] = useState([])

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
    return <RecipeCard recipe={recipe}/>
  })

  
  return (
    <div className='main__screen'>
      {recipeDsipley }
        {/* <RecipeCard recipes={recipes}/> */}
    </div>
  )
}

export default Main