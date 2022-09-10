const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const totalList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const listOfElem = document.createElement('li');
  listOfElem.textContent = `${ingredient}`;
  listOfElem.classList.add('item');

  return listOfElem;
});

console.log(elements);

totalList.append(...elements);

