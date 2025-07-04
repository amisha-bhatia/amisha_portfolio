
import './Projects.css';

const projectList = [
  {
    title: "Defect Detection UI",
    description: "React app with Azure AI to classify visual defects.",
    github: "#",
    demo: "#"
  },
  {
    title: "QR Code Scanner",
    description: "Dual QR scanning UI with record export.",
    github: "#",
    demo: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((proj, i) => (
          <div className="project-card" key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="links">
              <a href={proj.github} target="_blank">GitHub</a>
              <a href={proj.demo} target="_blank">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Projects }