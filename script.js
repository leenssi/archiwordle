const ARCHITECTURE_WORDS = [
  "vault", "domey", "space", "light", "brick", "steel", "curve", "angle", "slabs", "truss, "joist", "stair", "ledge", "brace", "beams", "mould", "glass", "stone", "plank", "paint", "plane", "style", "draft", "scale", "sketch", "level", "model", "joint", "riser", "floor", "hinge", "cable", "lines", "forms", "grids", "edges", "green", "zoned", "urban", "paths", "plaza", "parks", "rafts", "scale", "aisle", "plank", "frame", "tower", "gable"
];

];

const word = ARCHITECTURE_WORDS[Math.floor(Math.random() * ARCHITECTURE_WORDS.length)].toLowerCase();
let currentGuess = "";
let attempts = 0;

function submitGuess() {
  const input = document.getElementById("guess-input");
  const guess = input.value.toLowerCase();
  if (guess.length !== 5) {
    setMessage("Word must be 5 letters.");
    return;
  }

  if (!ARCHITECTURE_WORDS.includes(guess)) {
    setMessage("Not in word list.");
    return;
  }

  displayGuess(guess);
  input.value = "";
  attempts++;

  if (guess === word) {
    setMessage("🎉 You got it!");
    input.disabled = true;
  } else if (attempts >= 6) {
    setMessage(`😞 Out of tries! The word was "${word}".`);
    input.disabled = true;
  } else {
    setMessage("");
  }
}

function displayGuess(guess) {
  const board = document.getElementById("game-board");
  for (let i = 0; i < 5; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    if (guess[i] === word[i]) {
      tile.classList.add("green");
    } else if (word.includes(guess[i])) {
      tile.classList.add("yellow");
    } else {
      tile.classList.add("gray");
    }

    tile.textContent = guess[i].toUpperCase();
    board.appendChild(tile);
  }
}

function setMessage(msg) {
  document.getElementById("message").textContent = msg;
}