import { pageBuild } from "./page__rebuild";
import { recipes } from "./recipes";
import { sortValueTab } from "./custom__selects";
import { tagSort } from "./tag__sort";
let closeBtn;
const search = document.querySelector("#search");

let tag;

export const tagsShowerFromTag = function (categorie, triValue) {
  const tagSearch = document.querySelector("#tagBySearch");
  tagSearch.innerHTML="";
  tag = document.querySelector("#tagByTag");
  tagsShower(categorie, triValue);
}

export const tagsShowerFromSearch = function (categorie, triValue) {
  tag = document.querySelector("#tagBySearch");
  tagsShower(categorie, triValue);
}

function tagsShower(categorie, triValue) {
  let trivalue = triValue.split(" ");
  trivalue = trivalue.join("-");
  if (trivalue.includes("(")) {
    trivalue = trivalue.split("(");
    trivalue = trivalue[0] + trivalue[1];
    trivalue = trivalue.split(")");
    trivalue = trivalue[0];
  }
  
  tag.innerHTML += `<span class="tags" id="tags${categorie}${trivalue}"><span class="tag ${categorie}" id="tag${categorie}"><span>${triValue}</span><i class ="far fa-times-circle closeBtn" id="btn${categorie}btn${trivalue}"></i></span></span>`;

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