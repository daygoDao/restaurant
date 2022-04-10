function menu() {
  // create object of food item
  const menuItem = (name, desc) => {
    const food = document.createElement("food");
    food.textContent = `test for ${name}`;

    return food;
  };

  // menu list of food items to add by DOM
  const menuList = () => {
    let content = document.getElementById("content");
    content.appendChild(menuItem("test", "test1"));
  };

  // load everything
  const loadMenu = () => {};

  menuList();

  const pictures = ["pho", "clams", "pork_assorted", "sexybowl"];
  let index = 0;

  let restaurantName = document.createElement("h1");
  let content = document.getElementById("content");
  let contain = document.createElement("section");
  let foodGallery = document.createElement("section");
  contain.classList.add("contain");
  foodGallery.classList.add("food_gallery");

  content.appendChild(contain);
  restaurantName.textContent = "Picture Gallery";
  contain.appendChild(restaurantName);

  //display food 1 at a time on an interval or manual by arrows
  function showFood(picturesIndex) {
    let restaurantPic = document.createElement("img");

    restaurantPic.src = `images/${pictures[picturesIndex]}.jpg`;
    restaurantPic.alt = "viet food";
    foodGallery.appendChild(restaurantPic);

    contain.append(foodGallery);
  }

  //buttons to traverse through food
  //loops back to 0th index after the end of picture array is reached
  const rightButton = document.createElement("button");
  const leftButton = document.createElement("button");
  leftButton.textContent = "<";
  rightButton.textContent = ">";
  leftButton.addEventListener("click", leftPicture);
  rightButton.addEventListener("click", rightPicture);

  function leftPicture(e) {
    index--;
    if (index < 0) {
      index = pictures.length;
    }
    resetPicture();
    showFood(index);
  }
  function rightPicture() {
    index++;
    if (index > pictures.length - 1) {
      index = 0;
    }
    console.log(index);
    resetPicture();
    showFood(index);
  }
  function resetPicture() {
    foodGallery.removeChild(foodGallery.lastChild);
  }

  contain.append(leftButton);
  contain.append(rightButton);

  showFood(0);
}

export default menu;
