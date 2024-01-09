const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const inputEnter = document.querySelector("input");

createButton.addEventListener("click", () => {
  console.log("create");
  inputEnter.addEventListener("input", inputCreateButton);
});

destroyButton.addEventListener("click", () => {
  console.log("destroy");
  inputEnter.removeEventListener("input", inputCreateButton);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function inputCreateButton() {
  const getInputValue = inputEnter.value;
  console.log(getInputValue);
  if (1 <= getInputValue || getInputValue <= 100) return createBoxes;

  inputEnter.value = "";
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = `Div ${i + 1}`;
    boxesDiv.appendChild(newDiv);
  }
}
