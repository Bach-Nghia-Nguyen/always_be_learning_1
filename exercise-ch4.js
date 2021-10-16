// const loopRange = ({ start, end, step, numberArray }) => {
//   for (let element = start; element <= end; element += step) {
//     numberArray.push(element);
//   }
// };

// const range = ({ start, end, step }) => {
//   let numberArray = [];

//   if (start && end && typeof start === "number" && typeof end === "number") {
//     if (start <= end) {
//       if (step && typeof step === "number" && step > 0) {
//         for (let element = start; element <= end; element += step) {
//           numberArray.push(element);
//         }
//       } else if (step && typeof step === "number" && step <= 0) {
//         return "Step value should be positive, or it will cause an infinite loop";
//       } else {
//         for (let element = start; element <= end; element += 1) {
//           numberArray.push(element);
//         }
//       }
//     } else if (end <= start) {
//       if (step && typeof step === "number" && step > 0) {
//         for (let element = start; element >= end; element -= step) {
//           numberArray.push(element);
//         }
//       } else if (step && typeof step === "number" && step <= 0) {
//         return "Step value should be positive, or it will cause an infinite loop";
//       } else {
//         for (let element = start; element >= end; element -= 1) {
//           numberArray.push(element);
//         }
//       }
//     }
//   } else if (start && !end && typeof start === "number") {
//     numberArray.push(start);
//   } else {
//     return "Invalid input. Input should be number";
//   }

//   return numberArray;
// };

// const sum = (array) => {
//   let sum = 0;
//   for (let number of array) {
//     sum += number;
//   }
//   return sum;
// };

// let thatArray = range({ start: 2, end: 20, step: 2 });
// console.log(thatArray);
// console.log(sum(thatArray));

// const reverseThis = [1, 2, 6, 7, 9, true];

// function reverseArray(array) {
//   const localArray = [...array];
//   const theLength = localArray.length;
//   const newReversedArray = [];

//   for (let count = 0; count < theLength; count++) {
//     let element = localArray.pop();
//     newReversedArray.push(element);
//   }

//   return newReversedArray;
// }

// function reverseArrayInPlace(array) {
//   const theLength = array.length;

//   for (let count = 0; count < theLength / 2; count++) {
//     // swap
//     [array[count], array[theLength - 1 - count]] = [
//       array[theLength - 1 - count],
//       array[count],
//     ];
//   }

//   return array;
// }

// console.log(reverseThis);
// console.log(reverseArray(reverseThis), "reverseArray() function");

// console.log(reverseThis);

// console.log(reverseArrayInPlace(reverseThis), "reverseArrayInPlace() function");
// console.log(reverseThis);

// const datArray = [1, 2, 3];

// function arrayToList(array) {
//   let list;

//   if (!array || Array.isArray(array) === false) {
//     return "Invalid input. Please input an array!";
//   } else if (array.length === 0) {
//     list = null;
//   } else {
//     const localArray = [...array].reverse();

//     for (let index = 0; index <= localArray.length - 1; index++) {
//       list = { value: localArray[index], rest: list };
//       if (index === 0) {
//         list = { value: localArray[index], rest: null };
//       }
//     }
//   }

//   return list;
// }

// console.log(arrayToList(datArray));

// let infinityStones = {
//   value: "soul stone",
//   rest: {
//     value: "reality stone",
//     rest: {
//       value: "space stone",
//       rest: {
//         value: "mind stone",
//         rest: {
//           value: "time stone",
//           rest: {
//             value: "power stone",
//             rest: null,
//           },
//         },
//       },
//     },
//   },
// };

// function listToArray(list) {
//   let array = [];

//   for (let node = list; node !== null; node = node.rest) {
//     array.push(node.value);
//   }

//   return array;
// }

// console.log(listToArray(infinityStones));

// function prepend(element, list) {
//   if (list === null) {
//     let localList = {};
//     localList.value = element;
//     localList.rest = list;
//     return localList;
//   } else if (typeof list === "object") {
//     list.value = element;
//     return list;
//   } else {
//     let newlList = {};
//     localList.value = element;
//     localList.rest = list;
//     return newlList;
//   }
// }

// function prepend(element, list) {
//   return {
//     value: element,
//     rest: list,
//   };
// }

// console.log(prepend(10, infinity));

// function nth(list, number) {
//   let array = [];

//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }

//   return array[number];
// }

