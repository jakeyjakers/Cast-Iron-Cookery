const {Recipe, User, Favs} = require('../models')

module.exports = {
    addRecipe: async (req, res) => {
        console.log(`add recipe, recipes.js`)

//{"value":{"title":"kirstens apple crisp","time":"1 hur",
//]"ingredients":["8"],"amount":["4"],"instructions":"gfdsgsdfg"},"userId":"1"}

        try{
            const {title, time, ingredients, amount, instructions, imageURL} = req.body.values
                const userId = req.body.userId
                
                console.log(userId)
            const newRecipe = await Recipe.create({
                title: title,
                instructions: instructions,
                ingredients: ingredients,
                ingredientsAmount: amount,
                time: time,
                userId: userId,
                image: imageURL,
            })
            res.status(201).send(newRecipe)
        } catch(error) {
            console.log(`ERROR in addrecipe`)
            console.log(error)
            res.sendStatus(400)
        }
    },
    deleteRecipe: async (req, res) => {
        console.log(`delete recipe, recipes.js`)

        const {id} = req.params
        
        try{
            await Favs.destroy({where: {recipeId: +id}})
            await Recipe.destroy({where: {id: +id}})
            
            res.sendStatus(200)
        } catch(error) {
            console.log(`ERROR in deleteRecipe`)
            console.log(error)
            res.sendStatus(400)
        }
    },
    getAllRecipes: async (req, res) => {
        console.log(`get all recipes in recipes.js`)
        try{ 
            const recipes = await Recipe.findAll()
            res.status(200).send(recipes)
        } catch (error) {
            console.log(`ERROR in getAllRecipes`)
            console.log(error)
            res.sendStatus(400)
        }
    },
    favoriteRecipe: async (req, res) => {
        console.log(`favorite recipes in recipes.js`)

        const userId = req.body.userId
        const id = req.body.recipeId
       
        try{
                 await Favs.create({
                userId: userId,
                recipeId: id,
                favorite: true
            })
            res.sendStatus(201)
        } catch(error) {
            console.log(`ERROR in favoritereRecipes`)
            console.log(error)
            res.sendStatus(400)
        }
    },
    getAllFavsRecipes: async (req, res) => {
        console.log(`get all favs recipes in recipes.js`)
        const {id} = req.params
        console.log(id)
        try {
            const recipes = await Favs.findAll({
                where: { userId: +id},
                include: [{
                    model: User,
                    model: Recipe,
                    required: true,
                    favorite: true,
                    
                }]
            }) 
            res.status(200).send(recipes)
            
        } catch(error) {
            console.log(`ERROR in getAllFavsRecipes`)
            console.log(error)
            res.sendStatus(400)
        }
    },
    getUserRecipes: async (req, res) => {
        console.log(`get user recipes in recipes.js`)
        console.log(`TEST IN GET ALL RECIPES`)
        const {id} = req.params
        try{
            const recipes = await Recipe.findAll({
                where: {userId: +id},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`],
                }]
            }) 
            console.log(recipes)
            res.status(200).send(recipes)
        } catch(error) {
            console.log(`ERROR in getUserRecipes`)
            console.log(error)
            res.sendStatus(400)
        }
    },
    getRecipeDetails: async (req, res) => {
        console.log(`get recipe details`)

        const {id} = req.params
        try{
            const recipe = await Recipe.findAll({
                where: {id: id}
            })
            res.status(200).send(recipe)
        } catch(error) {
            console.log(`ERROR in get recipe details`)
            console.log(error)
            res.sendStatus(400)
        }
    }

}

