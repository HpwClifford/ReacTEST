import React, { useState } from 'react';
import Doll from './Doll.jsx';

const RussianDollContainer = () => {
  const [number, setNumber] = useState(0);

  const addDoll = () => {
    setNumber(number + 1);
    console.log('doll added', number);
  };

  return (
    <div>
      <button onClick={addDoll}>add doll</button>
      {number > 0 ? <Doll dollNum={number} /> : 'Doll()'}
    </div>
  );
};

export default RussianDollContainer;
