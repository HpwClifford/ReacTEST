import React from 'react';
import Core from './Core.jsx';

const Apple = ({ appleKey }) => {
  return (
    <div>
      APPLE:
      <Core coreKey={appleKey + 1} />
    </div>
  );
};

export default Apple;
