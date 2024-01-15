const path = require('path');
const fs = require('fs/promises');
const marked = require('marked');

module.exports = async (req, res) => {
  const { blog } = req.params;

  const filepath = path.resolve(`${__dirname}/blogs/${blog}.md`);
  const blogMarkdown = await fs.readFile(filepath, { encoding: 'utf-8' });

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