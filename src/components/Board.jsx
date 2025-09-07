import React from 'react';
import { boardDefault } from '../Words';
import Letter from './Letter';

const Board = () => {
  return (
    <div className="board flex flex-col gap-2 items-center mt-8">
      <div className="row flex gap-2">
        <Letter letterpos={0} attempt={0} />
        <Letter letterpos={1} attempt={0} />
        <Letter letterpos={2} attempt={0} />
        <Letter letterpos={3} attempt={0} />
        <Letter letterpos={4} attempt={0} />
      </div>
      <div className="row flex gap-2">
        <Letter letterpos={0} attempt={1} />
        <Letter letterpos={1} attempt={1} />
        <Letter letterpos={2} attempt={1} />
        <Letter letterpos={3} attempt={1} />
        <Letter letterpos={4} attempt={1} />
      </div>
      <div className="row flex gap-2">
        <Letter letterpos={0} attempt={2} />
        <Letter letterpos={1} attempt={2} />
        <Letter letterpos={2} attempt={2} />
        <Letter letterpos={3} attempt={2} />
        <Letter letterpos={4} attempt={2} />
      </div>
      <div className="row flex gap-2">
        <Letter letterpos={0} attempt={3} />
        <Letter letterpos={1} attempt={3} />
        <Letter letterpos={2} attempt={3} />
        <Letter letterpos={3} attempt={3} />
        <Letter letterpos={4} attempt={3} />
      </div>
      <div className="row flex gap-2">
        <Letter letterpos={0} attempt={4} />
        <Letter letterpos={1} attempt={4} />
        <Letter letterpos={2} attempt={4} />
        <Letter letterpos={3} attempt={4} />
        <Letter letterpos={4} attempt={4} />
      </div>
      <div className="row flex gap-2">
        <Letter letterpos={0} attempt={5} />
        <Letter letterpos={1} attempt={5} />
        <Letter letterpos={2} attempt={5} />
        <Letter letterpos={3} attempt={5} />
        <Letter letterpos={4} attempt={5} />
      </div>
    </div>
  );
};

export default Board;
