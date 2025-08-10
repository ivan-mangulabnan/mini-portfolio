// svg hand-pop animations

(function () {
  const logoDiv = document.querySelector('.banner .logo');

  let running = false;
  logoDiv.addEventListener('mouseenter', () => {
    if (running) return;
    const svg = document.querySelector('.logo-svg');
    svg.classList.add('hand-pop');
    running = true;

    svg.addEventListener('animationend', (event) => {
      if (event.animationName === 'hand-hide') {
        svg.classList.remove('hand-pop');
        running = false;
      }
    })
  })
})();