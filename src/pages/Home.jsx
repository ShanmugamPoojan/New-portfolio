import { useState, useEffect } from 'react';
import Card from '../components/Card';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      { id: 1, title: "Project 1" },
      { id: 2, title: "Project 2" },
      { id: 3, title: "Project 3" },
      { id: 4, title: "Project 4" }
    ]);
  }, []);

  return (
    <div className="home">
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Home;
