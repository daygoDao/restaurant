import home from './front_page'
import menu from './menu'
import './style.css'

home();

let homeButt = document.querySelector('.home');
homeButt.addEventListener('click', home);
let menuButt = document.querySelector('.menu');
menuButt.addEventListener('click', menu);
let contactButt = document.querySelector('.contact');
contactButt.addEventListener('click', home);


console.log('hello')