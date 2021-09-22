import { recipes } from "./recipes";
import { recipesFilter } from "./recipes__filter";
import { pageBuild } from "./page__rebuild";
import{ tagsShowerFromSearch} from "./tag__shower"
import { categories } from "./selects__objects";

export let searchSort = function (keySearch) {
  function testInput(regex, string) {
    if (regex.test(string)) {
      recipesFilter(keySearch);
      categories.forEach((categorie) => {
        if (categorie != "") {
          tagsShowerFromSearch(categorie, keySearch);
        }
      })
    } else {
      pageBuild(recipes);
    }
  }
  testInput(/^[A-Za-z -]\D{2,}$/, keySearch);
};