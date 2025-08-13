import './main.css';
import './banner/banner.js';

// educ
const educh2 = document.querySelector('.educ h2');
const educLink = document.querySelector('[href="#educ"]');
const educSvgClassName = 'move-cap';
animate(educh2, educSvgClassName, educLink);

// work
const workh2 = document.querySelector('.work h2');
const workLink = document.querySelector('[href="#work"]');
const workSvgClassName = 'move-bag';
animate(workh2, workSvgClassName, workLink);

//skills
const skillsh2 = document.querySelector('.skills h2');
const skillsLink = document.querySelector('[href="#skills"]');
const skillsSvgClassName = 'move-tool';
animate(skillsh2, skillsSvgClassName, skillsLink);

//projects.
const projectsh2 = document.querySelector('.projects h2');
const projectsLink = document.querySelector('[href="#projects"]');

const state = {
  svgOneRunning: false,
  svgTwoRunning: false,
  anchorRunning: false
}

const animateProj = () => animateProject(projectsh2, state);
projectsh2.addEventListener('mouseenter', animateProj);
projectsLink.addEventListener('click', animateProj);

function animateProject (projectsh2, state) {
  if ((state.svgOneRunning || state.svgTwoRunning) && state.anchorRunning) return;

  const gearOne = projectsh2.querySelector('.gear-one');
  const gearTwo = projectsh2.querySelector('.gear-two');
  const anchor = projectsh2.querySelector('.anchor');
  const anchorClass = 'show-anchor';

  if (!state.svgOneRunning && !state.svgTwoRunning) {
    state.svgOneRunning = true;
    state.svgTwoRunning = true;
    
    gearOne.classList.add('spin');
    gearTwo.classList.add('spin-rev');
    
    gearOne.addEventListener('animationend', () => {
      gearOne.classList.remove('spin');
      state.svgOneRunning = false;
    }, {once: true})

    gearTwo.addEventListener('animationend', () => {
      gearTwo.classList.remove('spin-rev');
      state.svgTwoRunning = false;
    }, {once: true})
  }
  
  if (!state.anchorRunning) {
    state.anchorRunning = true;
    anchor.classList.add(anchorClass);

    anchor.addEventListener('animationend', () => {
      anchor.classList.remove(anchorClass);
      state.anchorRunning = false;
    }, {once: true})
  }
}
// utils below}

function animate(header, svgClassName, clickEle = null) {
  const state = {
    anchorStillAnimating: false,
    svgStillAnimating: false
  };

  const handleHover = () => onHeaderHover(header, svgClassName, state);
  header.addEventListener('mouseenter', handleHover);

  if (!clickEle) return;
  clickEle.addEventListener('click', handleHover);
}

function onHeaderHover (header, svgClassName, state) {
  if (state.anchorStillAnimating && state.svgStillAnimating) return;

  const svg = header.querySelector('svg');
  svg.style.willChange = 'transform';
  const anchor = header.querySelector('.anchor');
  const anchorClassName = 'show-anchor';

  const svgEnd = () => onSVGEnd(svg, svgClassName, state);
  const anchorEnd = () => onAnchorEnd(anchor, anchorClassName, state);

  if (!state.svgStillAnimating) {
    state.svgStillAnimating = true;
    svg.classList.add(svgClassName);
    svg.addEventListener('animationend', svgEnd, {once: true});
  }

  if (!state.anchorStillAnimating) {
    state.anchorStillAnimating = true;
    anchor.classList.add(anchorClassName);
    anchor.addEventListener('animationend', anchorEnd, {once: true});
  }
}

function onSVGEnd (ele, className, state) {
  ele.classList.remove(className);
  ele.style.willChange = '';
  state.svgStillAnimating = false;
}

function onAnchorEnd (ele, className, state) {
  ele.classList.remove(className);
  state.anchorStillAnimating = false;
}