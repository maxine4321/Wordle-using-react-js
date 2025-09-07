import { useState, createContext, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet} from './Words'; 
import GameOver from './components/GameOver';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterpos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });



  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord)
    });
  }, []);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterpos > 4) return;
    const currBoard = board.map(row => [...row]);  // deep copy
    currBoard[currAttempt.attempt][currAttempt.letterpos] = keyVal;
    setBoard(currBoard);
    setCurrAttempt({ ...currAttempt, letterpos: currAttempt.letterpos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterpos === 0) return;
    const currBoard = board.map(row => [...row]);  // deep copy
    currBoard[currAttempt.attempt][currAttempt.letterpos - 1] = "";
    setBoard(currBoard);
    setCurrAttempt({ ...currAttempt, letterpos: currAttempt.letterpos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterpos !== 5) return;
  
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
  
    if (!wordSet.has(currWord.toLowerCase())) {
      alert("Word not found");
      return;
    }
  
    if (currWord.toLowerCase() === correctWord.toLowerCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
    } else if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    } else {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterpos: 0 });
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <nav className="flex justify-center items-center h-16">
        <h1 className="text-4xl font-bold">WORDLE</h1>
      </nav>
      <AppContext.Provider value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onDelete,
        onEnter,
        correctWord,
        disabledLetters,
        setDisabledLetters,
        setGameOver,
        gameOver
      }}>

<div className="w-screen h-[calc(100vh-170px)] flex flex-col items-center pt-12">
  <Board />
  {gameOver.gameOver ? <GameOver /> : <Keyboard />}
</div>

      </AppContext.Provider>
    </div>
  );
}

export default App;
