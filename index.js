const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.use(cors());

app.get('/chefs', (req, res) =>{
    res.send(chefs)
}) 

app.get('/recipes', (req, res) =>{
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const selectedRecipes = recipes.find(recipe => parseInt(recipe.id) === id);
    res.send(selectedRecipes)
})

app.listen(port, () => {
    console.log('object')
}) 