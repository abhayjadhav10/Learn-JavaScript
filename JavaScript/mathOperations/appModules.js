// Default Import

import multiply from "./mathOperations.js"
console.log(multiply(10,5));



// Named Import

import {add, subtract, divide} from "./mathOperations.js";
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(divide(10, 5));
