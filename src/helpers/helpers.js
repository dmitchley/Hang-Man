// show notification when the user has already typed in the letter. This is done by checking if the letter is in the wrongLetters array.
export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

// helper function to check if the user has won or lost used in the Popup component
export function checkWin(correct, wrong, word) {
  // in popup component if correctLetters, wrongLetters, selectedWord === word then the user has won
  let status = "win";

  // Current word split into letters
  word.split("").forEach((letter) => {
    // if the letter is not in the correctLetters array then the user has lost
    if (!correct.includes(letter)) {
      // blank status means we haven't won or lost yet
      status = "";
    }
  });

  // 6 wrong letters means the user has lost
  if (wrong.length === 6) status = "lose";

  return status;
}
