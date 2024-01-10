const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

createButton.addEventListener("click", () => {
  const inputEnter = document.querySelector("input");
  const inputValue = parseInt(inputEnter.value);
  if (inputValue >= 1 && inputValue <= 100) {
    deleteDivBoxes();
    createBoxes(inputValue);
  } else {
    inputEnter.value = "";
    alert`Please enter a value between 1 and 100`;
  }
});

destroyButton.addEventListener("click", deleteDivBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function deleteDivBoxes() {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = "";
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = 30 + i * 10 + "px";
    newDiv.style.height = 30 + i * 10 + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(newDiv);
  }
}
