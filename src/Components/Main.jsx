import React, {useEffect, useState} from 'react'
import './Main.css'
import RecipeCard from './ReuableElements/RecipeCard'

const Main = () => {
  return (
    <div className='main__screen'>
        <RecipeCard />
    </div>
  )
}

export default Main