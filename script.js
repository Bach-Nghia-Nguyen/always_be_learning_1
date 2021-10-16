// let checkbool = false;
// let btn = document.querySelector(".btn");

// const randomIndex = () => {
//   return Math.round(Math.random() * 255);
// };

// const createRandomColor = () => {
//   return `rgb(${randomIndex()}, ${randomIndex()}, ${randomIndex()})`;
// };

// btn.addEventListener("click", () => {
//   checkbool = !checkbool;
//   console.log(checkbool);
//   if (checkbool) {
//     document.body.style.background = createRandomColor();
//   } else {
//     document.body.style.background = createRandomColor();
//   }
// });

// const factorialRecursive = (n) => {
//   if (n == 0) {
//     return 1;
//   } else {
//     return factorialRecursive(n - 1) * n;
//   }
// };

// console.log(factorialRecursive(8));

// const factorialIterative = (n) => {
//   if (n === 0) {
//     return 1;
//   } else {
//     let product = 1;
//     for (let i = 1; i <= n; i++) {
//       product *= i;
//     }
//     return product;
//   }
// };

// console.log(factorialIterative(8));

// let theNumber = Number(prompt("Enter a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log(`Your number is the square root of ${theNumber * theNumber}`);
// }

// let result = 4096;
// for (let counter = 0; counter < 10; counter++) {
//   result /= 2;
// }
// console.log(result);

// for (let number = 0; number <= 12; number = number + 2) {
//   console.log(number);
// }

// for (let current = 20; current < 30; ++current) {
//   console.log(current);
// }

// switch (prompt("What is the weather like?")) {
//   case "rainy":
//   case "rain":
//     alert("Remember to bring an umbrella.");
//     break;

//   case "sunny":
//   case "yeah":
//     alert("Dress lightly.");
//     break;

//   case "cloudy":
//     alert("Go outside and do something.");
//     break;

//   default:
//     alert("Unknown weather type!");
//     break;
// }

// const drawTriangle = (length) => {
//   let star = "";
//   for (let i = 1; i <= length; i++) {
//     for (let j = 1; j <= i; j++) {
//       star += "#";
//     }
//     star += "\n";
//   }
//   return star;
// };

// console.log(drawTriangle(7));

// const addition = function (a, b) {
//   return a + b;
// };

// console.log(addition(3, 6));

// let z = 77;
// if (true) {
//   var x = 14;
//   let y = 8;
// } else {
//   console.log("k");
// }

// console.log(z + x);

// console.log("The future says:", future());

// function future() {
//   return "You'll never have flying cars";
// }

// const squareThis = (x) => x;

// console.log(squareThis("iifdf", "u", 9));
// console.log(squareThis());

// function minus(a, b) {
//   if (!b) {
//     return -a;
//   } else if (!a) {
//     return -b;
//   } else {
//     return a - b;
//   }
// }

// console.log(minus(56, 18));

// function multiplier(factor) {
//   return (number) => number * factor;
// }

// let twice = multiplier(60);
// console.log(twice(3));

// const power = (base, exponent = 3) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };

// console.l445og(power(5));

// function power(base, exponent) {
//   console.log(`Recursion: Exponent ${exponent}`);
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 10));

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       // console.log("current == target");
//       // console.log(current);
//       // console.log(target);
//       return history;
//     } else if (current > target) {
//       // console.log("current > target");
//       // console.log(current);
//       // console.log(target);
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(13));

// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, "Cows");
//   printZeroPaddedWithLabel(chickens, "Chickens");
//   printZeroPaddedWithLabel(pigs, "Pigs");
// }
// printFarmInventory(7, 12, 3);

// function printZeroPaddedWithLabel(number, label) {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }

// let zen = "K+ the MU vs Benfifca match";

// console.log(typeof zen.toLowerCase());

/**
 * Chapter 4
 *  */

// let day1 = {
//   squirrel: false,
//   events: ["work", "touched tree", "pizza", "running"],
//   hare: {},
// };

// console.log(day1);
// console.log(day1.squirrel);
// console.log(day1.wolf);
// day1.wolf = "console.log";
// console.log(day1.wolf);
// console.log(day1);

// const executive = (func, param) => {
//   console.log("this is function executive");
//   return func(param);
// };
// console.log(executive(definition, 1));

// function definition(x) {
//   const PI = 3.14;
//   let total = PI * (x + 2);
//   console.log("this is function definition");
//   return total;
// }

// function concentrate(nut) {
//   let xy = "stringo";
//   if (true) {
//     var zu = "pepee";
//   }
//   console.log(zu);
//   return xy + nut;
// }

// console.log(concentrate("xiao"));

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join("||"));

// function max(...numbers) {
//   let result = -Infinity;
//   console.log(numbers);
//   for (let number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }
//   return result;
// }

// function min(...numbers) {
//   let result = Infinity;
//   console.log(numbers);
//   for (let number of numbers) {
//     if (number < result) {
//       result = number;
//     }
//   }
//   return result;
// }

