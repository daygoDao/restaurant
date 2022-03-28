import home from './front_page'
import menu from './menu'
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

let contactButt = document.querySelector('.contact');
contactButt.addEventListener('click', () => {
  reset();
  contact();
});


console.log('hello')