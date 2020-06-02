import React, { useState } from 'react';
import Apple from './Apple.jsx';
import Orange from './Orange.jsx';

const FruitContainer = () => {
  const [apples, setApples] = useState([]);

  const addApple = () => {
    const newApples = apples.slice();
    newApples.push(true);
    setApples(newApples);
  };

  const [oranges, setOranges] = useState([]);

  const addOrange = () => {
    const newOranges = oranges.slice();
    newOranges.push(<Orange key={oranges.length} appleKey={oranges.length} />);
    setOranges(newOranges);
  };

  //   const appleList = apples.map((apple, idx) => (
  //     <Apple key={idx} appleKey={idx} />
  //   ));

  //   console.log(appleList);

  return (
    <div>
      <button onClick={addApple}>ADD APPLE</button>
      <button onClick={addOrange}>ADD ORANGE</button>
      {apples.map((apple, idx) => (
        <Apple key={idx} appleKey={idx} test={3} />
      ))}
      {oranges}
    </div>
  );
};

export default FruitContainer;
