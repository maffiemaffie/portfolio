const React = require('react');
const ReactDOM = require('react-dom');

const IMAGE_ROOT_URL = "/front-page-assets/";

const icons = {
  github: <i className="fab fa-github"></i>,
  html: <i className="fab fa-html5"></i>,
  css: <i className="fab fa-css3-alt"></i>,
  js: <i className="fab fa-js"></i>,
  node: <i className="fab fa-node-js"></i>,
  react: <i className="fab fa-react"></i>,
  codepen: <i className="fab fa-codepen"></i>,
  unity: <i className="fab fa-unity"></i>,
  python: <i className="fab fa-python"></i>,
  java: <i className="fab fa-java"></i>,
};

const IconTag = ({icon, href}) => {
  const iconContent = icons[icon] ?? icon;

  if (href) return (
    <a className='icon-tag' href={href}>{iconContent}</a>
  );

  return (<a className='icon-tag' href={href}>{iconContent}</a>);
};

const Project = (props) => {
  const makeTags = (tags) => {
    return tags.map(tag => 
      <li key={tag}><IconTag icon={tag}/></li>
    );
  }
  
  return (
    <section className="project-container">
      <figure>
        {props.image ? <img src={`${IMAGE_ROOT_URL}${props.image}`} alt={props.alt}/> : ''}
        <figcaption>
          <a href={`blogs${props.href}`}>
            <h3>{props.title}</h3>
          </a>
          <IconTag icon="github" href={props.repository}></IconTag>
          <ul className="tag-list">
            {makeTags(props.tags)}
          </ul>
          <p>
            {props.description}
          </p>
        </figcaption>
      </figure>
    </section>
  );
};

module.exports = async () => {
  const makeProjectList = (projects) => {
    return projects.map(project =>
      <li key={project.title}><Project
        title={project.title}
        description={project.description}
        image={project.image}
        alt={project.alt}
        tags={project.tags}
        repository={project.repository}
        href={project.blog}
      /></li>
    );
  }
  
  const projectDataResponse = await fetch('/front-page-assets/projects.json', {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });
  const projectData = await projectDataResponse.json();

  projectData.forEach(category => {
    ReactDOM.render(
      <ul>
        {makeProjectList(category.projects)}
      </ul>,
      document.querySelector(`#${category.container} .project-list-container`)
    );
  });
};