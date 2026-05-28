// Faulty calculator

let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
let operator = prompt("Enter a operator between +, -, * or /");

let faulty = Math.random() < 0.1;

if (faulty) {
  if (operator === "+") {
    operator = "-";
  } else if (operator === "*") {
    operator = "+";
  } else if (operator === "-") {
    operator = "/";
  } else if (operator === "/") {
    operator = "**";
  }
}

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
}

console.log("result: ", result);
