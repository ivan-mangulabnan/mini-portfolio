import './main.css';
import './banner/banner.js';

const educh2 = document.querySelector('.educ h2');
const educLink = document.querySelector('[href="#educ"]');
const educSvgClassName = 'move-cap';
animate(educh2, educSvgClassName, educLink);

// utils below}

function animate(header, svgClassName, clickEle) {
  const state = {
    anchorStillAnimating: false,
    svgStillAnimating: false
  };

  const handleHover = () => onHeaderHover(header, svgClassName, state);
  header.addEventListener('mouseenter', handleHover);
  clickEle.addEventListener('click', handleHover);
}

function onHeaderHover (header, svgClassName, state) {
  if (state.anchorStillAnimating && state.svgStillAnimating) return;

  state.svgStillAnimating = true;
  state.anchorStillAnimating = true;

  const svg = header.querySelector('svg');
  const anchor = header.querySelector('.anchor');
  const anchorClassName = 'show-anchor';

  const svgEnd = () => onSVGEnd(svg, svgClassName, state);
  const anchorEnd = () => onAnchorEnd(anchor, anchorClassName, state);

  if (state.svgStillAnimating) {
    svg.classList.add(svgClassName);
    svg.addEventListener('animationend', svgEnd, {once: true});
  }

  if (state.anchorStillAnimating) {
    anchor.classList.add(anchorClassName);
    anchor.addEventListener('animationend', anchorEnd, {once: true});
  }
}

function onSVGEnd (ele, className, state) {
  ele.classList.remove(className);
  state.svgStillAnimating = false;
}

function onAnchorEnd (ele, className, state) {
  ele.classList.remove(className);
  state.anchorStillAnimating = false;
}