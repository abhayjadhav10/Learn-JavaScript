// 6 Loops Challenges

/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let z = 1;

while (z <= 5) {
  sum = sum + z;
  z++;
}
// console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let y = 5;

while (y >= 1) {
  countdown.push(y);
  y--;
}
// console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// let teaCollection = []
// let takeTeaType = 0
// do {
//    takeTeaType = prompt("Enter Your Favourite tea Type")
//    if (takeTeaType !== "stop") {
//       teaCollection.push(takeTeaType)
//    }
// } while (takeTeaType !== "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total = 0;
let addNumber = 1;

do {
  total = total + addNumber;
  addNumber++;
} while (addNumber <= 3);

// console.log(`the sum of all numbers from 1 to 3 is ${total}`);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let currentNumbers = [2, 4, 6];
let multipliedNumbers = [];

for (let i = 0; i < currentNumbers.length; i++) {
  const element = currentNumbers[i] * 2;
  multipliedNumbers.push(element);
}
// console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  const element = cities[i];
  cityList.push(element);
}
// console.log(cityList);

// 10 Challenges

/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let selectedTeas = [];
let teas = ["green tea", "black tea", "chai", "oolong tea"];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}

// console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let newCities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < newCities.length; i++) {
  if (newCities[i] === "Paris") {
    continue;
  }

  visitedCities.push(newCities[i]);
}

// console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

// console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let newTeas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of newTeas) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}

// console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityNewPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityNewPopulation = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }

  cityNewPopulation[city] = citiesPopulation[city];
}

// console.log(cityNewPopulation);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   */

let worldCities = {
  Sydney: 5000000,
  Paris: 2200000,
  Tokyo: 9000000,
  Berlin: 3500000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }

  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
// let availableteas = []

// teaCollection.forEach(tea => {
//    if (tea === "chai") {
//       break;
//    }

//    availableteas.push(tea)

// });

// console.log(availableteas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let availableCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

availableCities.forEach((city) => {});

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let randomNumbers = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] === 7) {
    continue;
  }
  doubledNumbers.push(randomNumbers[i] * 2);
}

// console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let currentTeas = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];
let shortTeas = [];

for (const tea of currentTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}

// console.log(shortTeas);
