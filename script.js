"use strict";

const picker = document.querySelector(".picker");
const btn = document.querySelector("#get-scheme");
const sheme = document.querySelector("#scheme-sel");
const colorEl = document.querySelectorAll(".color");
const footerEl = document.querySelectorAll(".color-def");

let pickerValue = "";
let shemeValue = "";

function render() {
  pickerValue = picker.value.replace("#", "");
  shemeValue = sheme.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${pickerValue}&mode=${shemeValue}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      colorEl.forEach((el, i) => {
        colorEl[i].style.backgroundColor = `${data.colors[i].hex.value}`;
      });

      footerEl.forEach((el, i) => {
        footerEl[i].innerText = data.colors[i].hex.value;
      });
    });
}

render();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  render();
});
