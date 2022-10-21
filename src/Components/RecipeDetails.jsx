import React, {useEffect} from 'react'
import axios from 'axios'
import Cobbler from '../StockPhotos/Cobbler-Image.jpg'
import './RecipeDetails.css'

const RecipeDetails = (props) => {

  useEffect(() => {
    // axios call here for recipe details
  }, [])

  // will need to make a func to display data here, maybe with map? 
  // then render it it in the return
  return (
    <div className='recipe__container'>RecipeDetails
      <div className='recipe__details1'>
        <img src={Cobbler}/>
        Bluberry Cobbler
        maybe back button?
      </div>
      <div className='recipe__details2'>
        <ul>
          <li>BlueBerrys</li>
          <li>1 can</li>
          <li>cake mix</li>
          <li>1 box</li>
          <li>butter</li>
          <li>1 stick</li>
          <li>brown suger</li>
          <li>1/2 cup</li>
          <li>sprite</li>
          <li>12 oz. can</li>
        </ul>
      </div>
      <div className='recipe__instructions'>
        <span>
          Dump canned blueberrys in ottom of dutch oven 
          pour cake mix on top
          pour half of sprite can on top
          cut butter into tablespoon sized pieces and 
          evenly distibute onto top of cake mix.
          sprinkle suger on top.
          cook with aproximately 350 degree heat, for 20-30 minutes
           with wood or charcoal coals, being attentive to the amount 
          of heat on bottom of dutch oven.

        </span>
      </div>
    </div>
  )
}

export default RecipeDetails