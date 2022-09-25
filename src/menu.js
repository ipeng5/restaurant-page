const menuArr = [
  {
    name: 'Carrot Cake',
    description: 'A classic crowd pleaser, with homemade cream cheese frosting',
    price: '8,00€',
  },
  {
    name: 'Egg Crepes',
    description: 'Baked egg crepes with spring herbs and avocado',
    price: '10,00€',
  },
  {
    name: 'Sandwich',
    description: 'Loaded with herb sausage patties, eggs, tomato',
    price: '11,00€',
  },
];

function createMenu() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');
  const menu = document.createElement('menu');
  menu.classList.add('menu', 'fade-in');

  menuArr.forEach(function (item, i) {
    const itemContainer = document.createElement('div');
    const itemTitle = document.createElement('h2');
    const itemIntro = document.createElement('p');
    const itemPrice = document.createElement('p');
    itemTitle.textContent = menuArr[i].name;
    itemIntro.textContent = menuArr[i].description;
    itemPrice.textContent = menuArr[i].price;
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemIntro);
    itemContainer.appendChild(itemPrice);
    menu.appendChild(itemContainer);
  });

  main.appendChild(menu);
  content.appendChild(main);
}

export default createMenu;
