import './display-pic.js';
import { addAnimation } from '../utils/animation-utils.js';

// tilt and fade animation
(function () {
  const heading = document.querySelector('.educ');
  const svg = heading.querySelector('.grad-cap');
  const anchor = heading.querySelector('.anchor');
  const tiltAnimation = 'tilt';
  const fadeAnimation = 'fade';
  addAnimation(heading, tiltAnimation, svg);
  addAnimation(heading, fadeAnimation, anchor);
})();