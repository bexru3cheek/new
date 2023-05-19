"use strict";

const adv = document.querySelectorAll(".promo__adv img"),
  wrapper = document.querySelector(".promo__bg"),
  genre = wrapper.querySelector(".promo__genre"),
  seriesList = document.querySelector(".promo__interactive-list");

const seriesDB = {
  series: [
    "OMAR",
    "The Final Legacy",
    "ERTUGRUL",
    "MAGNIFICENT CENTURY",
    "GREAT SELJUKS: GUARDIANS...",
  ],
};

seriesList.innerHTML = "";
seriesDB.series.forEach((item, index) => {
  seriesList.innerHTML += `
  <li class="promo__interactive-item">${index + 1}: ${item}
  <div class="delete"></div>
</li>
  `;
});

adv.forEach((item) => {
  item.remove();
});

genre.textContent = "comedy";

wrapper.style.backgroundImage = 'url("img/1.jpg")';
