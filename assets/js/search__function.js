import { searchSort } from "./search__sort";
const search = document.querySelector("#search");
const divTags = document.querySelector("#tagBySearch");
export let keySearch
export const searchListener = search.addEventListener("input", (e) => {
  keySearch = e.target.value.toLowerCase()
  divTags.innerHTML = "";
  searchSort(keySearch);
  keySearch ="";
});