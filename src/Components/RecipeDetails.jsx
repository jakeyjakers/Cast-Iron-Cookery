import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CASTIRON_COOKERY_API } from '../Store/Config'
import AuthContext from '../Store/AuthContext'
import axios from 'axios'
import Cobbler from '../StockPhotos/Cobbler-Image.jpg'
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
          })
          .catch((error) => {
            console.log(`ERROR in promise of favorite handler recipedetails.jsx`)
            console.log(error)
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
    })
   
  }, [id])
  console.log(recipe)
  
// console.log(recipe[0].title)
  // will need to make a func to display data here, maybe with map? 
  // then render it it in the return
  return (
    <div className='recipe__container'>
      <div className='recipe__details1'>
        <img src={Cobbler}/>
        <h3>Recipe Details..</h3>
       <h2>{recipe.title}</h2> 
        {/* //maybe back button? */}
        <h4>{recipe.time}</h4>
        {authCtx.token && <button onClick={() => favoriteHandler()}type='button'>Favorite</button> }
      </div>
      <div className='recipe__details2'>
        <ul>
          
          {/* {recipe.ingredients.map((ingredient, index) => {
            return (
              <li>{ingredient}</li>
            )
          })} */}
          {/* {recipe.ingredientsAmount.map((amount, index) => {
            return (
              <li>{amount}</li>
            )
          })} */}
          
        </ul>
      </div>
      <div className='recipe__instructions'>
        <span>
          {recipe.instructions}
         

        </span>
      </div>
    </div>
  )
}

export default RecipeDetails