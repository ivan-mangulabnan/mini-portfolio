export function addAnimation (target, animationName, child = null) {
  if (!child) {
    const addClass = () => target.classList.add(animationName);
    target.addEventListener('click', addClass);
    target.addEventListener('mouseover', addClass);
    target.addEventListener('animationend', () => {
      target.classList.remove(animationName);
    })
    return;
  }
  
  const addClass = () => child.classList.add(animationName);
  target.addEventListener('click', addClass);
  target.addEventListener('mouseover', addClass);
  child.addEventListener('animationend', () => {
    child.classList.remove(animationName);
  })
}