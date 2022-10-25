import React, {useState, useContext} from 'react'
import './SignUpLogin.css'
import {CASTIRON_COOKERY_API} from '../Store/Config'
import axios from 'axios'
import AuthContext from '../Store/AuthContext'

const SignupLogin = () => {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [register, setRegister] = useState(true)

  const authCtx = useContext(AuthContext)

  const siginInChangeHandler = () => {
   setRegister(!register)
  }
  

    const handleSubmit = (event) => {
        event.preventDefault()

        const body = {
          username: username,
          password: password,
        }
         
        if(password !== passwordCheck) {
          return
        }
        if(register === true) {
          axios.post(`${CASTIRON_COOKERY_API}/register`, body)
          .then((response) => {
            console.log(`After auth`, response.data)
            authCtx.login(response.data.token, response.data.exp, response.data.userId)
            console.log(response.data.token, response.data.exp, response.data.userId)
          }).catch((error) => {
            console.log(`error in return of then from post register`)
            console.log(error)
            setUserName('')
            setPassword('')
          })
        }
        else {
          axios.post(`${CASTIRON_COOKERY_API}/login`, body)
          .then((response) => {
            console.log(`After auth in login`, response.data)
            authCtx.login(response.data.token, response.data.exp, response.data.userId)
            console.log(response.data.token, response.data.exp, response.data.userId)
          }).catch((error) => {
            console.log(`error in return of then from post login`)
            console.log(error)
            setUserName('')
            setPassword('')
          })
        }        

        console.log(`testing from Signup login`)
        setRegister(false)
        setUserName('')
        setPassword('')
    }

  return (
    <div className='form__container'>
        <form className='form'>
            <input type="text" placeholder='username' onChange={(event) => setUserName(event.target.value)}/>
            <input type="password" placeholder='password' onChange={(event) => setPassword(event.target.value)}/>
            {register && <input type="password" placeholder='re-type password' onChange={(event) => setPasswordCheck(event.target.value)}/> }
            {/* <input type="email" placeholder='email' /> */}
            <button onClick={handleSubmit}>{register ? 'Sign Up' : 'Log In' }</button>
        </form>

        <div>
          <button onClick={siginInChangeHandler}>Alreday a member?</button>
        </div>
    </div>
  )
}

export default SignupLogin