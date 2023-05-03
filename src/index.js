import _ from 'lodash';
import './style.css';
import testImage from './assets/test.jpg'

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.style.backgroundImage = `url(${testImage})`;

   return element;
 }

 document.body.appendChild(component());



