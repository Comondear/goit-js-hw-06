const color = document.querySelector('.color');
const body = document.querySelector('body');
const colorBtn = document.querySelector('.change-color'); 

colorBtn.addEventListener('click', changeColorBtnlick);

function changeColorBtnlick() {
  const currentColor = getRandomHexColor();

  color.textContent = currentColor;
  body.style.backgroundColor = currentColor;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
