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
    <div className="journey-page main-page">
        <div className="journey-header main-page-header">
          <h1>My Journey</h1>
          <p className="subtitle">From beginner to developer</p>
        </div>

        <div className="cards-container scatter-pattern">
          <div className='container'>
            <h2>Heloo</h2>
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

