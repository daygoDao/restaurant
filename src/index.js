import home from './front_page'
import menu from './menu'
import gallery from './gallery'
import contact from './contact'
import reset from './resetDOM'
import './style.css'

home();

let homeButt = document.querySelector('.homeButt');
homeButt.addEventListener('click', () => {
  reset();
  home();
});

let menuButt = document.querySelector('.menuButt');
menuButt.addEventListener('click', () => {
  reset();
  menu();
});

let galleryButt = document.querySelector('.galleryButt');
galleryButt.addEventListener('click', () => {
  reset();
  gallery();
});

let contactButt = document.querySelector('.contactButt');
contactButt.addEventListener('click', () => {
  reset();
  contact();
});


console.log('hello')