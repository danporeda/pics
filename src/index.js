import App from './App';
import React from 'react'
import ReactDOM from 'react-dom/client';
import searchImages from './api';

const el = document.querySelector('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);