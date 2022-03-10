const increase = document.querySelector(".button-increase");
const decrease = document.querySelector(".button-decrease");
const reset = document.querySelector(".button-reset");
const counter = document.querySelector(".counter-no");
let index = 0;
counter.innerText = index;

// console.log(counter.innerText);
//load event listeners
increase.addEventListener("click", increaseCounter);
decrease.addEventListener("click", decreaseCounter);

function increaseCounter() {
  index++;

  if (index >= 0) {
    counter.style.color = "green";
  }

  counter.innerText = index;
}
reset.addEventListener("click", resetCounter);
function resetCounter() {
  index = 0;
  counter.innerText = index;
  counter.style.color = "black";
}
function decreaseCounter() {
  index--;
  if (index <= 0) {
    counter.innerText = index;
    counter.style.color = "red";
  } else {
    counter.innerText = index;
    counter.style.color = "green";
  }
}
