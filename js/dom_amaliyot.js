"use strict";

const box = document.querySelector(".box");
const button = document.querySelectorAll("button");
const circles = document.querySelectorAll(".circle");
const circle__wrapper = document.querySelector(".circle__wrapper");
box.style.backgroundColor = "blue";
// box.style.width = "100px";
// button[0].style.width = "100px";

// const hearts = document.querySelectorAll(".heart");
// for (let index = 0; index < hearts.length; index++) {
//   hearts[index].style.backgroundColor = "blue";
// }

const btn = document.createElement("button");
const circle = document.createElement("div");
document.body.append(btn);
circle__wrapper.append(circle);
// circles[1].remove();

circle.classList.add("circle");

// circle.innerHTML = "E";
circle.textContent = "E";
