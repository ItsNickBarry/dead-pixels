let pixel = document.createElement('div');
let body = document.querySelector('body');

let style = {
  top: Math.floor(Math.random() * body.offsetHeight) + 'px',
  left: Math.floor(Math.random() * body.offsetWidth) + 'px',
  height: '1px',
  width: '1px',
  background: 'black',
  position: 'fixed',
  'z-index': Number.MAX_SAFE_INTEGER,
};

for (let key in style) {
  pixel.style[key] = style[key];
}

body.appendChild(pixel);
