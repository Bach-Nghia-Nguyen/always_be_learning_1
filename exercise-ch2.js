const triangle = (length) => {
  for (let i = 1; i <= length; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += `${i} `;
    }
    console.log(line);
  }
};

triangle(7);

const SuperFizzBuzz = (start, end) => {
  let object = {};
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      // console.log(`${i} SuperFizzBuzz`);
      object["no_" + i] = "SuperFizzBuzz";
    } else if (i % 5 === 0 && i % 7 === 0) {
      // console.log(`${i} SuperBuzz`);
      object["no_" + i] = "SuperBuzz";
    } else if (i % 3 === 0 && i % 7 === 0) {
      // console.log(`${i} SuperFizz`);
      object["no_" + i] = "SuperFizz";
    } else if (i % 3 === 0 && i % 5 === 0) {
      // console.log(`${i} FizzBuzz`);
      object["no_" + i] = "FizzBuzz";
    } else if (i % 7 === 0) {
      // console.log(`${i} Super`);
      object["no_" + i] = "Super";
    } else if (i % 5 === 0) {
      // console.log(`${i} Buzz`);
      object["no_" + i] = "Buzz";
    } else if (i % 3 === 0) {
      // console.log(`${i} Fizz`);
      object["no_" + i] = "Fizz";
    }
  }
  console.log(object);
};

// SuperFizzBuzz(1, 120);

const chessBoard = (size) => {
  for (let i = 1; i <= size; i++) {
    let row = "";
    if (i % 2 === 0) {
      for (let j = 1; j <= size; j++) {
        row += "# ";
      }
    } else {
      for (let j = 1; j <= size; j++) {
        row += " #";
      }
    }
    console.log(row);
  }
};

// chessBoard(6);
