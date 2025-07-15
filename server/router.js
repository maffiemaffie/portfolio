const blogHandler = require('./blog-parser.js');
const notFound = require('./not-found.js');

const router = (app) => {
  app.get('/blogs/:blog', blogHandler);
  app.get("/2025", (req, res, next) => res.redirect("https://www.behance.net/gallery/230017681/Portfolio-2025"));
  app.use('*', notFound);
}

module.exports = router;