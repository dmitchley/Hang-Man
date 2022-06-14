import React from "react";

function Figure({ wrongLetters }) {
  // wrongletters is an array of letters. Below we check if the length of the array is greater than certain numbers
  //and if it is we display different parts of the figure
  const errors = wrongLetters.length;
  return (
    <svg height="250" width="200" className="figure-container">
      {/* This part of the SVG is always displayed */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* if more than one error head of hangman is displayed */}
      {errors > 0 && <circle cx="140" cy="70" r="20" />}
      {/* if  two errors neck of hangman is displayed */}
      {errors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
      {/* if  three errors left arm of hangman is displayed */}
      {errors > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
      {/* if four errors right arm of hangman is displayed */}
      {errors > 3 && <line x1="140" y1="120" x2="160" y2="100" />}
      {/* if five  right leg of hangman is displayed */}
      {errors > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
      {/* if  six errors left leg of hangman is displayed */}
      {errors > 5 && <line x1="140" y1="150" x2="160" y2="180" />}
    </svg>
  );
}

export default Figure;
