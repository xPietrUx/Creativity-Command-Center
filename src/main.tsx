import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import ShouldLoadMouseHighlight from './components/MouseHighlight/shouldLoadMouseHighlight';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShouldLoadMouseHighlight />
  </React.StrictMode>
);
