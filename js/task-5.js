const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const colorBackground = document.querySelector("body");
changeColorButton.addEventListener("click", () => {
  const colorCurrent = getRandomHexColor();
  console.log(colorCurrent);
  colorBackground.style.background = colorCurrent;
  colorSpan.textContent = colorCurrent;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
