import { cardsRecipe } from './recipe__object';
import { selects} from './selects__objects';

const recipesCard = document.querySelector('.card');
const divSelects = document.querySelector('.selects');
export let recipesList

export let pageBuild = function (source) {
  while (recipesCard.firstChild){
    recipesCard.removeChild(recipesCard.firstChild);
  };
  while (divSelects.firstChild){
    divSelects.removeChild(divSelects.firstChild);
  };
  if (source.length == 0) {
    recipesCard.innerHTML=`<h2 class="alerte"> Aucune recette ne correspond à votre critère.</br>Vous pouvez chercher "Tarte aux pommes", "Poisson", etc...</h2>`
  } else {
    cardsRecipe(source);
    selects()
    recipesList = source
  }
}