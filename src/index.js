import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './providers/AuthProvider';

import './index.css';
import {GlobalStyle} from './themes';
import AppRouter from './router/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
