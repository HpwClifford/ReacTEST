import React, { useState } from "react";
import Apple from "./Apple.jsx";
import Orange from "./Orange.jsx";
import Banana from "./Banana.jsx";

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

  const [bananas, setBananas] = useState({ bananaCount: 0 });

  const bananArr = [];
  for (let k = 0; k < bananas.bananaCount; k++) {
    bananArr[k] = <Banana bananaNum={k} key={k} />;
  }

  const addBanana = () => {
    setBananas({ bananaCount: bananas.bananaCount + 1 });
  };

  return (
    <div>
      <button onClick={addApple}>ADD APPLE</button>
      <button onClick={addOrange}>ADD ORANGE</button>
      <button onClick={addBanana}>ADD BANANANANA</button>

      {apples.map((apple, idx) => (
        <Apple key={idx} appleKey={idx} test={3} />
      ))}
      {oranges}
      {bananArr}
    </div>
  );
};

export default FruitContainer;
