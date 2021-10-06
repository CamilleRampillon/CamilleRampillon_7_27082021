import { recipesList, pageBuild } from "./page__rebuild";
const search = document.querySelector("#search");
// search in recipes by selected tag
export let tagSort = function (Tag) {
  search.value = "";
  let recipesList2 = [];
  //search in recipes if the selected tag is in appliance
  recipesList2 = recipesList.filter((recipeElmt)=>recipeElmt.appliance === Tag);
  //search in recipes if the selected tag is in the ustensils
  recipesList.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      if (ustensil === Tag) {
        recipesList2.push(recipe);
      }
    });
    //search in recipes if the selected tag is in the ingredients
    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.ingredient === Tag) {
        recipesList2.push(recipe);
      }
    });
  });
  recipesList2 = Array.from(new Set(recipesList2));
  pageBuild(recipesList2);
};