{/* <h1>Yummy food place name insert here now plz</h1>
<img src="../loes-klinker-gPzixog6XLg-unsplash.jpg" alt="viet grilled pork with rice noodles"> */}

function front_page() {
  let restaurantName = document.createElement('h1');
  let restaurantDesc = document.createElement('p');
  let restaurantPic = document.createElement('img');
  let content = document.getElementById('content');
  
  restaurantName.textContent = 'Daygo Dining'
  restaurantDesc.textContent = 'Yummy food place, number 1!'
  
  content.appendChild(restaurantDesc);
} 

export default front_page;