const blogHandler = require('./blog-parser.js');
const notFound = require('./not-found.js');

const router = (app) => {
  app.get('/blogs/:blog', blogHandler);
  app.use('*', notFound);
}

module.exports = router;