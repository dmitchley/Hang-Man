import React from "react";

function Word({ selectedWord, correctLetters }) {
  return (
    <div className="word">
      {/* checking each letter is inside the selectedWord array  and if it is correct it will display in the span below */}
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}

export default Word;
