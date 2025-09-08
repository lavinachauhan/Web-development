// for(let i = 0; i < 5; i++){
//     console.log(`Hello ${i}`);
// }
// console.log("bye");
// console.log(process.argv);
// let args = process.argv;

// for(let i = 0; i < args.length; i++){
//     console.log(`Arg ${i}, ${args[i]}`);
// }

// let ans = require("./Fruits");
// console.log(ans);
// console.log(ans);
// console.log(ans.sum(2,4));
// console.log(ans.PI);

import {sum, PI} from "./math.js"
import {generate} from "random-words"
console.log(generate());


console.log(sum(2,4));