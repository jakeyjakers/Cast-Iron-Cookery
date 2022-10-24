const {Recipe, User} = require('../models')

module.exports = {
    addRecipe: async (req, res) => {
        console.log(`add recipe, recipes.js`)

//{"value":{"title":"kirstens apple crisp","time":"1 hur",
//]"ingredients":["8"],"amount":["4"],"instructions":"gfdsgsdfg"},"userId":"1"}

        try{
            const {title, time, ingredients, amount, instructions} = req.body.values
                const userId = req.body.userId
                console.log(userId)
            const newRecipe = await Recipe.create({
                title: title,
                instructions: instructions,
                ingredients: ingredients,
                ingredientsAmount: amount,
                time: time,
                userId: userId,
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

