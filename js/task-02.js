const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientstEl = ingredients.map((ingredient) => {
    const liIngridient = document.createElement('li');
    liIngridient.classList.add('item');
    liIngridient.textContent = ingredient;
    return liIngridient
})

const ulIngridients = document.querySelector('ul');
ulIngridients.append(...ingredientstEl)