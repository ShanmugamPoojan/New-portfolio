import { useEffect, useState } from "react";
import Card from "../components/Card";
import Gallery from "../components/Gallery";
import '../styling/projects.css'


function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      { id: 1, title: "Project 1" },
      { id: 2, title: "Project 2" },
      { id: 3, title: "Project 3" },
      { id: 4, title: "Project 4" },
    ]);
  }, []);

  return (
    <div className="home">
      {items.map((item, index) => (
        <div key={index} className="card-container">
          <Card key={index} item={item} />
          <Gallery key={index} item={item} />
        </div>
      ))}
    </div>
  );
}

export default Projects;

