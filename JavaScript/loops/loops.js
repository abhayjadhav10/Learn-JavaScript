// While loop

// Q1

/*
let i = 1
let sum = 0

while (i <= 5) {
  sum = sum + i
  i++
}
console.log(sum);
*/

// Q2

/*
let j = 1
while (j <= 5) {
  console.log(j);
  j++
}
*/

// Do While Loop

// Q3

/*
let teaCollection = [];
let teaType;

do {
  teaType = prompt(`Write your favourite tea Type and write "Stop" to stop`);

  if (teaType !== "Stop") {
    teaCollection.push(teaType);
  }

} while (teaType !== "Stop");
*/

// Q4

/*
let k = 1
let total = 0

do {
  if (k <= 3) {
    total = total + k
    k++;
  }
} while (k <= 3);

console.log(total);
*/

// For Loop

// Q5

/*
let numbers = [2, 4, 6];
let multipliedNumbers = [];

for (let l = 0; l < numbers.length; l++) {
  let takeNumber = numbers[l] * 2;
  multipliedNumbers.push(takeNumber)
}
console.log(multipliedNumbers);
*/
/*
for (let i = 1; i <= 10; i++) {
  console.log(i);
  
  for (let j = 1; j <= 10; j++) {
    console.log(i + `*` + j + ` = ` + i*j);
    
  }
}
  */

let jerseyNo = {
  "Virat Kohli" : 18,
  "Rohit Sharma" : 45,
  "AB Devilliers" : 17,
  "MS Dhoni" : 7
}

// console.log(Object.keys(jerseyNo));

for (const key in jerseyNo) {
  // console.log(jerseyNo[key]);
} 