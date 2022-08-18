window.addEventListener("DOMContentLoaded", (event) => {
  const firstName = document.getElementById("First-Name");
  const lastName = document.getElementById("Last-Name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const form = document.querySelector(".user-information");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (firstName.value === "") {
      invalidInput(firstName, "First Name cannot be empty");
    }
    if (lastName.value === "") {
      invalidInput(lastName, "Last Name cannot be empty");
    }
    if (email.value === "") {
      invalidInput(email, "Email cannot be empty");
    }
    if (password.value === "") {
      invalidInput(password, "Password cannot be empty");
    }
  });

  const invalidInput = (ele, message) => {
    let divElement = ele.parentElement;
    let errorMessage = document.createElement("p");
    ele.setAttribute("class", "invalid form-field");
    errorMessage.setAttribute("class", "errorMessage");
    errorMessage.innerText = message;
    divElement.appendChild(errorMessage);
  };
});
