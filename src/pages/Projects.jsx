import { useEffect, useState } from "react";
import Card from "../components/Card";
import Gallery from "../components/Gallery";
import portfolioData from "../data/portfolio.json";
import '../styling/projects.css'
// import '../styling/App.css'

function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(portfolioData.projects);
  }, []);

  return (
    <div className="projects-page main-page">
      <div className="projects-header main-page-header">
        <h2><span>Projects</span></h2>
        <p>Showcasing my best work and technical skills</p>
      </div>
      <div className="cards-container scatter-pattern">
        <div className="container">
          <h2><span>My Projects</span></h2>
          {items.map((item, ind) => (
            <Gallery item={{ 'index': ind + 1, ...item }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