// const MIN = -99;
// const MAX = 99;

// function randomIntegerArray(numberOfElements) {
//   let integerArray = [];

//   for (let i = 0; i < numberOfElements; i++) {
//     let randomInteger = Math.round(Math.random() * (MAX - MIN + 1) + MIN);
//     integerArray.push(randomInteger);
//   }
//   return integerArray;
// }

// console.log(min(-8, 9, 3, 6));

// let datRand = randomIntegerArray(5);
// console.log(min());

// function randomPointOnCircle(radius) {
//   let angle = Math.random() * 2 * Math.PI;
//   return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
// }
// console.log(randomPointOnCircle(-5));

// let { ...pen } = {
//   name: "Ferrari",
//   age: 53,
//   "ben attack": true,
//   4: "power",
// };
// console.log(pen);

// let penn23 = {
//   name: "Ferrari",
//   age: 53,
//   "ben attack": true,
//   4: "power",
//   name: "jffjdj",
// };

// for (let keys in penn23) {
//   console.log(keys, penn23[keys]);
// }

// let string = JSON.stringify({
//   squirrel: false,
//   events: ["work", "touched tree", "pizza", "running"],
//   bonJovi: (x) => {
//     return x + 2;
//   },
// });
// console.log(string);

// console.log(JSON.parse(string)["events"][2]);

// const iAmArrayObject = {
//   0: "zero",
//   1: "one",
//   2: "two",
// };

// const iAmArray = ["zero", "one", "two"];

// console.log(iAmArrayObject[3]);

const nums = [[1, 2], [10]];

// const cloneNums = JSON.parse(JSON.stringify(nums));
const cloneNums = nums;

// Let's change the first item in the first nested item in our cloned array.
cloneNums[0][0] = "👻";

// console.log(cloneNums);
// [ [ '👻', 2 ], [ 10 ], [ 300 ] ]

// NOOooo, the original is also affected
// console.log(nums);
// [ [ '👻', 2 ], [ 10 ], [ 300 ] ]

// function isThisPrimeNumber(number) {
//   // number must be positive integer, and 1 is not prime number
//   if (number < 2) return false;
//   if ((number * 10) % 10 !== 0) return false;

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isThisPrimeNumber("jjj"));

// function recursive(x) {
//   if (x !== 0) {
//     console.log(x);
//     recursive(x - 1);
//   }
// }
// recursive(10);

// let functionXX = () => {
//   return 1;
// };

// let functionYY = () => {
//   return 1;
// };

// let ii = Object.is(functionXX, functionYY);
// console.log(ii);

/**
 * Chapter 5
 *  */

const SCRIPTS = require("./scripts");

// let total = 0,
//   count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);

// let labels = [];

// repeat(5, (i) => {
//   labels.push(`Unit ${i + 1}`);
// });

// console.log(labels);

// function greaterThan(n) {
//   return (m) => m > n;
// }

// let greaterThan10 = greaterThan(10);

// console.log(greaterThan10(11));

// function noisy(f) {
//   return (...args) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// }

// console.log(noisy(Math.max)(4, -9, 5, 10, 0, -1));

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }

// function unless(test, then) {
//   if (!test) then();
// }

// repeat(9, (n) => {
//   unless(n % 2 == 1, () => {
//     console.log(n, "is even");
//   });
// });

let foury = [4, -9, 5, 14, 10, 0, -1];

// foury.forEach((boi) => {
//   console.log(boi >= 3);
// });

function filter(array, test) {
  let passed = [];

  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }

  return passed;
}

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

// console.log(filter(SCRIPTS, (script) => script.living));
let rtlScripts = SCRIPTS.filter((s) => s.direction == "rtl");
// console.log(map(rtlScripts, (s) => s.name));

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// console.log(
//   SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
//   })
// );

let biggest = null;

for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}

// console.log(biggest);

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// console.log(
//   Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
// );

// console.log(
//   Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
// );

let total = 0,
  count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
// console.log(Math.round(total / count));

let total2 = 0,
  count2 = 0;
for (let script of SCRIPTS) {
  if (!script.living) {
    total2 += script.year;
    count2 += 1;
  }
}
// console.log(Math.round(total2 / count2));

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

// console.log(characterScript(2605));

// let tornadoCoconut = " 🌪  🥥 ";
// for (let char of tornadoCoconut) {
//   console.log(char);
// }

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    // console.log(known);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

// let dragon = ["head", "tail", "wings", 1, true, 90, "flying"];

// console.log(dragon.indexOf("wings"));

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);

  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// console.log(textScripts("Xin chào"));
// console.log(textScripts("﷽ מעמדה הבינלאומי של"));

// 1 - 100
// let number;

// function guessTheRightNumber() {
//   if (number > 50) console.log("Number is greater than 50");

//   if (number % 2 == 0) console.log("Number is even");

//   if (number <= 25) console.log("Number is from 1 to 25");

//   if (number < 10) console.log("Number has 1 digit");
// }

