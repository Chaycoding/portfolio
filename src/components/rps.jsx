import React from "react";

function Rockps() {
  const selectionButtons = document.querySelectorAll("[data-selection]");
  const finalColumn = document.querySelector("[data-final-column]");
  const SELECTIONS = [
    {
      name: "rock",
      emoji: "rock",
      beats: "scissor",
    },
    {
      name: "paper",
      emoji: "paper",
      beats: "rock",
    },
    {
      name: "scissor",
      emoji: "scissor",
      beats: "paper",
    },
  ];

  selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener("click", () => {
      const selectionName = selectionButton.dataset.selection;
      const selection = SELECTIONS.find(
        (selection) => selection.name === selectionName
      );
      makeSelection(selection);
    });
  });

  function makeSelection(selection) {
    const computerSelection = randomSelection();
    const youWon = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);

    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, youWon);
  }

  function addSelectionResult(selection, winner) {
    const div = document.createElement("div");
    div.innerText = selection.emoji;
    div.classList.add("result-selection");
    if (winner) div.classList.add("winner");
    finalColumn.after(div);
  }

  function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
  }

  function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
  }

  return (
    <div className="pb-[150rem]">
      <div className="selections">
        <button className="selection" data-selection="rock">
          <>&#9994;</>
        </button>
        <button className="selection" data-selection="scissor">
          <>&#9996;</>
        </button>
        <button className="selection" data-selection="paper">
          <>&#9995;</>
        </button>
      </div>
      <div className="results">
        <div>
          You
          <span className="result-score">0</span>
        </div>
        <div data-final-column>
          Computer
          <span className="result-score">0</span>
        </div>
      </div>
    </div>
  );
}

export default Rockps;
