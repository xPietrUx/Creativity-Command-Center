import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import ShouldLoadMouseHighlight from './components/MouseHighlight/ShouldLoadMouseHighlight';
import Calendar from './components/Calendar/Calendar';
import Informant from './components/Informant/Informant';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShouldLoadMouseHighlight />
    <Informant />
    <Calendar />
  </React.StrictMode>
);
