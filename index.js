import express from 'express';
import { createBundleRenderer } from 'vue-server-renderer';
import { readFileSync } from 'fs';
import favicon from 'serve-favicon';
import { join } from 'path';
import { dirname } from './utils.js';

const templatePath = join(dirname(), 'src', 'index.template.html');
const bundlePath = join(dirname(), 'dist', 'vue-ssr-server-bundle.json');
const clientManifestPath = join(dirname(), 'dist', 'vue-ssr-client-manifest.json');

const server = express();

const clientManifestModule = await import(clientManifestPath);

const renderer = createBundleRenderer(bundlePath, {
  template: readFileSync(templatePath, 'utf-8'),
  clientManifest: clientManifestModule.default,
  runInNewContext: false,
});

server.use(favicon(join(dirname(), 'favicon.ico')));
server.use(express.static('dist'));

server.get('*', (req, res) => {
  const context = {
    url: req.url,
    title: 'Star Wars Vehicles',
  };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.status(500).send({ message: err.message || 'Something went wrong' });
    } else {
      res.send(html);
    }
  });
});

server.listen(9090);
