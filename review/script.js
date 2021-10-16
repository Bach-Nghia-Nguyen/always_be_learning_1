// let promise = new Promise((resolve, reject) => {
//   let a = 2 + 1;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("Failure");
//   }
// });

// let appError = "";

// promise
//   .then((result) => console.log("it is", result))
//   .catch((err) => console.log("this is ", err));

// function test() {
//   try {
//     let response = {};
//     response.status = 201;
//     if (response.status === 200) {
//       console.log("Ok");
//     } else if (response.status === 201) {
//       throw new Error("this is error");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// test();

let token = { token: "abcd" };
localStorage.setItem("token", JSON.stringify(token));
localStorage.setItem("test", 6);

let readToken = localStorage.getItem("token");
console.log(JSON.parse(readToken).token);
