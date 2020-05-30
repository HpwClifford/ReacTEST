import React, { useState } from 'react';
import Apple from './Apple.jsx';
import Orange from './Orange.jsx';

const FruitContainer = () => {
  const [apples, setApples] = useState([]);

  console.log('apples', apples);

  return (
    <div>
      <button
        onClick={() => {
          const newApples = apples.slice();
          newApples.push(<Apple key={apples.length} />);
          setApples(newApples);
        }}
      >
        ADD APPLE
      </button>
      {apples}
      <Orange />
    </div>
  );
};

export default FruitContainer;
