import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo'>
        <h3>Cast Iron Cookery</h3>
        <img />
        </div>

        <nav className='header__nav'>
          <Link to='/'>Home</Link>  
          <Link to='profile'>Profile</Link>
          <Link to='newrecipe'>Submit Recipe</Link>
          <Link to='login'>Sign Up</Link>
        </nav>
        
    </div>
  )
}

export default Header