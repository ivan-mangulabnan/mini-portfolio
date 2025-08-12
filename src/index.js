import './main.css';
import './banner/banner.js';

const educh2 = document.querySelector('.educ h2');
educh2.addEventListener('mouseenter', () => {
  const svg = educh2.querySelector('svg');
  const anchor = educh2.querySelector('.anchor');

  svg.classList.add('move-cap');
  anchor.classList.add('show-anchor');

  anchor.addEventListener('animationend', () => {
    anchor.classList.remove('show-anchor');
  })

  svg.addEventListener('animationend', () => {
    svg.classList.remove('move-cap');
  })
})