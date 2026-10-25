import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './src/App.jsx';
import './src/index.css';
import { inject } from '@vercel/analytics';

inject();
const container = document.getElementById('app');
const path = window.location.pathname;

// Em producao o HTML ja vem pre-renderizado (SSG) -> hidrata.
// Em desenvolvimento o container esta vazio -> renderiza do zero.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App path={path} />, { onRecoverableError: () => {} });
} else {
  createRoot(container).render(<App path={path} />);
}
