const clickButton = document.getElementById("clickThis");
const effectText = document.getElementById("changeThis");
let onOff = false;

const textColorChange = () => {
  onOff = !onOff;
  if (onOff) {
    effectText.style.color = "red";
  } else {
    effectText.style.color = "black";
  }
};

clickButton.addEventListener("click", textColorChange);
// console.log("object");

function checkKey(e) {
  var event = window.event ? window.event : e;
  console.log(event.keyCode);
}

const log = document.getElementById("log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
