import React, { useEffect } from 'react';
import MainContainer from './MainContainer.jsx';
import hook from '../hook';

const App = () => {
  useEffect(() => {
    hook();
  }, []);

  return <MainContainer />;
};

export default App;
