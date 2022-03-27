function menu() {
  let restaurantName = document.createElement('h1');
  let restaurantPic = document.createElement('img');
  let content = document.getElementById('content');

  restaurantName.textContent = 'Picture Gallery'
  content.appendChild(restaurantName);

  restaurantPic.src = '../loes-klinker-gPzixog6XLg-unsplash.jpg'
  restaurantPic.alt = 'viet food'
  content.appendChild(restaurantPic);

  restaurantPic.src = '../loes-klinker-gPzixog6XLg-unsplash.jpg'
  restaurantPic.alt = 'viet food'
  content.appendChild(restaurantPic);
}

export default menu;