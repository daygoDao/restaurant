function menu() {
  // class to create food item
  const food = (name, desc) => {
    // return item DOM section to later append to menu section
    const itemDOM = document.createElement("section");
    itemDOM.classList.add("food");
    // picture of food
    /*  const picture = document.createElement('img')
    picture.alt = `${name}` */
    // h3: name of food
    const displayName = document.createElement("h3");
    displayName.textContent = `${name}`;
    // p: desc of food

    itemDOM.appendChild(displayName)

    return itemDOM;
  };

  // class to create menu containing food items
  const createMenu = () => {
    const menuDOM = document.createElement("section");
    menuDOM.classList.add("menu");

    menuDOM.appendChild(food("pho", "its pho dude"));

    return menuDOM;
  };

  // function to create and load menu to page
  // const displayMenu = () => {};
  console.log(createMenu());
  document.querySelector('#content').appendChild(food('to','toto'))
}

export default menu;
