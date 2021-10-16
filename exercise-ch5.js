/**
 * Flattening
 */

let nestedArray = [
  [1, 2, 3],
  [4, 5],
  [6],
  7,
  [8, [9, 10, [11, [14, [["true"], ["uut", 3, [45, (x) => x + 1]]]]]], 12],
];
let nested = [[1, 2, 3], [4, 5], [6]];
const another = [8, "u", false, "ututu"];

// Solution 1: Spread operator and concat() method - 1 level depth
// console.log([].concat(...nestedArray));

// Solution 2: Reduce() and concat() methods - 1 level depth
// console.log(
//   nestedArray.reduce((accumulate, currentValue) => {
//     return accumulate.concat(currentValue);
//   }, [])
// );

// Solution 3: Concat() and apply() method - 1 level depth
// console.log([].concat.apply([], nestedArray));

// Solution 4: Array.prototype.flat()
// console.log(nestedArray.flat(Infinity));

function deepFlattening(array) {
  return array.flat(Infinity);
}

// console.log(deepFlattening(nestedArray));

/**
 * Your own loop
 */

function loop({ initial, test, update, body }) {
  for (let i = initial; test(i); i = update(i)) {
    body(i);
  }
}

const greaterThan = (n) => (i) => i > n;
const decrementBy = (n) => (i) => i - n;

// loop({
//   initial: 6,
//   test: greaterThan(0),
//   body: console.log,
//   update: decrementBy(1),
// });

/**
 * Everything
 */

const someArray = [10, 14, 17, -88, 0.5, 8];

// loop version
function everyLoop(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

function lessThan(m) {
  return (n) => n < m;
}

// console.log(everyLoop(someArray, lessThan(10)));

// some() method version // => ???

function everySome(array, test) {
  return !array.some((element) => !test(element)); // De Morgan's Laws
}

// console.log(everySome(someArray, lessThan(10)));

/**
 * Dominant writing direction
 */

const SCRIPTS = require("./scripts");

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupDirection) {
  let counts = [];
  for (let item of items) {
    let direction = groupDirection(item);
    let known = counts.findIndex((c) => c.direction == direction);
    // console.log(known);
    if (known == -1) {
      counts.push({ direction, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ direction }) => direction != "none");

  switch (scripts.length) {
    case 0:
      return "no dominant direction found";
    case 1:
      return scripts[0].direction;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return "no dominant direction found";
      } else {
        return scripts.reduce((acc, cur) =>
          acc.count >= cur.count ? acc.direction : cur.direction
        );
      }
  }
}

// console.log(dominantDirection("Hello!"));
// console.log(dominantDirection(" مساء الخير"));
