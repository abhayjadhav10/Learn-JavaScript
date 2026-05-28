/* 
FOR LOOP — Problem 1

Given:

let scores = [45, 67, 82, 49, 51, 78];

👉 Store ONLY scores greater than 50 in an array called:

passedScores

Think:
positive condition OR skip?
*/

let scores = [45, 67, 82, 49, 51, 78];
let passedScores = []

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 50) {
        passedScores.push(scores[i])
    }
    
}

// console.log(passedScores);


/* 
FOR LOOP — Problem 2 (Early Exit)

Given:

let temperatures = [32, 34, 36, 40, 45, 28];

👉 Stop the loop when you encounter a temperature ABOVE 40.
👉 Store all previous temperatures inside:

safeTemps

Trigger word here: "STOP"
Choose your control wisely.
*/

let temperatures = [32, 34, 36, 40, 45, 28];
let safeTemps = []

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 40) {
        break;
    }
    safeTemps.push(temperatures[i])
}

// console.log(safeTemps);


/* 
WHILE LOOP — Problem 1

Given:

let stockPrices = [120, 125, 130, 90, 85];

👉 Stop checking prices when a price drops BELOW 100.
👉 Store previous prices inside:

stablePrices

Remember:
You must control the index manually.
*/

let stockPrices = [120, 125, 130, 90, 85];
let j = 0
let stablePrices = []

while (j < stockPrices.length) {
    if (stockPrices[j] < 100) {
        break
    }
    stablePrices.push(stockPrices[j])
    j ++
}

// console.log(stablePrices);


/* 
WHILE LOOP — Problem 2 (Accumulator)

👉 Start from number 1.
👉 Keep multiplying numbers until the result becomes GREATER than 100.

Store the result in:

product

⚠️ This is NOT addition — watch your accumulator.
*/

let product = 1
let k = 1

while (product < 100) {
    product = product * k
    k ++
}

// console.log(product);


/* 
DO...WHILE — Problem 1

Start with:

let fuel = 5;

👉 Reduce fuel by 1 each iteration.
👉 Store fuel levels inside:

fuelLevels

Stop when fuel reaches 0.

Ask yourself:
Would a normal while behave differently?
*/

let fuel = 5;
let fuelLevels = []

do {
    fuelLevels.push(fuel)
    fuel --
} while (fuel > 0);

// console.log(fuelLevels);


/* 
DO...WHILE — Problem 2 (Sneaky Boundary)

👉 Start adding numbers from 10 downward.
👉 Keep adding until the total becomes GREATER than 30.

Store the total in:

sum

Be careful:
Execution happens BEFORE checking.
*/

let availableNumbers = 10
let sum = 0

do {
    sum = availableNumbers + sum
    availableNumbers --
} while (sum <= 30);

// console.log(sum);


/* 
FOR...OF — Problem 1

Given:

let foods = ["pizza", "burger", "salad", "pasta", "soup"];

👉 Skip "salad"
👉 Convert everything else to UPPERCASE
👉 Store inside:

favoriteFoods

Ask yourself:
continue OR condition?
*/

let foods = ["pizza", "burger", "salad", "pasta", "soup"];
let favoriteFoods = []

for (const items of foods) {
    if (items === "salad") {
        continue;
    }
    favoriteFoods.push(items.toUpperCase())
}

// console.log(favoriteFoods);


/* 
FOR...OF — Problem 2 (Loop Selection Test)

Given:

let movieRatings = [7.2, 8.5, 9.1, 6.8, 9.5];

👉 Stop the loop when a rating ABOVE 9 is found.
👉 Store previous ratings inside:

topRatings

Notice the trigger word again:
"STOP"
*/

let movieRatings = [7.2, 8.5, 9.1, 6.8, 9.5];
let topRatings = []

for (const movie of movieRatings) {
    if (movie > 9) {
        break;
    }
    topRatings.push(movie)
}

// console.log(topRatings);
