import { recipesList, pageBuild } from "./page__rebuild";

export let recipesFilter = function (value) {
  let recipesToSend = [];
  recipesList.forEach((recipe) => {
    const name = recipe.name.toLowerCase()
    const appliance = recipe.appliance.toLowerCase()
    const description = recipe.description.toLowerCase()
    const ustensils = recipe.ustensils
    const ingredients = recipe.ingredients
    if (name.includes(value)||appliance.includes(value)||description.includes(value)) {
      recipesToSend.push(recipe)
    }
    ustensils.forEach((ustensil) => {
      const ustensilLower = ustensil.toLowerCase()
      if (ustensilLower.includes(value)) {
        recipesToSend.push(recipe)
      }
    })
    ingredients.forEach((ingredient) => {
      const ingredientLower = ingredient.ingredient.toLowerCase()
      if (ingredientLower.includes(value)) {
        recipesToSend.push(recipe)
      }
    })
  })
  recipesToSend = Array.from(new Set(recipesToSend))
  pageBuild(recipesToSend)
}