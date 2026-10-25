import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://www.oral-clinic-salvador.com.br';

// Substitui os metadados da pagina inicial pelos da rota. Falha alto se algum
// padrao deixar de existir em index.html, para nao publicar meta duplicada.
function applyRouteMeta(html, { path: routePath, title, description, ogImage, ogAlt, jsonLd = [] }) {
  const url = `${SITE_URL}${routePath}`;
  const replacements = [
    [/<title>[^<]*<\/title>/, `<title>${title}</title>`],
    [/(<meta name="description"\s+content=")[^"]*(")/, `$1${description}$2`],
    [/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`],
    [/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`],
    [/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`],
    [/(<meta property="og:description"\s+content=")[^"]*(")/, `$1${description}$2`],
    [/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`],
    [/(<meta name="twitter:description"\s+content=")[^"]*(")/, `$1${description}$2`],
  ];
  if (ogImage) {
    const image = `${SITE_URL}${ogImage}`;
    replacements.push(
      [/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`],
      [/(<meta property="og:image:secure_url" content=")[^"]*(")/, `$1${image}$2`],
      [/(<meta property="og:image:height" content=")[^"]*(")/, `$1630$2`],
      [/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${ogAlt}$2`],
      [/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`],
      [/(<link rel="image_src" href=")[^"]*(")/, `$1${image}$2`],
    );
  }
  for (const [pattern, value] of replacements) {
    if (!pattern.test(html)) throw new Error(`Meta nao encontrada em index.html: ${pattern}`);
    html = html.replace(pattern, value);
  }
  const scripts = jsonLd
    .map((data) => `  <script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\u003c')}</script>
`)
    .join('');
  return html.replace('</head>', `${scripts}</head>`);
}

async function main() {
  console.log('[1/3] Building client bundle...');
  await build({ logLevel: 'warn' });

  console.log('[2/3] Building SSR bundle...');
  await build({
    logLevel: 'warn',
    build: {
      ssr: true,
      outDir: 'dist/server',
      rollupOptions: { input: './entry-server.jsx' },
      ssrEmitAssets: false,
    },
  });

  console.log('[3/3] Pre-rendering HTML...');
  const { render, routes } = await import(
    pathToFileURL(path.resolve(__dirname, 'dist/server/entry-server.js')).href
  );

  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/index.html'),
    'utf-8'
  );

  for (const route of routes) {
    const appHtml = render(route.path);
    let html = template.replace(
      '<div id="app"></div>',
      `<div id="app">${appHtml}</div>`
    );
    if (route.title) html = applyRouteMeta(html, route);

    // "/" -> dist/index.html; "/protese" -> dist/protese/index.html
    const outDir = path.resolve(__dirname, 'dist', route.path.slice(1));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
  }

  fs.rmSync(path.resolve(__dirname, 'dist/server'), { recursive: true, force: true });

  console.log(`✓ Build estatico concluido -> ${routes.length} rotas em dist/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
