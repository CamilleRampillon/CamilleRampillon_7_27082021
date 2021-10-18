import { recipesList, pageBuild } from "./page__rebuild";

export let recipesFilter = function (value) {
  let recipesToSend = [];
  // recipeList = json of recipes
  //foreach recipe we check if the value is in the name, the appliance or the description
  recipesList.forEach((recipe) => {
    const name = recipe.name.toLowerCase()
    const appliance = recipe.appliance.toLowerCase()
    const description = recipe.description.toLowerCase()
    const ustensils = recipe.ustensils
    const ingredients = recipe.ingredients
    let includeInRecipe= false;
    // If the value is in the name, the appliance or the description, includeInRecipe = true
    if (name.includes(value)||appliance.includes(value)||description.includes(value)) {
      includeInRecipe = true;
    }
    // If the value is in the ustensils, includeInRecipe = true
    ustensils.forEach((ustensil) => {
      const ustensilLower = ustensil.toLowerCase()
      if (ustensilLower.includes(value)) {
        includeInRecipe = true;
      }
    })
    // If the value is in the ingredients, includeInRecipe = true
    ingredients.forEach((ingredient) => {
      const ingredientLower = ingredient.ingredient.toLowerCase()
      if (ingredientLower.includes(value)) {
        includeInRecipe = true;
      }
      //if includeInRecipe = true, we push the recipe in the array
      if(includeInRecipe == true){
        recipesToSend.push(recipe)
      }
    })
  })
  recipesToSend = Array.from(new Set(recipesToSend))
  pageBuild(recipesToSend) 
}