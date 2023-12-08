// Create your game here!
// Part 1.1
const answer = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

// Part 1.2
function startGame() {
  alert(
    "Welcome to the Number Guessing Game! Try to guess the correct number between 1 and 100.",
  );

  // Using setTimeout to delay the prompt, addressing the blocking behavior
  setTimeout(() => {
    playGame();
  }, 100);
}

// Part 1.3
function playGame() {
  let guess = prompt("Enter your guess:");

  if (guess === null) {
    alert("Game canceled. Refresh the page to start again.");
    return;
  }

  guess = parseInt(guess);

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
    playGame();
    return;
  }

  attempts++;

  if (guess === answer) {
    alert(
      `Congratulations! You guessed the correct number ${answer} in ${attempts} attempts.`,
    );
    displayResult("Congratulations!", "green");
  } else {
    const hint =
      guess < answer ? "Too low. Try again!" : "Too high. Try again!";
    alert(hint);
    playGame();
  }
}

// Part 1.4
function displayResult(message, color) {
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = `<p style="color: ${color};">${message}</p>`;
}

// Part 2
startGame();
// ... (Previous code remains unchanged)

// Part 3
function playGame() {
  let guess = prompt("Enter your guess:");

  if (guess === null) {
    alert("Game canceled. Refresh the page to start again.");
    return;
  }

  guess = parseInt(guess);

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
    playGame();
    return;
  }

  attempts++;

  if (guess === answer) {
    alert(
      `Congratulations! You guessed the correct number ${answer} in ${attempts} attempts.`,
    );
    displayResult("Congratulations!", "green");
  } else {
    const hint =
      guess < answer ? "Too low. Try again!" : "Too high. Try again!";
    alert(hint);
    playGame();
  }
}

// Part 4
// Trigger the game on a button click
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.createElement("button");
  startButton.textContent = "Start Game";
  startButton.addEventListener("click", startGame);

  const appDiv = document.getElementById("app");
  appDiv.appendChild(startButton);
});
