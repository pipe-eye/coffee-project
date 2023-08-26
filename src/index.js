import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';

import './fonts/Merienda/Merienda-Bold.ttf';
import './fonts/Merienda/Merienda-Regular.ttf';

import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


