import { cardsRecipe } from './recipe__object';
import { selects} from './selects__objects';

const recipesCard = document.querySelector('.card');
const divSelects = document.querySelector('.selects');
export let recipesList

export let pageBuild = function (source) {
  recipesCard.innerHTML = "";
  divSelects.innerHTML = "";
  if (source.length == 0) {
    recipesCard.innerHTML = `<h2 class="alerte"> Aucune recette ne correspond à votre critère.</br>Vous pouvez chercher "Tarte aux pommes", "Poulet", etc...</h2>`;
  } else {
    cardsRecipe(source);
    selects();
    recipesList = source;
  }
};