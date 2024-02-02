import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import MouseHighlight from './components/MouseHighlight/MouseHighlight';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MouseHighlight />
  </React.StrictMode>
);
