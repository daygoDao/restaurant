function menu() {
  // class to create food item
  const food = (name, desc) => {
    this.name = name;
    this.desc = desc;
    return {name,desc}
  }

  // class to create menu containing food items
  const createMenu = () => {
    const menuDOM = document.createElement('section');
    menuDOM.classList.add('menu')
    
    menuDOM.appendChild(food('pho','its pho dude'))

  }

  // function to create and load menu to page
}

export default menu;
