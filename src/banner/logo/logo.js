// svg hand-pop animations

const logoDiv = document.querySelector('.banner .logo');
const home = document.querySelector('.base');
const svg = document.querySelector('.logo-svg');

let running = false;

logoDiv.addEventListener('mouseenter', showLike);
home.addEventListener('click', showLike);

function showLike () {
  if (running) return;
  svg.classList.add('hand-pop');
  running = true;
}

svg.addEventListener('animationend', (event) => {
  if (event.animationName !== 'hand-hide') return;
  svg.classList.remove('hand-pop');
  running = false;
})