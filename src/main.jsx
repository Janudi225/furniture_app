import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "@fontsource/saira"; // Defaults to weight 400
import "@fontsource/saira/400.css"; // Specify weight
import "@fontsource/saira/400-italic.css"; // Specify weight and style

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


