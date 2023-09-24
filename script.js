const h2 = document.createElement("h2");
h2.textContent = "Biography"
document.querySelector("body").appendChild(h2);
const p = document.createElement("p");
p.textContent = "Auriel is currently learning and further developing her software engineering skillset.";
document.querySelector("body").appendChild(p);
p.style.color = "white";
const button = document.createElement("button");
button.textContent = "Click to hide";
document.querySelector("body").appendChild(button);

let isVisible = true;

button.addEventListener("click", function () {
  if (isVisible) {
    p.style.display = "none";
    button.textContent = "Click to view";
  } else {
    p.style.display = "block";
    button.textContent = "Click to hide";
  }
  isVisible = !isVisible;
});