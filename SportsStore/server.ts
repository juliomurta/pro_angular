const express = require("express");
const https = require("https");
const fs = require("fs");
const historyApi = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const auth = require("./authMiddleware.js");
const router = jsonServer.router("data.json");

const enableHttps = false;

const ssloptions = {
  cert: '',
  key: ''
};

if(enableHttps) {
  ssloptions.cert = fs.readFileSync('./ssl/sportstore.crt');
  ssloptions.key = fs.readFileSync('./ssl/sportstore.pem');
}

const app = express();

app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(historyApi());
app.use("/", express.static("./dist/SportsStore"));

app.listen(80, () => console.log("Http Server running on port 80"));

if (enableHttps) {
  https.createServer(ssloptions, app).listen(443, () => console.log("Https Server running on port 443"));
} else {
  console.log("Https disabled");
}

/*import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();*/
