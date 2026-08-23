import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import Card from '../components/Card';
import '../styling/myjourney.css';

function MyJourney() {
  const [journeyData, setJourneyData] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    setJourneyData(portfolioData.journey);
    setAchievements(portfolioData.achievements);
  }, []);

  return (
    <div className="journey-page main-page">
      <div className="journey-header main-page-header container">
        <h2>
          <span>
            My Journey
          </span>
        </h2>
        <p className="subtitle">My journey into the world of technology has been shaped by curiosity, determination, and a desire to create something of my own. From the beginning of my educational journey, I was interested in computers and technology. I was also one of the brighter students in my class and always had a curiosity to explore new things. I would describe myself as an ambivert—someone who can enjoy both social interactions and personal time.</p>
      </div>

      <div className="cards-container scatter-pattern">
        <div className='container'>
          {/* <h2>Heloo</h2> */}
          {journeyData.map((item, index) => (
            <Card item={{ 'index': index + 1, ...item }} />
            // <Card item={{"title": "Hello", "description": "Hello des"}}></Card>
          ))}
        </div>
      </div>

    </div>
  );
}

export default MyJourney;

