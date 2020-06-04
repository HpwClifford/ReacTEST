import React from 'react';
import Worm from './Worm.jsx';

const Core = ({ coreKey }) => {
  return (
    <div>
      <span>{coreKey}</span>
      <Worm wormKey={coreKey+2} />
    </div>
  )
};

export default Core;
