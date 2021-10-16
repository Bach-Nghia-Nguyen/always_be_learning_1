class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

// console.log(Rabbit.arguments);

let blackRabbit = new Rabbit("black");
let whiteRabbit = new Rabbit("white");
let attackingRabbit = new Rabbit("attack");
let defendingRabbit = new Rabbit("defend");

// whiteRabbit.speak("Control F");
// defendingRabbit.speak("Que?");
// console.log(Rabbit.length);

// let objective = new (class {
//   getWord() {
//     return "hello";
//   }
// })();

// console.log(objective.getWord());

Rabbit.prototype.teeth = "small";
// console.log(blackRabbit.teeth);
// blackRabbit.teeth = "weird flex but ok";
// console.log(blackRabbit.teeth);
// console.log("++++++++++++++++++++++++++++++");
// console.log(attackingRabbit.teeth);
// console.log("==============================");
// console.log(new Rabbit("machine").speak());
// new Rabbit("grassland").speak("Let's fly");

// console.log([1, "thank", -6, true].toString());
console.log([1, "thank", -(-6), true].join("-&-"));
