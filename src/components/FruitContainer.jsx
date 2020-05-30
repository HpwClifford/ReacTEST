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

  return (
    <div>
      <button onClick={addApple}>ADD APPLE</button>
      {apples}
      <Orange />
    </div>
  );
};

export default FruitContainer;
