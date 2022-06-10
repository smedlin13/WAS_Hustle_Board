import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from "./providers/AuthProvider";
import MileageProvider from './providers/MileageProvider';
import { initMiddleware } from 'devise-axios';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MileageProvider>
        <App />
        </MileageProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

