const btn = document.querySelector('.change-color');
const div = document.querySelector('.widget');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getColor (){
  body.style.backgroundColor = getRandomHexColor()
}


btn.addEventListener('click', getColor);




