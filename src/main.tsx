/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename="/peinture-et-deco-savoie">
    <App />
  </BrowserRouter>
);
