// const minimum = (number1, number2) => {
//   let minimum = number1;
//   if (number2 && number2 < number1) {
//     minimum = number2;
//   }
//   return minimum;
// };

// console.log(minimum(-101, 7));

// const isEven = (number) => {
//   let result;
//   if (number && number > 0 && (number * 10.0) % 10 === 0) {
//     if (number % 2 === 0) {
//       result = true;
//     } else {
//       result = false;
//     }
//   } else {
//     result = "Invalid input. It should be a positive whole number!";
//   }
//   return result;
// };

// function isEven2(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else if (number % 2 === 1) {
//     return false;
//   } else {
//     return isEven2(number - 2);
//   }
// }

// console.log(isEven2(5));

// const countBs = (string) => {
//   let numberOfB = 0;
//   for (let count = 0; count < string.length; count++) {
//     if (string[count] === "B") {
//       numberOfB += 1;
//     }
//   }
//   return numberOfB;
// };

// console.log(
//   countBs(
//     "Befine a Becursive function isEven Borresponding to this description. The function should accept a single Barameter (a positive, whole number) and return a Boolean."
//   )
// );

// const countChar = (string, character) => {
//   let numberOfCharacter = 0;
//   for (let count = 0; count < string.length; count++) {
//     if (string[count] === character) {
//       numberOfCharacter += 1;
//     }
//   }
//   return numberOfCharacter;
// };

// console.log(countChar("kakkerlak", "k"));
