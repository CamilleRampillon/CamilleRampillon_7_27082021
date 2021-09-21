import { recipes } from './recipes';
import { recipesFilter } from './recipes__filter';
import { pageBuild } from './page__rebuild';

const search = document.querySelector('#search');
const divTags = document.querySelector('.tags');

export const searchListenner = search.addEventListener('input', (e) => {
  while (divTags.firstChild) {
    divTags.removeChild(divTags.firstChild);
  };
  sort(e.target.value)
})

export let sort = function (input) {
    //vérifie nombre de lettres min (3) + Alpha != number
    function testInput(regex, string) {
      if (regex.test(string)) {
        recipesFilter(input)
      } else {
        pageBuild(recipes)
      }
    }
    testInput(/^[A-Za-z -]\D{2,}$/, input);
}