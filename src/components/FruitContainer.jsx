import React, { useState } from 'react';
import Apple from './Apple.jsx';
import Orange from './Orange.jsx';

const FruitContainer = () => {
  const [apples, setApples] = useState([]);

  const addApple = () => {
    const newApples = apples.slice();
    newApples.push(<Apple key={apples.length} appleKey={apples.length} />);
    setApples(newApples);
  };

  const [oranges, setOranges] = useState([]);

  const addOrange = () => {
    const newOranges = oranges.slice();
    newOranges.push(<Orange key={oranges.length} appleKey={oranges.length} />);
    setOranges(newOranges);
  };

  return (
    <div>
      <button onClick={addApple}>ADD APPLE</button>
      <button onClick={addOrange}>ADD ORANGE</button>
      {apples}
      {oranges}
    </div>
  );
};

export default FruitContainer;
