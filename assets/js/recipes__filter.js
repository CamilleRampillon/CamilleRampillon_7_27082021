import { pageBuild } from "./page__rebuild";
import { recipesList } from "./page__rebuild";

export let recipesFilter = function (value) {
  value = value.toLowerCase();
  let recipesList2 = [];
  recipesList.forEach((recipe) => {
    let name = recipe.name.toLowerCase();
    let appliance = recipe.appliance.toLowerCase();
    let description = recipe.description.toLowerCase();
    let ustensils = recipe.ustensils;
    let ingredients = recipe.ingredients;
    if (name.includes(value)||appliance.includes(value)||description.includes(value)) {
      recipesList2.push(recipe);
    }
    ustensils.forEach((ustensil) => {
      let ustensilLower = ustensil.toLowerCase();
      if (ustensilLower.includes(value)) {
        recipesList2.push(recipe);
      }
    })
    ingredients.forEach((ingredient) => {
      let ingredientLower = ingredient.ingredient.toLowerCase()
      if (ingredientLower.includes(value)) {
        recipesList2.push(recipe);
      }
    })
  })
  recipesList2 = Array.from(new Set(recipesList2));
  pageBuild(recipesList2);
}