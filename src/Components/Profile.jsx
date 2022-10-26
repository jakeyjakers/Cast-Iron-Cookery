import React, {useContext, useState, useEffect} from 'react'
import { CASTIRON_COOKERY_API } from '../Store/Config'
import axios from 'axios'
import RecipeCard from './ReuableElements/RecipeCard'
import AuthContext from '../Store/AuthContext'
import "./Profile.css"

const Profile = () => {

const authCtx = useContext(AuthContext)
const {userId, token} = useContext(AuthContext)

const [recipes, setRecipes] = useState([])
const [favs, setFavs] = useState([])
const [displayState, setDisplayState] = useState(true)

const deleteRecipe = (recipeId) => {
  axios
  .delete(`${CASTIRON_COOKERY_API}/recipes/${recipeId}`,  {
    headers: {
        authorization: token
    }
    })
  .then((response) => {
    console.log(response.data)
   getUserRecipes()
   getFavRecipes()
  }).catch((error) => {
    console.log(`ERROR in promise of deleteRecipes profile.jsx`)
    console.log(error)
  })
}

const getUserRecipes = () => {
  axios
  .get(`${CASTIRON_COOKERY_API}/userrecipes/${userId}`,  {
    headers: {
        authorization: token
    }
    })
  .then((response) => {
    setRecipes(response.data)
    console.log(response.data)
  }).catch((error) => {
    console.log(`ERROR in promise of getallrecipes main.jsx`)
    console.log(error)
  })
}

const getFavRecipes = () => {
  axios
  .get(`${CASTIRON_COOKERY_API}/recipefavs/${userId}`,  {
    headers: {
        authorization: token
    }
    })
  .then((response) => {
    setFavs(response.data)
    console.log(response.data)
  }).catch((error) => {
    console.log(`ERROR in promise of getallrecipes main.jsx`)
    console.log(error)
  })
}

useEffect(() => {
  getUserRecipes()
  getFavRecipes()
},[])


console.log(`PRE FAVS LOG`)

// console.log(favs.recipe)
const recipeView = () => {
  setDisplayState(!displayState)
}


const recipeDsipley = recipes.map((recipe, index) => {
  return <RecipeCard recipe={recipe}  displayState={displayState} deleteRecipe={deleteRecipe}key={recipe.id} isDelete={true}/>
})

const favsDisplay = favs.map((recipeFav, index) => {
  
  return <RecipeCard recipeFav={recipeFav.recipe} displayState={displayState} key={recipeFav.id}/>
})
const logOutHandler = () => {
  authCtx.logout()
}

  return (
    <div className='profile__container'>
      <div className='profile__head'>
      <button className='profile__view' type='button' onClick={recipeView}>{displayState ? 'My Favs' : 'My Recipes'}</button>
      <button className='profile__logout' onClick={logOutHandler}>Log Out</button>
      </div>
      
      {displayState ? recipeDsipley : favsDisplay}
      
    </div>
  )
}

export default Profile