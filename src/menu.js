function menu() {
  // class to create food item
  const food = (name, desc) => {
    // return item DOM section to later append to menu section
    const itemDOM = document.createElement("section");
    itemDOM.classList.add("food");
    // picture of food
     const displayPicture = document.createElement('img')
    displayPicture.src = `images/${name}.jpg`
    displayPicture.alt = desc;
    // h3: name of food
    const displayName = document.createElement("h3");
    displayName.textContent = `${name}`;
    // p: desc of food
    const displayDesc = document.createElement("p");
    displayDesc.textContent = `${desc}`;

    itemDOM.appendChild(displayPicture);
    itemDOM.appendChild(displayName);
    itemDOM.appendChild(displayDesc);

    return itemDOM;
  };

  // class to create menu containing food items
  const createMenu = () => {
    const menuDOM = document.createElement("section");
    menuDOM.classList.add("menu");

    menuDOM.appendChild(food("pho", "its pho dude"));
    menuDOM.appendChild(food("pho", "savory beef soup with thic rice noodles"));
    menuDOM.appendChild(food("pho", "savory beef soup with thic rice noodles"));

    return menuDOM;
  };

  // function to create and load menu to page
  // const displayMenu = () => {};
  // console.log(createMenu());
  document.querySelector("#content").appendChild(createMenu())
}

export default menu;
