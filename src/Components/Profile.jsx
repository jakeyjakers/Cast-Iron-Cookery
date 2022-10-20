import React from 'react'
import RecipeCard from './ReuableElements/RecipeCard'
import "./Profile.css"

const Profile = () => {
  return (
    <div className='profile__container'>
      <h3>profile page</h3>
      <RecipeCard />
    </div>
  )
}

export default Profile