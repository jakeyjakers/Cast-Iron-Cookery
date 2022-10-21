const {Recipe, User} = require('../models')

module.exports = {
    addRecipe: async (req, res) => {
        console.log(`add recipe, recipes.js`)

        try{
            const {title, time, ingredients, amount, instructions, userId} = req.body
            const newRecipe = await Recipe.create({
                title: title,
                instrctions: instructions,
                ingredients: ingredients,
                ingredientsAmount: amount,
                time: time,
                userId,
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

        try{
            const {id} = req.params
            await Recipe.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch(error) {
            console.log(`ERROR in deleteRecipe`)
            console.log(error)
            res.sendStatus(400)
        }
        const {id} = req.params
        await Recipe.destroy({where: {id: +id}})
        res.sendStatus(200)
    },
    getAllRecipes: async (req, res) => {
        console.log(`get all recipes in recipes.js`)
        try{ 
            const recipes = Recipe.findAll()
            res.status(200).send(recipes)
        } catch (error) {
            console.log(`ERROR in getAllRecipes`)
            console.log(error)
            res.sendStatus(400)
        }
    },
    favoriteRecipe: async (req, res) => {
        console.log(`favorite recipes in recipes.js`)
    },
    getAllFavsRecipes: async (req, res) => {
        console.log(`get all favs recipes in recipes.js`)

        try {
            const recipes = await Recipe.findAll({
                where: {favorite: true},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`]
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

        const {id} = req.params
        try{
            const recipes = await Recipe.findAll({
                where: {id: +id},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`],
                }]
            }) 
            res.status(200).send(recipes)
        } catch(error) {
            console.log(`ERROR in getUserRecipes`)
            console.log(error)
            res.sendStatus(400)
        }
    }

}

