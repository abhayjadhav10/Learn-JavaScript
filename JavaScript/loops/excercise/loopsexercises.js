// Code with Harry Challenge

/*

let randomNumber = Math.floor(Math.random() * 101);
let attemptes = 100
let guess;

while (true) {
    
    guess = Number(prompt("Guess a Number between 1 and 100"))

    if (Number.isNaN(guess)) {
        alert("Please Enter a Valid Number")
        continue;
    }

    if (guess > 100 || guess < 0) {
        alert("Enter a Number Between 1 to 100")
        continue;
    }

    attemptes --

    if (guess === randomNumber) {
        let score = 100 - attemptes;
        alert(`You Guessed the Correct Number in : ${score} attempts`)
        break;
    } else if (guess > randomNumber) {
        alert("Your Guess is Bigger than the actual Number")
    } else if (guess < randomNumber) {
        alert("Your Guess is Smaller than the actual Number")
    }

}

*/

// Chatgpt Exercise

/*
1) Create a number guessing game.

👉 Generate a random number between 1 and 50.

Rules:
- User only gets 5 attempts.
- After every wrong guess, tell them:
   "Too High" or "Too Low"

If they guess correctly:
👉 Show: "You won in X attempts"

If attempts finish:
👉 Show: "Game Over. The number was ___"

Think carefully:
Which loop is best when attempts are LIMITED?
*/

/*
let randomNumber = Math.floor(Math.random() * 50 + 1);
let attempts = 0;
let guess;

while (true) {
  guess = Number(prompt("Enter a Number Between 1 to 50"));

  if (Number.isNaN(guess)) {
    alert("Please Enter a valid number");
    continue;
  }

  if (guess > 50 || guess < 0) {
    alert("Please enter a number between 1 to 50");
    continue;
  }

  attempts++;

  if (guess === randomNumber) {
    alert(`You won in ${attempts} attempts`);
    break;
  } else if (guess > randomNumber) {
    alert("Too High");
  } else if (guess < randomNumber) {
    alert("Too Low");
  }

  if (attempts >= 5) {
    alert(`Game Over. The number was ${randomNumber}`);
    break;
  }
}
*/

/*
2) Keep asking the user to enter numbers.

👉 Add them into a total.

Stop when the total becomes GREATER than 100.

Then show:
"Final sum is ___"

IMPORTANT:
- Ignore invalid numbers.
- Do NOT add them.

Think:
What controls the loop?
The input?
Or the sum?
*/

/*
let total = 0;
let input;

while (true) {
  input = prompt("Enter a Number");

  if (input === null) {
    break;
  }

  let numberInput = Number(input)
  
  if (Number.isNaN(numberInput)) {
    alert("Invalid Number");
    continue;
  }

  total = total + numberInput;

  if (total > 100) {
    alert(`Your final sum is ${total}`);
    break;
  }
}
*/

/*
3) Set a secret password:

let password = "JSrocks";

Ask the user to enter the password.

Rules:
- User gets UNLIMITED tries.
- Stop only when password is correct.

Then show:
"Access Granted"

Think carefully:
Should this run at least once?
Which loop naturally fits?
*/

/*
let password = "JSrocks";
let inputPassword;

while (true) {
  inputPassword = prompt("Enter Password");

  if (inputPassword === null) {
    break;
  }

  if (inputPassword === password) {
    alert("Access Granted");
    break;
  } else {
    alert("Incorrect Password");
  }
}
*/

/*
4) Start a countdown from 10.

Each second (or iteration), ask the user:

Type "stop" to cancel the countdown.

If user types "stop":
👉 Immediately break the loop
👉 Show "Countdown Cancelled"

Otherwise continue until 0.

Then show:
"Blast Off 🚀"

Think:
Where should break go?
*/

/*
let isCancelled = false;

for (let i = 10; i > 0; i--) {
  
  alert(i);
  
  let input = prompt(`Type "stop" to cancel the countdown.`);

  if (input === null || input.toLowerCase() === "stop") {
    isCancelled = true;
    break;
  }
}

if (isCancelled) {
    alert("Countdown Cancelled");
} else {
    alert("Blast Off 🚀");
}
*/

/*

5) Keep asking the user for test scores (0–100).

Store valid scores.

Stop when user enters -1.

After stopping:

👉 Show the average score.

IMPORTANT:
- Ignore scores above 100.
- Ignore negative numbers except -1.

Think carefully:
Where should validation happen?
Before storing or after?
*/

/*
let totalScore = 0;
let count = 0;

while (true) {
  let takeInput = prompt("Enter test score");

  if (takeInput === null) {
    break;
  }

  if (takeInput.trim() === "") {
    alert("Please enter a score");
    continue;
  }

  let input = Number(takeInput);

  if (Number.isNaN(input)) {
    alert("Enter a Valid Number");
    continue;
  }

  if (input === -1) {
    break;
  }

  if (input > 100 || input < 0) {
    alert("Enter a Number between 0 and 100");
    continue;
  }

  totalScore = totalScore + input;
  count++;
}

if (count > 0) {
  alert("Average: " + totalScore / count);
} else {
  alert("No scores entered");
}
*/