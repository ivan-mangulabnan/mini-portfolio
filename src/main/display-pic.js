// rotate animation

(function () {
  const picWrapper = document.querySelector('.pic-wrapper');
  picWrapper.addEventListener('click', rotateAnimate);

  function rotateAnimate () {
    picWrapper.classList.add('rotate');

    picWrapper.addEventListener('animationend', () => {
      picWrapper.classList.remove('rotate');
    })
  }
})();