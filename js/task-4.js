const registerForm = document.querySelector(".login-form");

const registerEmail = document.querySelector('.login-form input[name="email"]');
registerEmail.classList.add("style-input-email");
const registerPassword = document.querySelector(
  '.login-form input[name="password"]'
);
registerPassword.classList.add("style-password");
const registerBtn = document.querySelector('.login-form button[type="submit"]');
registerBtn.classList.add("style-btn");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formDate = {};
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (element.tagName === "INPUT") {
      const trimmedValue = element.value.trim();
      if (!trimmedValue) {
        return alert("Please fill in all the fields!");
      }
      formDate[element.name] = trimmedValue;
    }
  }

  console.log(formDate);

  form.reset();
});
