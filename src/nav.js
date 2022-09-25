const navBtns = ['Home', 'Menu', 'Contact'];
function createNav() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');

  navBtns.forEach(function (btn, i) {
    btn = document.createElement('button');
    btn.classList.add('nav-button');
    btn.textContent = navBtns[i];
    header.appendChild(btn);
  });
  content.prepend(header);
}

export default createNav;
