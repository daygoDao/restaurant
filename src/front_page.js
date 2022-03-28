function home() {

  if (!document.querySelector('nav')) {
    let navbar = nav()
    content.appendChild(navbar);
  }

  let restaurantName = document.createElement('h1');
  let restaurantDesc = document.createElement('p');
  let restaurantPic = document.createElement('img');
  let content = document.getElementById('content');
  let contain = document.createElement('section');

  contain.classList.add('contain')

  restaurantName.textContent = 'Daygo Dining'
  restaurantDesc.textContent = 'Yummy food place, number 1!'
  restaurantPic.src = '../loes-klinker-gPzixog6XLg-unsplash.jpg'
  restaurantPic.alt = 'viet food'

  content.appendChild(contain);
  contain.appendChild(restaurantName);
  contain.appendChild(restaurantDesc);
  contain.appendChild(restaurantPic);
}

export default home;