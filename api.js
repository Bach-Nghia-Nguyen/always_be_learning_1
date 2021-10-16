// function okay(k, n = 0, s = []) {
//   if (isNaN(k) || k <= 0 || !Number.isInteger(k)) return n;

//   if (k === 1) return { s, n };

//   if (k % 2 === 0) {
//     s.push(k);
//     return okay(k / 2, (n += 1), s);
//   } else {
//     s.push(k);
//     return okay(3 * k + 1, (n += 1), s);
//   }
// }

// console.log(okay(27));

// let lens = "けいかんじぎするみなもと。薬おんとうたまご。交錯色盲恨み。";
// console.log(lens.split("。"));

let timestone = document.getElementById("timestone");

console.log(timestone);
timestone.addEventListener("change", (e) => {
  console.log("change time:", e.target.value);
});
