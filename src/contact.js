function contact() {
  let title = document.createElement('h1');
  let picture = document.createElement('img');
  let hours = document.createElement('p');
  let infoPhone = document.createElement('p');
  let infoEmail = document.createElement('p');
  
  let content = document.getElementById('content');
  let contain = document.createElement('section');

  title.textContent = 'contact info';
  picture.src = '#';
  picture.alt = 'more food';
  hours.textContent = '8:00am-8:00pm';
  infoPhone.textContent = 'Phone: 619-000-0000'
  infoEmail.textContent = 'email: daygodiner@notreal.srsly'

  
  contain.appendChild(title);
  contain.appendChild(picture);
  contain.appendChild(hours);
  contain.appendChild(infoPhone);
  contain.appendChild(infoEmail);

  contain.classList.add('contain')
  content.appendChild(contain);

}

export default contact;