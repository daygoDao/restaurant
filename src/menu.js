function menu() {
  let restaurantName = document.createElement('h1');
  let restaurantPic = document.createElement('img');
  let content = document.getElementById('content');
  let contain = document.createElement('section')
  contain.classList.add('contain')

  content.appendChild(contain);

  restaurantName.textContent = 'Picture Gallery'
  contain.appendChild(restaurantName);

  restaurantPic.src = '../loes-klinker-gPzixog6XLg-unsplash.jpg'
  restaurantPic.alt = 'viet food'
  contain.appendChild(restaurantPic);

  restaurantPic.src = '../loes-klinker-gPzixog6XLg-unsplash.jpg'
  restaurantPic.alt = 'viet food'
  contain.appendChild(restaurantPic);
}

export default menu;