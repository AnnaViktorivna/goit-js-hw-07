function main() {
  const textInput = document.querySelector("#name-input");
  const output = document.querySelector("#name-output");

  textInput.addEventListener("input", (event) => {
    const updateTextInput = event.currentTarget.value.trim();

    if (updateTextInput === "") {
      output.textContent = "Anonymous";
    } else {
      output.textContent = updateTextInput;
    }
  });

  textInput.classList.add("input-style");
  output.classList.add("output-style");
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
