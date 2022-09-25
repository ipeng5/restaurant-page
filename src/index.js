import createContact from './contact';
import createHome from './home';
import createMenu from './menu';
import createNav from './nav';

createNav();
createHome();

const header = document.querySelector('header');
header.firstElementChild.classList.add('active');

const displayContent = function (e) {
  const target = e.target.textContent;
  const main = document.querySelector('main');
  [...e.target.parentElement.children].forEach(function (e) {
    e.classList.remove('active');
  });
  e.target.classList.add('active');

  if (target === 'Home') {
    main.remove();
    createHome();
  }
  if (target === 'Menu') {
    main.remove();
    createMenu();
  }
  if (target === 'Contact') {
    main.remove();
    createContact();
  }
};

[...header.children].forEach(function (btn) {
  btn.addEventListener('click', displayContent);
});
