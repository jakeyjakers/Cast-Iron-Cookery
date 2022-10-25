import React from 'react'
import Cobbler from '../../StockPhotos/Cobbler-Image.jpg'
import './RecipeCard.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe}) => {

 console.log(recipe)

    const navigator = useNavigate() 
  console.log(recipe.title)
    const detailHandler = () => {
        navigator(`/recipe/${recipe.id}`)
    }

  return (
    <div className='recipe__card'>
        <img src={Cobbler} className='recipe__img'/>
        <h2 key={recipe.id} id={recipe.id}>{recipe.title}</h2>
        <button onClick={detailHandler}>See Recipe</button>
    </div>
  )
}

export default RecipeCard