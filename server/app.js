const express = require("express");
const path = require('path');


const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 3000;

app.use(express.static(path.resolve(`${__dirname}/../static`)));

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});