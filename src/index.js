import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Reset from './style/styleReset'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Reset />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);