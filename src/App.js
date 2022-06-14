import React, { useState, useEffect } from "react";
// components
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import Rules from "./components/Rules";
// show function to show notification when letter is already typed
import { showNotification as show } from "./helpers/helpers";

import "./App.css";

// Words to be guessed
const words = ["application", "programming", "interface", "wizard"];
// random word from words array
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  // correct letters and setCorrectLetters passed to Word component
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  // setshowNotification to show notification when letter is already typed
  const [showNotification, setShowNotification] = useState(false);

  useEffect(
    () => {
      // function to handle user keyboard input
      const handleKeydown = (event) => {
        // if the key pressed is a letter and the word is playable. Keycodes for letters are between 65 and 90
        const { key, keyCode } = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          // if the letter is in the selectedWord array. This is sorted in the word component
          if (selectedWord.includes(letter)) {
            // if letter is not in the correctLetters array add it to the correctLetters array
            if (!correctLetters.includes(letter)) {
              setCorrectLetters((currentLetters) => [
                ...currentLetters,
                letter,
              ]);
            } else {
              /* show function to show notification when letter is already typed. show is imported from the helpers folder and 
              showNotification is set to true. this is toggled in the Notification.js file */
              show(setShowNotification);
            }
          } else {
            // if the letter is not in the selectedWord array add it to the wrongLetters array
            if (!wrongLetters.includes(letter)) {
              setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
            } else {
              show(setShowNotification);
            }
          }
        }
      };
      // event listener for keydown
      window.addEventListener("keydown", handleKeydown);
      // clean up event listener on unmount
      return () => window.removeEventListener("keydown", handleKeydown);
    } /* when below dependensies get updated this function gets called to avoid lagging app performance */,
    [correctLetters, wrongLetters, playable]
  );

  // if user lost in popup component then they can call this function to play again
  function playAgain() {
    setPlayable(true);

    // empty correctLetters and wrongLetters arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    // random word from words array
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  // help popup is closed by default

  return (
    <>
      <Rules />
      <Header />
      <div className="game-container">
        {/* Figure Component is passed the wrong letters and conditionally renders different parts of the SVG on how many wrong letters 
        are typed in */}
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      {/* Popup components  */}
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      {/* Notification Component is passed the showNotification state and conditionally renders a notification when the letter is 
      typed twice */}

      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
