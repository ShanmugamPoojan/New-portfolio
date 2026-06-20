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
        <p>Showcasing my best work and technical skills</p>
      </div>
      <div className="cards-list scatter-pattern">
        <div className="container">
          <h2>My Projects</h2>
          {items.map((item) => (
              <Card item={item} />
            // <div key={item.id} className="card-container">
            //   <Gallery item={item} />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

