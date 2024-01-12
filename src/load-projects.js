import React from "react";
import { ReactDOM } from "react";
import projectData from "./projects.json";

const IMAGE_ROOT_URL = "./assets/";

const icons = {
  github: <i class="fab fa-github"></i>,
  html: <i class="fab fa-html5"></i>,
  css: <i class="fab fa-css3-alt"></i>,
  js: <i class="fab fa-js"></i>,
  node: <i class="fab fa-node-js"></i>,
  react: <i class="fab fa-react"></i>,
  codepen: <i class="fab fa-codepen"></i>,
  unity: <i class="fab fa-unity"></i>,
  python: <i class="fab fa-python"></i>,
  java: <i class="fab fa-java"></i>,
};

const IconTag = ({icon, href}) => {
  const iconContent = icons[icon] ?? icon;

  if (href) return (
    <a class='icon-tag' href={href}>{iconContent}</a>
  );

  return (<a class='icon-tag' href={href}>{iconContent}</a>);
};

const Project = (props) => {
  const makeTags = (tags) => {
    return tags.map(tag => {
      <li><IconTag icon={tag.icon} href={tag.href}/></li>
    }).join('');
  }
  
  return (
    <section class="project-container">
      <header>
        <h3>{props.title}</h3>
      </header>
      <figure>
        <img src={`${IMAGE_ROOT_URL}${props.image}`} alt={props.alt}/>
        <figcaption>{props.description}</figcaption>
      </figure>
      <footer>
        <ul class="tag-list">
          <IconTag icon={icons.github} href={props.repository}></IconTag>
          {makeTags(props.tags)}
        </ul>
      </footer>
    </section>
  );
};

const init = () => {
  const makeProjectList = (projects) => {
    return projects.map(project => {
      <li><Project
        title={project.title}
        description={project.description}
        image={project.image}
        alt={project.alt}
        tags={project.tags}
        repository={project.repository}
      /></li>
    }).join('');
  }
  
  projectData.forEach(category => {
    ReactDOM.render(
      <ul>
        {makeProjectList(category.projects)}
      </ul>
    ),
    document.querySelector(`${category.container} .project-list.container`);
  });
};

init();