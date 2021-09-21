const recipesCards = document.querySelector('.card');

export const cards = function (value) {
    let ingredients = [];
    let card = document.createElement('article');
    card.setAttribute('class', 'card__container');
    card.innerHTML =`
        <div class="card__image">
        </div>
        <div class="card__header">
            <h2 class="card__header--title">${value.name}<h2>
            <span class ="card__header--time"><i class ="far fa-clock"></i> ${value.time} min</span>
        </div>`
    let rolled = document.createElement('div');
    rolled.setAttribute('class', 'card__rolled');
    let rolledIngredients = document.createElement('ul');
    rolledIngredients.setAttribute('class', 'card__rolled--ingredients');
    ingredients = value.ingredients
    for (let i = 0; i < ingredients.length; i++) {
        let foodIn = ingredients[i].ingredient
        let quantity;
        let unit;
        if(ingredients[i].quantity===undefined){
            quantity = "";
        }else{
            quantity = " : " +ingredients[i].quantity;
        }
        if(ingredients[i].unit===undefined){
            unit = ""
        }else{
            switch (ingredients[i].unit){
                case "gramme":
                case "grammes":
                    unit = " g";
                    break;
                case "litre":
                case "litres":
                case "Litre":
                case "Litres":
                    unit = " L";
                    break;
                default :
                unit = ingredients[i].unit;
            }
        }
        rolledIngredients.innerHTML +=`
            <li class="card__rolled--food">
                <span style="font-weight:700">${foodIn}</span>
                <span style="font-weight:400">${quantity} ${unit}</span>
            </li>`
        }
        rolled.appendChild(rolledIngredients);
        rolled.innerHTML += `<span class='card__rolled--description'>${value.description}<span>`;
        card.appendChild(rolled);
    recipesCards.appendChild(card);
}