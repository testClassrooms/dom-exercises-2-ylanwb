// adding the function to the window makes it globally available

//Return the value of the input #firstNumber
const stringA = document.getElementById("firstNumber");
//Return the value of the input #secondNumber
const stringB = document.getElementById("secondNumber");
const result = document.getElementById("resultNumber");
//your code goes here

const button = document.getElementById("calculate");
let sum = 0;
button.addEventListener("click", function () {
  sum = parseInt(stringB.value) + parseInt(stringA.value);
  result.value = sum;
});
