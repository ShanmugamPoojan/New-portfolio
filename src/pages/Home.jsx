import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import '../styling/home.css'

function Home() {
  const [heroData, setHeroData] = useState(null);
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    setHeroData(portfolioData.hero);
    setSkillsData(portfolioData.skills);
  }, []);

  if (!heroData) return <div>Loading...</div>;

  return (
    <div className="home-page">
      <div className='hero-section'>
        <div className='hero-content'>
          <div className='hero-greeting'>👋 Welcome</div>
          <h1 className='hero-title'>{heroData.title}</h1>
          <p className='hero-subtitle'>{heroData.subtitle}</p>
          <p className='hero-description'>{heroData.description}</p>
          <div className='hero-buttons'>
            {heroData.cta.map((btn, idx) => (
              <button key={idx} className={`btn btn-${btn.type}`}>{btn.text}</button>
            ))}
          </div>
        </div>
        <div className='hero-image'>
          <div className='image-placeholder'>
            <div className='placeholder-icon'>👨‍💻</div>
            <div>Your Photo Here</div>
          </div>
        </div>
      </div>
      <div className='featured-section'>
        <h2>⚡ Featured Skills</h2>
        <div className='skills-grid'>
          {skillsData.map((skill) => (
            <div key={skill.id} className='skill-card'>
              <div className='skill-icon'>{skill.icon}</div>
              <div className='skill-name'>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
