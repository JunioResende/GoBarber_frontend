import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
