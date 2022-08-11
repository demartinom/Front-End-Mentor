const windowFunctions = () => {
  const clickOnButton = () => {
    let buttons = document
      .querySelectorAll(".ratings-selection")
      .forEach((button) => {
        button.addEventListener("click", function (event) {
          if (!button.classList.contains("clicked")) {
            currentActive = document.querySelector(".clicked");
            button.setAttribute("class", "clicked ratings-selection");
            if (currentActive.classList.contains("default")) {
              currentActive.setAttribute("class", "ratings-selection default");
            } else {
              currentActive.setAttribute("class", "ratings-selection");
            }
            let span = document.querySelector(".number-choice");
            activeRating = document.querySelector(".clicked");
            span.innerHTML = activeRating.innerHTML;
          } else {
            button.setAttribute("class", "ratings-selection");
          }
        });
      });
  };
  const confirmationPage = () => {
    let confirmButton = document.querySelector("button");
    const changeActive = () => {
      let inputPage = document.querySelector(".input");
      inputPage.setAttribute("class", "input inactive ");
      let finalPage = document.querySelector(".confirmation-page");
      finalPage.setAttribute("class", "confirmation-page");
    };
    confirmButton.addEventListener("click", changeActive);
  };

  clickOnButton();
  confirmationPage();
};
window.onload = windowFunctions;
