import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import '../styling/home.css'
import Card from '../components/Card.jsx';

function Home() {
  const [homeData, setHomeData] = useState(null);
  // const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    setHomeData(portfolioData.home);
    // setSkillsData(portfolioData.skills);
  }, []);

  if (!homeData) return <div>Loading...</div>;

  return (
    <div className="home-page main-page">
      <div className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            <span className='typewriter'>Hey, <br />I'm Shanmugam Poojan</span>
          </h1>
          {/* <p className='hero-title'>{heroData.title}</p> */}
          <p className='hero-subtitle'>{homeData.hero.subtitle}</p>
          <p className='hero-description'>{homeData.hero.description}</p>
        </div>
      </div>
      <div className='cards-container scatter-pattern'>
        <div className='container'>
          <h2>Overview</h2>
          <Card item={homeData.overview}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
