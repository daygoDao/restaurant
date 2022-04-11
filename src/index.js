import home from './front_page'
import menu from './menu'
import gallery from './gallery'
import contact from './contact'
import reset from './resetDOM'
import './style.css'

home();

let homeButt = document.querySelector('.home');
homeButt.addEventListener('click', () => {
  reset();
  home();
});

let menuButt = document.querySelector('.menu');
menuButt.addEventListener('click', () => {
  reset();
  menu();
});

let galleryButt = document.querySelector('.gallery');
galleryButt.addEventListener('click', () => {
  reset();
  gallery();
});

let contactButt = document.querySelector('.contact');
contactButt.addEventListener('click', () => {
  reset();
  contact();
});


console.log('hello')