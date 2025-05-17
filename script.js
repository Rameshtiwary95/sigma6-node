// // const info = require("./Fruits");

// // console.log(info[0].name);              // Should print the object with sum, mul, g, PI


// const figlet = require("figlet");

// figlet("By Ramesh Tiwary", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import {sum,PI} from "./math.js";
import { generate} from "random-words";
// console.log(sum(PI));
console.log (generate());
