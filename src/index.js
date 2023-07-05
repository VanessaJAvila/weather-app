import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import weatherBackground from "./images/weatherBackground.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="background-image" style={{ backgroundImage: `url(${weatherBackground})` }} />
    <App />
  </React.StrictMode>
);

