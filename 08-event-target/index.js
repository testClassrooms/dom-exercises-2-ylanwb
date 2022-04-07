const firstButton = document.getElementById("btn1");
const secondButton = document.getElementById("anchor1");
firstButton.addEventListener("click", function () {
  alert(firstButton.id);
});
secondButton.addEventListener("click", function () {
  alert(secondButton.id);
});
