// function first(cb) {
//   setTimeout(() => {
//     console.log("salom");
//     cb();
//   }, 1000);
// }
// function secon() {
//   console.log("qalesz");
// }

// first(secon);

// const thief = {
//   jacket: "blue",
//   height: 1.9,
//   colors: {
//     hair: "dark",
//     skin: "yellow",
//   },
//   howout: function () {
//     console.log("Fast help doors!");
//   },
// };

// const { height, jacket } = thief;
// console.log(height);

// thief.howout();

// console.log(Object.keys(thief).length);
// for (let key in thief) {
//   if (typeof thief[key] === "object") {
//     for (let i in thief[key]) {
//       console.log(`property ${i} has value ${thief[key][i]}`);
//     }
//   } else {
//     console.log(`property ${key} has value ${thief[key]}`);
//   }
// }

// const universitet = {
//   manzil: {
//     viloyat: "Toshkent",
//     shahar: "Toshkent",
//     kocha: "Amir Temur",
//     uy: 74,
//   },
//   yonalishlar: {
//     aloqa: {
//       phonealoqasi: "KIF",
//       audioaloqa: "KIF2",
//     },
//     dasturlash: {
//       injenering: "Dasturiy injenering",
//       xavfsizlik: "Axborot xavfsizligi",
//     },
//   },
//   yoshi: 1955,
//   tili: "ozbek",
// };

// const { injenering, xavfsizlik } = universitet.yonalishlar.dasturlash;
// for (let key in universitet) {
//   if (typeof universitet[key] === "object") {
//     for (let i in universitet[key]) {
//       if (typeof universitet[key][i] === "object") {
//         for (let j in universitet[key][i]) {
//           console.log(`property ${j} value ${universitet[key][i][j]}`);
//         }
//       } else {
//         console.log(`property ${i} value ${universitet[key][i]}`);
//       }
//     }
//   } else {
//     console.log(`property ${key} value ${universitet[key]}`);
//   }
// }

// console.log(count);

//massivlar

// const arr = [2, 3, 5, 6, 58, 1];
// arr.sort((a, b) => a-b);
// console.log(arr);

// function compare(a, b) {
//   return a - b;
// }

// console.log(arr.length);

// for (let value of arr) {
//   console.log(value);
// }
// arr.forEach(function (item, index, arr) {
//   console.log(`${index}: ${item}: ${arr}`);
// });

// const movies = prompt("What's your favourite movies?");
// const arrmovies = movies.split(", ");
// arrmovies.sort();
// console.log(arrmovies.join(", "));

// const newnumber = number;

// newnumber.x = 15;

// console.log(number);
// console.log(newnumber);

// function nushalash(obj) {
//   let nushaobj = {};
//   for (let key in obj) {
//     nushaobj[key] = obj[key];
//   }
//   return nushaobj;
// }
// const number = {
//   x: 5,
//   y: 10,
// };
// const newnumber = Object.assign({}, number);

// number.x = 15;

// console.log(number);
// console.log(newnumber);

// const ManCity = ["Holland", "deBruyne", "Ederson"];
// const ManUtd = ["Rashford", "Martinez", "Sancho"];

// const Asosiy = [...ManCity, ...ManUtd];

// console.log(Asosiy);

// const car = {
//   color: "red",
//   airbag: true,
//   ballon: 4,
//   motor: 1.5,
// };

// const gm = {
//   airbag: false,
// };

// Object.setPrototypeOf(gm, car);

// const bmw = Object.create(car);

// console.log(bmw);

// const seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   ganres: [],
//   private: false,
//   start: () => {
//     seriesDB.count = +prompt("Nechta serial ko'rdingiz:");

//     while (
//       seriesDB.count == null ||
//       seriesDB.count == "" ||
//       isNaN(seriesDB.count)
//     ) {
//       seriesDB.count = +prompt("Nechta serial ko'rdingiz:");
//     }
//   },
//   remember: () => {
//     let i = 0;
//     do {
//       i++;
//       (first_s = prompt(`Ohirgi ko'rgan serialingiz(${i}):`)),
//         (first_s_ball = prompt(`Nechchi baho berdingiz(${i}):`));

//       if (
//         first_s != null &&
//         first_s_ball != null &&
//         first_s != "" &&
//         first_s_ball != ""
//       ) {
//         seriesDB.series[first_s] = first_s_ball;
//       } else {
//         i--;
//       }
//     } while (i < 2);
//   },
//   check: (count) => {
//     if (count < 5) {
//       console.log("kam serial ko'ribsiz!");
//     } else if (count >= 5 && count < 10) {
//       console.log("narmal holat");
//     } else if (count >= 10) {
//       console.log("vashshekansku!");
//     }
//   },
//   writeGanres: () => {
//     for (let i = 0; i < 3; i++) {
//       seriesDB.ganres[i] = prompt(`Yaxshi ko'rgan janringiz(${i + 1}):`);

//       if (seriesDB.ganres[i] != null && seriesDB.ganres[i] != "") {
//       } else {
//         i--;
//       }
//     }
//     let ganres = prompt(
//       "Yaxshi ko'rgan janringizni vergul orqali yozing:"
//     ).toLowerCase;
//     if (ganres == null || ganres == "") {
//       console.log("noto'g'ri ma'lumot");
//     } else {
//       seriesDB.ganres = ganres.split(", ");
//       seriesDB.ganres.sort();
//     }

//     seriesDB.ganres.forEach((item, index) => {
//       console.log(`Yaxshi ko'ragan janringiz ${index + 1} - nomi ${item}`);
//     });
//   },
//   showDB: (hidden) => {
//     if (!hidden) {
//       console.log(seriesDB);
//     }
//   },
//   visibleDB: () => {
//     if (seriesDB.private) {
//       seriesDB.private = false;
//     } else {
//       seriesDB.private = true;
//     }
//   },
// };
// seriesDB.start();
// seriesDB.remember();
// seriesDB.check(seriesDB.count);
// seriesDB.writeGanres();
// seriesDB.showDB(seriesDB.private);

const btn = document.querySelector("#btn");
const overlay = document.querySelector(".overlay");
// btn.onclick = () => {
//   alert("salom");
// };
// btn.addEventListener("click", () => {
//   alert("salom");
// });
// const cb = (e) => {
//   console.log(e.current);
// };

// btn.addEventListener("click", cb);
// overlay.addEventListener("click", cb);

const link = document.querySelector("a");

link.addEventListener("click", (ev) => {
  ev.preventDefault();
  alert("salom");
});
