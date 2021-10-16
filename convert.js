// "use strict";
// https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk
// const fetch = require("node-fetch");

// const getCards = async () => {
//   fetch(
//     "https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk"
//   )
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// };

// getCards();
// console.log("ryeha".charAt(3));

// var a;
// var b = (a = 3) ? true : false;
// console.log(b);

// function getElement(arr, pos) {
//   return arr[pos];
// }

//let arr = [1, 2, 3, 4, 5];

// const arr = [1, 4, 3, 4, 5];

// try {
//   arr = [4, 2];
//   console.log(arr.sort());
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log(arr.sort());
// }

// const arrayMinMax = (arr) =>
//   arr.reduce(
//     ([min, max], val) => [Math.min(min, val), Math.max(max, val)],
//     [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
//   );

// function getMaxLessThank(n = 928, k = 443) {
//   let results = [];
//   for (let a = 1; a < n; a++) {
//     for (let b = a + 1; b <= n; b++) {
//       let decAnd = a & b;
//       results.push(decAnd);
//     }
//   }
//   return arrayMinMax(results.filter((e) => e < k))[1];
// }

// console.log(getMaxLessThank());

// console.log(parseInt(1001, 2));
// console.log(17 & 28);

// let rawn = new Date(1996, 01, 26);
