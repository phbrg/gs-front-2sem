const hover = document.querySelector('.hover');

const addHover = () => {
  hover.style.display = 'flex';
  document.addEventListener('mousemove', function (e) {
    hover.style.left = `${e.clientX}px`;
    hover.style.top = `${e.clientY}px`;
  })
}

const remHover = () => {
  hover.style.display = 'none';
}