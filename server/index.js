require('dotenv-safe').config();
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const disableTraceMethod = require('./middleware/disableTraceMethod');

const app = express();

const root = path.join(__dirname, '../dist/angular-17-node-deploy/browser');

app.use(disableTraceMethod);

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
