import React, { useEffect } from "react";
// function to check if the user has won or lost from helper function checkWin
import { checkWin } from "../helpers/helpers";

// state of the game brought in from App.js
const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  // empty string initially and playable set to true as the game is still being played
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  // if checkWin returns win then the user has won. and the finalMessage is set to "Congratulations! You won! 😃"
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
    // playable is set to false to prevent the user from typing in the word
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    /* if checkWin returns lose then the user has lost. and the finalMessage is set to "Sorry! You lost! 😭" and display the word  */
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    // playable is set to false to prevent the user from typing in the word
    playable = false;
  }

  // useEffect to set the state of the game to playable
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <>
      {/* if the user has won then display the finalMessage is displayed and if the player lost finalMessage 
      and finalMessageRevealWord and playAgain button is displayed  */}
      <div
        className="popup-container"
        style={finalMessage !== "" ? { display: "flex" } : {}}
      >
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    </>
  );
};

export default Popup;
