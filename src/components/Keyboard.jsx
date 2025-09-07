import React, { useCallback, useEffect, useContext } from 'react';
import Key from './Key';
import { AppContext } from '../App';

const Keyboard = () => {
  const { onEnter, onDelete, onSelectLetter, disabledLetters } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key);
        }
      });
    }
  }, [onEnter, onDelete, onSelectLetter]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard mt-4" onKeyDown={handleKeyboard}>

<div className="line1 flex justify-center">
  {keys1.map((key) => {
    return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
  })}
</div>

<div className="line2 flex justify-center">
  {keys2.map((key) => {
    return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
  })}
</div>

<div className="line3 flex justify-center">
  <Key key="ENTER" keyVal={"ENTER"} bigKey />
  {keys3.map((key) => {
    return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
  })}
  <Key key="DELETE" keyVal={"DELETE"} bigKey />
</div>

    </div>
  );
};

export default Keyboard;
