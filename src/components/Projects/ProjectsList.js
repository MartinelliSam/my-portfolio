import "./ProjectsList.css";
import Project from "./Project.js";
import ProjectsData from "data.js";

export default function ProjectsList() {
  return (
    <div id="projects">
      <h2>Mes projets</h2>
      <div id="project-cards">
        {ProjectsData.map((project) => {
          return (
            <div key={project.id}>
              <Project
                id={project.id}
                image={project.image}
                name={project.name}
                stack={project.stack}
                github={project.github}
                source={project.source}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
