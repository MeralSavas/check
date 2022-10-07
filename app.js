const next = document.querySelector(".next");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const shipping = document.querySelector("#shipping");
const total = document.querySelector("#total");
const one = document.querySelector("#one");
const pTotal = document.querySelector(".pTotal");
const ball = document.querySelector(".top");

let phone = 25.99;
let box = 45.99;
let gram = 74.99;
let two = 1;

next.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    if (two >= 1) {
      pTotal.innerHTML = `${(phone * two).toFixed(2)}`;
      one.innerHTML = `${two++}`;
    }
  } else if (e.target.classList.contains("fa-minus")) {
    if (two >= 1) {
      pTotal.innerHTML = `${(phone * two).toFixed(2)}`;
      one.innerHTML = `${two--}`;
    }
  } else if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.parentNode.remove();
  }
});
