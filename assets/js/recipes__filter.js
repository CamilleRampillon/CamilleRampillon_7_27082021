import { recipes } from "./recipes";
import { pageBuild } from "./page__rebuild";

let recipes2 = recipes;
export let recipesFilter = function (value) {
  
  recipes2 = recipes2.filter((recipe) =>
  recipe.name.toLowerCase().includes(value) ||
  recipe.appliance.toLowerCase().includes(value) ||
  recipe.description.toLowerCase().includes(value)
  );
  for (const recipe in recipes) {
    for (const ingredient in recipes[recipe].ingredients) {
      if (recipes[recipe].ingredients[ingredient].ingredient.toLowerCase().includes(value)) {
        recipes2.push(recipes[recipe]);
      }
    }
    for (const ustensil in recipes[recipe].ustensils) {
      if (recipes[recipe].ustensils[ustensil].toLowerCase().includes(value)) {
        recipes2.push(recipes[recipe]);
      }
    }
  }

  recipes2 = Array.from(new Set(recipes2));
  pageBuild(recipes2);
}