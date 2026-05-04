import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
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
          <h1>🚀 My Journey</h1>
          <p className="subtitle">From beginner to developer</p>
        </div>
        
        <div className="timeline">
          {journeyData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">{item.icon}</div>
              <div className="timeline-content">
                <h3>{item.milestone}</h3>
                <p className="year">{item.year}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="journey-highlight">
          <h2>🏆 Milestones & Achievements</h2>
          <ul className="achievements-list">
            {achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyJourney;
