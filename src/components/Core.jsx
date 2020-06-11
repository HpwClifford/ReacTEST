import React, { useState } from 'react';
import Worm from './Worm.jsx';

const Core = ({ coreKey }) => {
  const [test, setTest] = useState([[9]]);

  return (
    <div>
      <span>{coreKey}</span>
      <Worm wormKey={coreKey + 2} />
    </div>
  );
};

export default Core;
