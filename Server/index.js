require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {PORT} = process.env
const {sequelize} = require(`./Util/database`)
const {User, Recipe, Favs} = require(`./models`)

const {isAuthenticated} = require('./Middleware/isAuthenticated')
const { login, register } = require('./Controllers/auth')
const { addRecipe, deleteRecipe, getAllRecipes, favoriteRecipe, getAllFavsRecipes, getUserRecipes } = require('./Controllers/recipes')


const app = express()
app.use(cors())
app.use(express.json())

// setting up seqeul relations
User.hasMany(Recipe)
Recipe.belongsTo(User)
User.hasMany(Favs)
Recipe.hasMany(Favs)



// auth 
app.post(`/register`, register)
app.post(`/login`, login)

// get, no quth required
app.get(`/recipes`, getAllRecipes)

// CRUD recipes auth is required
app.post(`/addrecipe`, isAuthenticated, addRecipe)
app.delete(`/recipes/:id`, isAuthenticated, deleteRecipe)
app.put(`/recipe/:id`, isAuthenticated, favoriteRecipe)
app.get(`/userrecipes/:userId`, isAuthenticated, getUserRecipes )

sequelize.sync().then(() => {
    app.listen(PORT, () =>  console.log(`Server up and listening on ${PORT}`))
}).catch((error) => {
    console.log(error)
})

// app.listen(PORT, () =>  console.log(`Server up and listening on ${PORT}`))
