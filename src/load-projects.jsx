import React from "react";
import ReactDOM from "react-dom";
import projectData from "./projects.json";

const IMAGE_ROOT_URL = "./front-page-assets/";

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
      <header>
        <h3>{props.title}</h3>
      </header>
      <figure>
        <img src={`${IMAGE_ROOT_URL}${props.image}`} alt={props.alt}/>
        <figcaption>{props.description}</figcaption>
      </figure>
      <footer>
        <ul className="tag-list">
          <li key="github"><IconTag icon="github" href={props.repository}></IconTag></li>
          {makeTags(props.tags)}
        </ul>
      </footer>
    </section>
  );
};

export default init = () => {
  const makeProjectList = (projects) => {
    return projects.map(project =>
      <li key={project.title}><Project
        title={project.title}
        description={project.description}
        image={project.image}
        alt={project.alt}
        tags={project.tags}
        repository={project.repository}
      /></li>
    );
  }
  
  projectData.forEach(category => {
    ReactDOM.render(
      <ul>
        {makeProjectList(category.projects)}
      </ul>,
      document.querySelector(`#${category.container} .project-list-container`)
    );
  });
};