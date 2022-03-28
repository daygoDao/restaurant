function contact() {
  let title = document.createElement('h1');
  let picture = document.createElement('img');
  let hours = document.createElement('p');
  let infoPhone = document.createElement('p');
  let infoEmail = document.createElement('p');
  
  let content = document.getElementById('content');
  let contain = document.getElementById('content');

  title.textContent = 'contact info';
  picture.src = '#';
  picture.alt = 'more food';
  hours.textContent = '8:00am-8:00pm';
  infoPhone.textContent = 'Phone: 619-000-0000'
  infoEmail.textContent = 'email: daygodiner@notreal.srsly'

  content.appendChild(title);
  content.appendChild(picture);
  content.appendChild(hours);
  content.appendChild(infoPhone);
  content.appendChild(infoEmail);

}

export default contact;