import { recipes } from "./recipes";
import { pageBuild } from "./page__rebuild";

//create an array with the id of every recipes and in value the text of searched fields
//reduce() => return an array of selected elements (here: recipe's id, in value: the searched elements )
// addedRecipe = the new element with:
// the id = the id of the basic recipe 
// and a value = the elements we want of the basic recipe 
// basicRecipe = the element where we reduce the elements
//map() => return an array of specific value (here: the list of ingredients)
//flat() => return an array where all the sub arrays are in the same level
//toString() => return a string of array
var reducedArray = recipes.reduce(function(addedRecipe, basicRecipe){
  addedRecipe.push({
    id: basicRecipe.id,
    value: [
    basicRecipe.appliance,
    basicRecipe.description,
    basicRecipe.name,
    basicRecipe.ustensils,
    basicRecipe.ingredients.map(function(value){
      return value.ingredient;
    })
    ].flat().toString()
  }
)
  return addedRecipe ;
}, [])

export let recipesFilter = function (string) {
  // firstFilter = only the entries of the array reducedArray where we can find the string
  const firstFilter = reducedArray.filter(recipe => recipe.value.toLowerCase().includes(string));
  // recipesToSend = the full recipes corresponding to the id of the entries of firstFilter
  let recipesToSend = recipes.filter(recipe => firstFilter.find(recipeFiltered => recipeFiltered.id === recipe.id));

  recipesToSend = Array.from(new Set(recipesToSend));
  pageBuild(recipesToSend);
}