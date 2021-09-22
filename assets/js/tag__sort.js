import { recipesList, pageBuild } from "./page__rebuild";
const search = document.querySelector("#search");
export let tagSort = function (KeyTag) {
  search.value = "";
  let recipesList2 = [];
  recipesList2 = recipesList.filter((recipeElmt)=>recipeElmt.appliance === KeyTag);
  recipesList.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      if (ustensil === KeyTag) {
        recipesList2.push(recipe);
      }
    });
    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.ingredient === KeyTag) {
        recipesList2.push(recipe);
      }
    });
  });
  recipesList2 = Array.from(new Set(recipesList2));
  pageBuild(recipesList2);
};