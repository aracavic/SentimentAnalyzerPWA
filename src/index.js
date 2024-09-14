import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import registerServiceWorker from './serviceWorkerRegistration';

// Configura la raíz de React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registrar el service worker
registerServiceWorker();




