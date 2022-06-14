import React from "react";

function WrongLetters({ wrongLetters }) {
  return (
    <>
      <div className="wrong-letters-container">
        <div>
          {/*when a wrong letter is in the wrongletters array it is mapped into a span element on the .map function and 
          the .reduce adds a , and space to the wrong letters displayed */}
          {wrongLetters.length > 0 && <p>Wrong</p>}
          {wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            .reduce(
              (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
              null
            )}
        </div>
      </div>
    </>
  );
}

export default WrongLetters;
