let numberToGuess;

function startGame() {
  numberToGuess = Math.round(Math.random() * 100);
  document.getElementById('guess').value = '';
  document.getElementById('message').innerText = '';
}

function guess() {
  const inputEl = document.getElementById('guess');
  const guess = parseInt(inputEl.value);
  if (guess === numberToGuess) {
    document.getElementById('message').innerText = 'That is correct! ✅';
  } else if (guess < numberToGuess) {
    document.getElementById('message').innerText = 'Try a bigger number!';
  } else {
    document.getElementById('message').innerText = 'Try a smaller number!';
  }
}
