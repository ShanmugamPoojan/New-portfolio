import { useEffect, useState } from "react";
import Card from "../components/Card";
import Gallery from "../components/Gallery";
import portfolioData from "../data/portfolio.json";
import '../styling/projects.css'

function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(portfolioData.projects);
  }, []);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>🎯 My Projects</h1>
        <p>Showcasing my best work and technical skills</p>
      </div>
      <div className="projects-grid">
        {items.map((item) => (
          <div key={item.id} className="card-container">
            <div className="project-icon">{item.icon}</div>
            <Card item={item} />
            <Gallery item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

