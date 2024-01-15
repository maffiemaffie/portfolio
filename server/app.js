const express = require("express");
const expressHandlebars = require('express-handlebars');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 3000;

app.use(express.static(path.resolve(`${__dirname}/../static`)));
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: '' }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

router(app);

app.listen(port, (err) => {
  if (err) { throw err; }
  console.log(`Listening on port ${port}`);
});