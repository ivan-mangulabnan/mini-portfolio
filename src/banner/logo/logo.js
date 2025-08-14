// svg hand-pop animations

const logoDiv = document.querySelector('.banner .logo');
const home = document.querySelector('.base');
const svg = document.querySelector('.logo-svg');

let running = false;

logoDiv.addEventListener('mouseenter', showLike);
home.addEventListener('click', () => {
  showLike();
  animatePicBorder();
});

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

let imageRunning = false;
export function animatePicBorder () {
  if (imageRunning) return;
  const small = document.querySelector('.small-circ');
  const big = document.querySelector('.big-circ');

  small.classList.add('rotate-forward');
  big.classList.add('rotate-backwards');
  imageRunning = true;

  small.addEventListener('animationend', () => {
    small.classList.remove('rotate-forward');
  })

  big.addEventListener('animationend', () => {
    big.classList.remove('rotate-backwards');
    imageRunning = false;
  })
}