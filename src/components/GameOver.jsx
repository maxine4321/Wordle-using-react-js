import React, { useContext } from 'react'
import { AppContext } from '../App'

const GameOver = () => {
    const{gameOver, correctWord, currAttempt} = useContext(AppContext);
  return (
    <div>
      <h3>{gameOver.guessedWord? "YOU GUESSED CORRECTLY": "YOU FAILED"}</h3>
      <h1>CORRECT WORD IS : {correctWord.toUpperCase()} </h1>

      {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt+1} attempts</h3>)}
    </div>
  )
}

export default GameOver
