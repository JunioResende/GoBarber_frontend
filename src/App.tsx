import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import ToastContainer from './components/ToastContainer';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />

      <ToastContainer />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
