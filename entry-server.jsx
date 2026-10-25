import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';
import { ROUTES, buildJsonLd } from './src/routes.js';

export function render(path = '/') {
  return renderToString(<App path={path} />);
}

// Somente dados das rotas (sem componentes) para o prerender.
export const routes = ROUTES.map((route) => ({
  path: route.path,
  title: route.title,
  description: route.description,
  ogImage: route.ogImage,
  ogAlt: route.ogAlt,
  jsonLd: route.faq ? buildJsonLd(route) : [],
}));
