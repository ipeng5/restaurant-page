function createHome() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  title.textContent = 'THE BRUNCH HEAVEN';
  text.textContent = ' The perfect brunch restaurant with a cozy atmosphere.';
  content.appendChild(title);
  content.appendChild(text);
}

export default createHome;
