import React from 'react';
import FruitContainer from './FruitContainer.jsx';
import VegContainer from './VegContainer.jsx';
import RussianDollContainer from './RussianDollContainer.jsx';

const MainContainer = () => {
  return (
    <div>
      <FruitContainer />
      <VegContainer />
      <RussianDollContainer />
    </div>
  );
};

export default MainContainer;
