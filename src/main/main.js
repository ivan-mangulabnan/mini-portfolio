import './display-pic.js';

const showBtns = document.querySelectorAll('.show-btn');
showBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    changeArrowDisplay(event);
    showContent(event);
  })
})

function changeArrowDisplay (event) {;
  const targetBtn = event.currentTarget;
  const path = targetBtn.querySelector('path');
  const arrow =  targetBtn.classList.contains('close') ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5';
  targetBtn.classList.toggle('close');
  path.setAttribute('d', arrow);
}

function showContent (event) {
  const section = event.currentTarget.closest('section');
  const content = section.querySelector('ul');
  content.classList.toggle('show-content');
  content.classList.toggle('hid-content');
}