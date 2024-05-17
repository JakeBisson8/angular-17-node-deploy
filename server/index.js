require('dotenv-safe').config({
  allowEmptyValues: true,
});
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');

// Define the express app
const app = express();

// Configure Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'script-src-attr': ["'unsafe-inline'"],
      },
    },
  }),
);

// Root directory
const root = path.join(__dirname, '../dist/angular-17-node-deploy/browser');

// Ensure all routes direct the user to the application
app.get('*', function (req, res) {
  fs.stat(root + req.path, function (err) {
    if (err) {
      res.sendFile('index.html', { root });
    } else {
      res.sendFile(req.path, { root });
    }
  });
});

// Start the server
const { SSL_CERT_NAME, SSL_KEY_NAME } = process.env;
const port = SSL_CERT_NAME && SSL_KEY_NAME ? 443 : 80;
if (SSL_CERT_NAME && SSL_KEY_NAME) {
  const options = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', SSL_KEY_NAME)),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', SSL_CERT_NAME)),
  };
  const server = https.createServer(options, app);
  server.listen(port, () => {
    console.log(`https server is running on port ${port}`);
  });
} else {
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`http server is running on port ${port}`);
  });
}
