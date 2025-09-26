// Import the express
const express = require('express');
const { getAllRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipesPlan_control');

// Create Router
const router = express.Router();

// Create Routes using Router Object
router.get('/',getAllRecipes)
router.post('/',createRecipe)
router.get('/:id',getRecipeById)
router.put('/:id',updateRecipe)
router.delete('/:id',deleteRecipe)

module.exports = router