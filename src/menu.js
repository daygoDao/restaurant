function menu() {
  const pictures = ["pho", "clams", "pork_assorted", "sexybowl"];

  let restaurantName = document.createElement("h1");
  let content = document.getElementById("content");
  let contain = document.createElement("section");
  let foodGallery = document.createElement("section");
  contain.classList.add("contain");
  foodGallery.classList.add('food_gallery')

  content.appendChild(contain);
  restaurantName.textContent = "Picture Gallery";
  contain.appendChild(restaurantName);

  for (let food of pictures) {
    let restaurantPic = document.createElement("img");

    restaurantPic.src = `../images/${food}.jpg`;
    restaurantPic.alt = "viet food";
    foodGallery.appendChild(restaurantPic);
  }
  contain.append(foodGallery)

  //buttons to traverse through food
  //loops back to 0th index after the end of picture array is reached
  const rightButton = document.createElement('button');
  const leftButton = document.createElement('button');
  leftButton.textContent = '<'
  rightButton.textContent = '>'
  contain.append(leftButton)
  contain.append(rightButton)
}

export default menu;
