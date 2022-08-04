import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthenticationContext';

import './reset.css'
import GestorApp from './GestorApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GestorApp />
      </AuthProvider> 
    </BrowserRouter>
  </React.StrictMode>
);