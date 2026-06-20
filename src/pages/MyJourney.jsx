import { useState, useEffect} from 'react';
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
    <div className="journey-page">
      <div className="journey-container">
        <div className="journey-header">
          <h1>My Journey</h1>
          <p className="subtitle">From beginner to developer</p>
        </div>

        <div className="cards-list scatter-pattern">
          <div className='container'>
            <h2>Heloo</h2>
            {journeyData.map((item) => (
              <Card item={item} />
              // <Card item={{"title": "Hello", "description": "Hello des"}}></Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default MyJourney;

