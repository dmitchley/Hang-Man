import React, { useState } from "react";

function Rules() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button onClick={toggleModal} className="Rule-button">
        Rules
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>How to play Hangman</h2>
            <p>
              The Goal of Hangman is to figure out a hidden word in a set amount
              of chances. The word is hidden in a series of letters and you have
              to guess them. For every wrong word the Hangman figure will be
              drawn. When the figure is fully drawn the game is over.
            </p>
            <p>
              - Wrong letters you might have typed in are displayed on the top
              right. <br></br>- If you lose the Correct word will be displayed
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Rules;
