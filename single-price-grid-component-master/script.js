const changeColor = (color) => {
  let listItems = document.querySelectorAll("li");
  for (let i = 0; i < listItems.length; i += 2) {
    listItems[i].style.color = color;
  }
};

const addLi = (newText, location) => {
  const newElement = document.createElement("h1");
  let text = document.createTextNode(newText);
  newElement.setAttribute("class", "header");
  newElement.appendChild(text);
  let header = document.querySelector(location);
  header.appendChild(newElement);
};

changeColor('green');
addLi("Do this not that!", ".container__1");
addLi("Howdy Y'all!", ".container__2");
