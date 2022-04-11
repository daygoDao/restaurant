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
    menuDOM.appendChild(food("clams", "wham bam thank ya clams"));
    menuDOM.appendChild(food("clams", "wham bam thank ya clams"));
    menuDOM.appendChild(food("clams", "wham bam thank ya clams"));
    menuDOM.appendChild(food("sexybowl", "grilled pork with rice noodles and lush herbs and veggies all ties together with a sweet spicy fish sauce"));
    menuDOM.appendChild(food("sexybowl", "grilled pork with rice noodles and lush herbs and veggies all ties together with a sweet spicy fish sauce"));
    menuDOM.appendChild(food("sexybowl", "grilled pork with rice noodles and lush herbs and veggies all ties together with a sweet spicy fish sauce"));

    return menuDOM;
  };

  // function to create and load menu to page
  // const displayMenu = () => {};
  // console.log(createMenu());
  document.querySelector("#content").appendChild(createMenu())
}

export default menu;
