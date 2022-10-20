import React, {useState} from 'react'
import './SignUpLogin.css'
import axios from 'axios'

const SignupLogin = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(`testing from Signup login`)
    }

  return (
    <div className='form__container'>
        <form className='form'>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <input type="password" placeholder='re-type password' />
            <input type="email" placeholder='email' />
            <button onClick={handleSubmit}>Sign Up</button>
        </form>
    </div>
  )
}

export default SignupLogin