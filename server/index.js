require('dotenv-safe').config();
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const path = require('path');
const fs = require('fs');
const disableTraceMethod = require('./middleware/disableTraceMethod');

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'script-src-attr': ["'self'", "'unsafe-inline'"],
      },
    },
  }),
);
app.use(disableTraceMethod);

const root = path.join(__dirname, '../dist/angular-17-node-deploy/browser');

app.get('*', function (req, res) {
  fs.stat(root + req.path, function (err) {
    if (err) {
      res.sendFile('index.html', { root });
    } else {
      res.sendFile(req.path, { root });
    }
  });
});

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
