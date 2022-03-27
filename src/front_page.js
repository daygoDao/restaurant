{/* <h1>Yummy food place name insert here now plz</h1>
<img src="../loes-klinker-gPzixog6XLg-unsplash.jpg" alt="viet grilled pork with rice noodles"> */}

function home() {
  let restaurantName = document.createElement('h1');
  let restaurantDesc = document.createElement('p');
  let restaurantPic = document.createElement('img');
  let content = document.getElementById('content');
  
  restaurantName.textContent = 'Daygo Dining'
  restaurantDesc.textContent = 'Yummy food place, number 1!'
  restaurantPic.src = '../loes-klinker-gPzixog6XLg-unsplash.jpg'
  restaurantPic.alt = 'viet food'
  
  content.appendChild(restaurantName);
  content.appendChild(restaurantDesc);
  content.appendChild(restaurantPic);
} 

export default home;