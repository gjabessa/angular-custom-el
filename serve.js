const express = require('express');
const port = process.env.PORT || 3002;
const app = express();

app.use(express.static('dist/custom/'));

app.listen(port);