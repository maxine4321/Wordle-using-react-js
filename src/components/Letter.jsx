import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Letter = ({ letterpos, attempt }) => {
  const { board, correctWord, currAttempt, disabledLetters, setDisabledLetters, gameOver } = useContext(AppContext);

  const letter = board[attempt][letterpos];
  const correct = correctWord.toUpperCase()[letterpos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState = (currAttempt.attempt > attempt || (gameOver.gameOver && currAttempt.attempt === attempt)) && (correct ? "correct" : almost ? "almost" : "error");


  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className={`letter border w-12 h-12 flex items-center justify-center text-xl font-bold 
    ${letterState === "correct" ? "bg-green-500" : ""}
    ${letterState === "almost" ? "bg-yellow-500" : ""}
    ${letterState === "error" ? "bg-gray-500" : ""}`}>
      {letter}
    </div>
  );
};

export default Letter;
