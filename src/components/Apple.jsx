import React from 'react';
import Core from './Core.jsx';

const Apple = ({ appleKey }) => {
  return (
    <p>
      APPLE:
      <Core coreKey={appleKey + 1} />
    </p>
  );
};

export default Apple;
