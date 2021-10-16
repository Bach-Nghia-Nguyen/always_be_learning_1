const foo = { name: "tom", age: 39, nervous: false, isMature: true };
const bar = { name: "alan", age: 45, nervous: false, height: 188 };
const baz = { name: "robert", age: 27, nervous: true };

// console.table([
//   bar,
//   foo,
//   baz,
//   6,
//   "yes",
//   false,
//   [true, "ghost", ["help", true], "uu", 98],
// ]);

// console.log(5 < 2 && "lele");

// const func = function (a, b) {
//   return arguments.length;
// };

// const result = func(4, 3, 2, 1);
// console.log(result);

const createURLPath = ({ endpoint, queries }) => {
  let urlString = "";
  if (endpoint) urlString += `${endpoint}?`;

  if (queries && queries instanceof Object) {
    for (let i = 0; i < Object.keys(queries).length; i++) {
      if (i === Object.keys(queries).length - 1) {
        // the last query doesn't contain ampersand after it
        let key = Object.keys(queries)[i];
        return (urlString += `${key}=${queries[key]}`);
      }

      let key = Object.keys(queries)[i];
      urlString += `${key}=${queries[key]}&`;
    }
  }

  return urlString;
};

let urlPoint = createURLPath({
  endpoint: `/discover/movie`,
  queries: {
    language: "en-US",
    sort_by: "popularity.desc",
    include_adult: false,
    include_video: false,
    page: 1,
  },
});

// console.log(urlPoint);
// `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// console.log("$", numberWithCommas(12394829));

const timeConvert = (number) => {
  let num = number;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + " hour(s) " + rminutes + " minute(s)";
};

console.log(timeConvert(107));
