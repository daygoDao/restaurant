function menu() {
  // class to create food item
  const food = (name, desc) => {
    const itemDOM = document.createElement('section')
    itemDOM.textContent = name;

    return {name,desc}
  }

  // class to create menu containing food items
  const createMenu = () => {
    const menuDOM = document.createElement('section');
    menuDOM.classList.add('menu')
    
    // menuDOM.appendChild(food('pho','its pho dude'))

    return menuDOM;
  }

  // function to create and load menu to page
  const displayMenu = () => {

  }
  console.log(createMenu())
  // document.querySelector('#content').appendChild(createMenu())

}

export default menu;
