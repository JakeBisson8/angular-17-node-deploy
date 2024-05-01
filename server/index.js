const express = require('express');

require('dotenv-safe').config();

const app = express();

const port = process.env.PORT || 8080;

app.listen(process.env.PORT || 8080, () => {
  console.log(`server is listening on port ${port}`);
});
