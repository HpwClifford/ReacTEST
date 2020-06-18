import React from 'react';

const Doll = ({ dollNum }) => {
  return (
    <span>Doll({dollNum > 0 ? <Doll dollNum={dollNum - 1} /> : null})</span>
  );
};

export default Doll;
