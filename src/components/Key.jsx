import React, { useContext } from 'react';
import { AppContext } from '../App';

const Key = ({ keyVal, bigKey, disabled }) => {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal == "ENTER") {
      onEnter();
    } else if (keyVal == "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
    className={`flex items-center justify-center h-14 m-1 rounded-md text-white font-bold text-lg select-none ${bigKey ? "w-20" : "w-10"} ${disabled ? "bg-gray-800" : "bg-gray-400"}`}

  
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};

export default Key;
