/* if a string contains just a number and we do math, it is automatically converted to a number
unless we are adding

to conver to string we usae String();

to conver string to number 

Number()

window is a build in object that represents the browser

      */
function handleCostKeyDown(event) {
  console.log(event.key);
  if (event.key === "Enter") {
    calculateCost();
  }
}
function calculateCost() {
  const inputElement = document.querySelector(".js-order-amount");
  //wheneveer we get a value from the dom, the value will be a string
  let cost = Number(inputElement.value);

  if (cost < 50) {
    cost += 10;
  }
  document.querySelector(".js-total-fee").innerHTML = `$${cost}`;
}

function Subscribe() {
  const buttonElement = document.querySelector(".js-subscribebutton");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
    buttonElement.classList.add("is-subscribed");
  } else {
    buttonElement.innerHTML = "Subscribe";
    buttonElement.classList.remove("is-subscribed");
  }
}