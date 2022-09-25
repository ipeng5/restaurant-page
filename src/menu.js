const menuArray = [];
class MenuCl {
  constructor(title, intro, price) {
    this.title = title;
    this.intro = intro;
    this.price = price;
    menuArray.push(this);
  }
}
const item1 = new MenuCl(
  'Carrot Cake',
  'A classic crowd pleaser, with homemade cream cheese frosting',
  '8,00€'
);
const item2 = new MenuCl(
  'Egg Crepes',
  'Baked egg crepes with spring herbs and avocado',
  '10,00€'
);
const item3 = new MenuCl(
  'Sandwich',
  'Loaded with herb sausage patties, eggs, tomato',
  '11,00€'
);

function createMenu() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');
  const menu = document.createElement('menu');
  menu.classList.add('menu', 'fade-in');

  menuArray.forEach(function (item, i) {
    const itemContainer = document.createElement('div');
    const itemTitle = document.createElement('h2');
    const itemIntro = document.createElement('p');
    const itemPrice = document.createElement('p');
    itemTitle.textContent = menuArray[i].title;
    itemIntro.textContent = menuArray[i].intro;
    itemPrice.textContent = menuArray[i].price;
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemIntro);
    itemContainer.appendChild(itemPrice);
    menu.appendChild(itemContainer);
  });

  main.appendChild(menu);
  content.appendChild(main);
}

export default createMenu;
