function createContact() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');
  const contact = document.createElement('div');
  contact.classList.add('contact', 'fade-in');

  main.insertAdjacentHTML(
    'afterbegin',
    `<p class="contact-title">Contact Information</p>
    <p class="contact-text">Address:&nbsp&nbspJonathanstraat 550</p>
    <p class="contact-text">Tel:&nbsp&nbsp12-3456-7890</p>`
  );
  main.appendChild(contact);
  content.appendChild(main);
}

export default createContact;
