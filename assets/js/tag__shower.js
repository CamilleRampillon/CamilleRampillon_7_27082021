import { pageBuild } from "./page__rebuild";
import { recipes } from "./recipes";
import { sortValueTab } from "./custom__selects";
import { tagSort } from "./tag__sort";
let closeBtn;
const search = document.querySelector("#search");

let tag;

export const tagsShowerFromTag = function (categorie, sortValue) {
  const tagSearch = document.querySelector("#tagBySearch");
  tagSearch.innerHTML="";
  tag = document.querySelector("#tagByTag");
  tagsShower(categorie, sortValue);
}

export const tagsShowerFromSearch = function (categorie, sortValue) {
  tag = document.querySelector("#tagBySearch");
  tagsShower(categorie, sortValue);
}

function tagsShower(categorie, sortValue) {
  // transform all spaces and () by - for the id name
  let sortvalue = sortValue.split(" ");
  sortvalue = sortvalue.join("-");
  if (sortvalue.includes("(")) {
    sortvalue = sortvalue.split("(");
    sortvalue = sortvalue[0] + sortvalue[1];
    sortvalue = sortvalue.split(")");
    sortvalue = sortvalue[0];
  }
  
  tag.innerHTML += `<span class="tags" id="tags${categorie}${sortvalue}"><span class="tag ${categorie}" id="tag${categorie}"><span>${sortValue}</span><i class ="far fa-times-circle closeBtn" id="btn${categorie}btn${sortvalue}"></i></span></span>`;

  closeBtn = document.querySelectorAll(".closeBtn");
  closeBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      search.innerText = "";
      let cible = e.target.id.split("btn")[1];
      let cible2 = e.target.id.split("btn")[2];
      let cible3 = e.target.parentNode.innerText
      let closeTags = document.querySelector("#tags" + cible+cible2);
      closeTags.parentNode.removeChild(closeTags);
      let i = sortValueTab.findIndex((element) => element === cible3)
      sortValueTab[i]="";
      let sortValueTab2=sortValueTab.filter((elmt)=>elmt!="")
      pageBuild(recipes);
      sortValueTab2.forEach((value) => {
        if (value != "") {
          tagSort(value);
        }
        })
      })
      );
}