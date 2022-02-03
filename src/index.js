import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Reset from './style/styleReset'
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Reset />
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);