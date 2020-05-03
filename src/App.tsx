import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GloalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GloalStyle />
  </>
);

export default App;
