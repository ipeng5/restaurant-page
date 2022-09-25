function createHome() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');
  const home = document.createElement('div');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  home.classList.add('home');
  title.textContent = 'BRUNCH SHACK';
  text.textContent = 'A perfect brunch bar with a cozy atmosphere.';
  home.appendChild(title);
  home.appendChild(text);
  main.appendChild(home);
  content.appendChild(main);
}

export default createHome;
