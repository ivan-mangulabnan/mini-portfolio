import { addAnimation } from "../utils/animation-utils.js"
;
// rotate display-pic pseudo-elements
(function () {
  const picWrapper = document.querySelector('.pic-wrapper');
  const animationName = 'rotate';
  addAnimation(picWrapper, animationName);
})();