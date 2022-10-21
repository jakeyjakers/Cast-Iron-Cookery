import React, {useContext} from 'react'
import RecipeCard from './ReuableElements/RecipeCard'
import AuthContext from '../Store/AuthContext'
import "./Profile.css"

const Profile = () => {

const authCtx = useContext(AuthContext)

const logOutHandler = () => {
  authCtx.logout()
}

  return (
    <div className='profile__container'>
      <button onClick={logOutHandler}>Log Out</button>
      <h3>profile page</h3>
      <RecipeCard />
    </div>
  )
}

export default Profile