const {PORT} = process.env

require('dotenv').config()
const cors = require('cors')

const express = require('express')

const {isAuthenicated} = require('./Middleware/isAuthenticated')
const { login, register } = require('./Controllers/auth')
const { addRecipe, deleteRecipe, getAllRecipes, favoriteRecipe, getAllFavsRecipes, getUserRecipes } = require('./Controllers/recipes')


const app = express()
app.use(cors())
app.use(express.json())

// auth 
app.post(`/register`, register)
app.post(`/login`, login)

// get, no quth required
app.get(`/recipes`, getAllRecipes)

// CRUD recipes auth is required
app.post(`/addrecipe`, addRecipe)
app.delete(`/recipes/:id`, deleteRecipe)
app.put(`/recipe/:id`, favoriteRecipe)
app.get(`/userrecipes/:userId`, getUserRecipes )


app.listen(PORT, () =>  console.log(`Server up and listening on ${PORT}`))
