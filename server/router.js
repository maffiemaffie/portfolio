const blogHandler = require('./blog-parser.js');

const router = (app) => {
  app.get('/blogs/:blog', blogHandler);
}

module.exports = router;