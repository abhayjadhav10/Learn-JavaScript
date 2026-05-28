// generate a random business name by combining three parts adjectives, Shop name, Another word but without using arrays.

let adj;
let shop;
let another;

let rand1 = Math.floor(Math.random() * 3) + 1;
let rand2 = Math.floor(Math.random() * 3) + 1;
let rand3 = Math.floor(Math.random() * 3) + 1;

if (rand1 === 1) {
    adj = "Crazy"
} else if (rand1 === 2) {
    adj = "Amazing"
} else {
    adj = "Fire"
}

if (rand2 === 1) {
    shop = "Engine"
} else if (rand2 === 2){
    shop = "Foods"
} else {
    shop = "Garments"
}

if (rand3 === 1) {
    another = "Bros"
} else if (rand3 === 2) {
    another = "Limited"
} else {
    another = "Hub"
}

let ShopName = `Shop Name is: ${adj} ${shop} ${another}`
console.log(ShopName);
