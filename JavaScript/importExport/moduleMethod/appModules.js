// Default Import

import multiply from "./mathOperationsM.js"
console.log(multiply(10,5));



// Named Import

import {add, subtract, divide} from "./mathOperationsM.js";
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(divide(10, 5));
