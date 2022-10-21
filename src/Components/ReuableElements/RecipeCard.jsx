import React from 'react'
import Cobbler from '../../StockPhotos/Cobbler-Image.jpg'
import './RecipeCard.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = () => {

    const navigator = useNavigate() 

    const detailHandler = () => {
        navigator(`/recipe/:2`)
    }

  return (
    <div className='recipe__card'>
        <img src={Cobbler} className='recipe__img'/>
        <h2 key={1}>BlueBerry Cobbler</h2>
        <button onClick={detailHandler}>See Recipe</button>
    </div>
  )
}

export default RecipeCard