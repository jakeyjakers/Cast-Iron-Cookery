import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CASTIRON_COOKERY_API } from '../Store/Config'
import AuthContext from '../Store/AuthContext'
import axios from 'axios'
import './RecipeDetails.css'

const RecipeDetails = () => {
  const {id} = useParams()
  const authCtx = useContext(AuthContext)

  const {userId, token} = useContext(AuthContext)

  const favoriteHandler = () => {
    axios
        .post(`${CASTIRON_COOKERY_API}/recipe/favorite`, {recipeId: id, userId: userId}, {
          headers: {
              authorization: token
  }})
          .then((response) => {
            console.log(response)
            alert(`Recipe Favorited!`)
          })
          .catch((error) => {
            console.log(`ERROR in promise of favorite handler recipedetails.jsx`)
            console.log(error)
            alert(`Whoops! There was a problem favoriting this recipe. Try again later.`)
          })
  }

  
console.log(id)
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    // axios call here for recipe details
    axios
    .get(`${CASTIRON_COOKERY_API}/recipe/${id}`)
    .then((response) => {
      console.log(response.data)
      setRecipe(response.data[0])
      console.log(recipe)
    }).catch((error) => {
      console.log(`ERROR in promise of recipedetails.jsx`)
      console.log(error)
      alert(`Whoops! There was a problem grabbing this recipe. Try again later.`)
    })
   
  }, [id])
  console.log(recipe)
  console.log(recipe.ingredients)
  console.log(recipe.ingredientsAmount)

  return (
    <div className='recipe__detial__parent'>
    <div className='recipe__container'>
      <div className='recipe__details1'>
        <img src={recipe.image}/>
        <h1>Recipe Details....</h1>
       <h2>Title: {recipe.title}</h2> 
        <h3>Time: {recipe.time}</h3>
        {authCtx.token && <button onClick={() => favoriteHandler()}type='button'>Favorite</button> }
      </div>
      <div className='recipe__details2'>
        <ul>
          
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => {
            return (
              <li>{ingredient}</li>
            )
          })} 
             </ul>
             <ul>
           {recipe.ingredientsAmount && recipe.ingredientsAmount.map((amount, index) => {
             return (
               <li>{amount}</li>
               )
              })}
             
              </ul>
          
      </div>
      <div className='recipe__instructions'>
        
          {recipe.instructions}
        
      </div>
    </div>
    </div>
  )
}

export default RecipeDetails