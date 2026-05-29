function getRandomTime() {
  return Math.floor(Math.random() * 7000) + 1000;
}

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function showMessages() {

  let textContainer = document.querySelector(".textOnScreen");

  // Blinking Dots Animation
  let intervalId = setInterval(() => {

    if (textContainer.innerHTML.endsWith("...")) {

      textContainer.innerHTML =
        textContainer.innerHTML.slice(
          0,
          textContainer.innerHTML.length - 3
        );

    } else {

      textContainer.innerHTML =
        textContainer.innerHTML + ".";

    }

  }, 500);

  const messages = [
    "Initialized Hacking",
    "Reading your files",
    "Password files detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
  ];

  for (const item of messages) {

    await delay(getRandomTime());

    textContainer.innerHTML = item;
  }

  // Keep final message visible for some time
  await delay(getRandomTime());

  // Stop dots animation completely
  clearInterval(intervalId);
}

// showMessages();