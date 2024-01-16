const path = require('path');
const fs = require('fs/promises');
const marked = require('marked');

module.exports = async (req, res, next) => {
  const { blog } = req.params;

  const filepath = path.resolve(`${__dirname}/blogs/${blog}.md`);
  let blogMarkdown;

  try {
    blogMarkdown = await fs.readFile(filepath, { encoding: 'utf-8' });
  } catch (err) {
    return next('route');
  }
  
  const rerouted = blogMarkdown.replace(
    /!\[.*\]\(assets\/.*\)/, 
    match => match.replace('assets/', `/blog-assets/${blog}/`)
  );

  const html = marked.parse(rerouted);

  return res.render('blog', {
    title: blog,
    body: html,
  });
};