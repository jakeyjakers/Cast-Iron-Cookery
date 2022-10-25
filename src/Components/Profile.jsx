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

useEffect(() => {
  axios
  .get(`${CASTIRON_COOKERY_API}/userrecipes/${userId}`,  {
    headers: {
        authorization: token
    }
    })
  .then((response) => {
    console.log(response.data)
    setRecipes(response.data)
  }).catch((error) => {
    console.log(`ERROR in promise of getallrecipes main.jsx`)
    console.log(error)
  })
},[])

useEffect(() => {
  axios
  .get(`${CASTIRON_COOKERY_API}/recipefavs/${userId}`,  {
    headers: {
        authorization: token
    }
    })
  .then((response) => {
    console.log(response.data)
    setFavs(response.data)
  }).catch((error) => {
    console.log(`ERROR in promise of getallrecipes main.jsx`)
    console.log(error)
  })
}, [])

const recipeView = () => {
  setDisplayState(!displayState)
}

const recipeDsipley = recipes.map((recipe, index) => {
  return <RecipeCard recipe={recipe}/>
})

const favsDisplay = favs.map((recipe, index) => {
  return <RecipeCard recipe={recipe}/>
})
const logOutHandler = () => {
  authCtx.logout()
}

  return (
    <div className='profile__container'>
      <button onClick={logOutHandler}>Log Out</button>
      <button type='button' onClick={recipeView}>My Favs</button>
      <h3>profile page</h3>
      {displayState ? recipeDsipley : favsDisplay}
      
    </div>
  )
}

export default Profile