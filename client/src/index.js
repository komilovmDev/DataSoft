import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import App from './App';
import As from './routes/Router';
// style
import './styles/app.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);