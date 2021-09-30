import { recipes } from "./recipes";
import { pageBuild } from "./page__rebuild";

//create an array with the id of every recipes and in value the text of searched fields
//reduce() => return an array of selected elements (here: recipe's id, in value: the searched elements )
//map() => return an array of specific value (here: the list of ingredients)
//flat() => return an array where all the sub arrays are in the same level
//toString() => return a string of array
var recipes2 = recipes.reduce(function(acc, curr){
  acc.push({
    id: curr.id,
    value: [
    curr.appliance,
    curr.description,
    curr.name,
    curr.ustensils,
    curr.ingredients.map(function(value){
      return value.ingredient;
    })
    ].flat().toString()
  }
)
  return acc ;
}, [])

export let recipesFilter = function (string) {
  // firstFilter = only the entries of the array recipes2 where we can find the string
  const firstFilter = recipes2.filter(recipe => recipe.value.toLowerCase().includes(string));
  let recipesArray=[];
  firstFilter.forEach(element => {
    const recipeFound = recipes.find(recipe => recipe.id === element.id);
    recipesArray.push(recipeFound);
  });
  var recipesToSend = Array.from(new Set(recipesArray));
  pageBuild(recipesToSend);
}