// function nth2(list, number) {
//   return listToArray(list)[number];
// }

// function nthRecursive(list, number) {
//   if (number === 0) {
//     return list.value;
//   } else if (list.rest === null) {
//     return undefined;
//   } else {
//     return nthRecursive(list.rest, number - 1);
//   }
// }

// console.log(nthRecursive(infinityStones, 2));
// console.log(nth2(infinityStones, 4));
// console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

// function deepEqual(object1, object2) {
//   if (
//     typeof object1 === "object" &&
//     object1 !== null &&
//     typeof object2 === "object" &&
//     object2 !== null
//   ) {
//     let properties1 = Object.keys(object1);
//     let properties2 = Object.keys(object2);

//     if (properties1.length !== properties2.length) return false;

//     for (let i = 0; i <= properties1.length - 1; i++) {
//       if (properties1[i] === properties2[i]) {
//         if (
//           object1[properties1[i]] instanceof Object &&
//           object2[properties2[i]] instanceof Object
//         ) {
//           if (
//             deepEqual(object1[properties1[i]], object2[properties2[i]]) ===
//             false
//           ) {
//             return false;
//           }
//         } else if (object1[properties1[i]] !== object2[properties2[i]]) {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }

//     return true;
//   } else {
//     return "Invalid input";
//   }
// }

// const submit = {
//   gin: "soul",
//   kekkei: "time",
//   "John Doe": "before",
//   3: ["4", -87, false, "  Troy Nguyen "],
//   4: (x, y) => x + y,
//   ens: 7,
//   utiks: { right: "left", here: 18, rest: { value: 76, rest: { none: null } } },
// };

// const obey = {
//   gin: "soul",
//   kekkei: "time",
//   "John Doe": "before",
//   3: ["4", -87, false, "  Troy Nguyen "],
//   4: (x, y) => {
//     return x + y + 4;
//   },
//   ens: 7,
//   utiks: {
//     right: "left",
//     here: 18,
//     rest: { value: 76, rest: { none: null } },
//   },
// };

// const shala = [
//   "meo la",
//   0,
//   { nest: "bird", next: { value: "play", next: null } },
//   "wheen",
// ];

// const balack = [
//   "meo la",
//   0,
//   { nest: "bird", next: { value: "play", next: null } },
//   "wheen",
// ];

// console.log(deepEqual(balack, shala));

// let x = function (x) {
//   return x + 2;
// };

// let y = function () {
//   return 2;
// };

// console.log(x(8) === y());

// const keys = ["come again", true, "hens", "will", "west"];
// const key2 = ["come ", "hens", "tilt", "west", 6, 6, "come", "come ", true];

// let combine = keys.concat(key2);

// combine = combine.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });

// console.log(combine);

// function deepEqual2(input1, input2) {
//   // compare between 2 primative values
//   if (input1 === input2) {
//     return true && Object.is(input1, input2);
//   } else if (
//     typeof input1 === "object" &&
//     input1 !== null &&
//     typeof input2 === "object" &&
//     input2 !== null
//   ) {
//     // inputs are objects => do a deep property value comparison
//     // join keys from both objects together in one array
//     let keys = Object.keys(input1).concat(Object.keys(input2));

//     // filter out duplicate keys
//     keys = keys.filter(function (value, index, self) {
//       return self.indexOf(value) === index;
//     });

//     for (let property of keys) {
//       if (
//         typeof input1[property] === "object" &&
//         typeof input2[property] === "object"
//       ) {
//         if (deepEqual2(input1[property], input2[property]) === false) {
//           return false;
//         }
//       } else if (input1[property] !== input2[property]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(deepEqual({ here: "is", here: "is" }, { here: "is" }));

// function deepEqual3(a, b) {
//   if (a === b) return true;

//   if (
//     a === null ||
//     typeof a !== "object" ||
//     b === null ||
//     typeof b !== "object"
//   )
//     return false;

//   let propsInA = 0,
//     propsInB = 0;

//   for (let prop in a) propsInA += 1;

//   for (let prop in b) {
//     propsInB += 1;
//     if (!(prop in a) || !deepEqual3(a[prop], b[prop])) return false;
//   }

//   return propsInA === propsInB;
// }

// let obito = { foo: 2, fridge: { pulp: true } };

// console.log(
//   deepEqual3({ foo: 2, fridge: { pulp: true }, tree: "leave" }, obito)
// );
