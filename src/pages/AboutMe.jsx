import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import Card from '../components/Card';
import '../styling/aboutme.css';

function AboutMe() {
  const [aboutData, setAboutData] = useState(null);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    setAboutData(portfolioData.about);
    setExperienceData(portfolioData.experience);
    setSkillsList(portfolioData.skillsList);
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div className="aboutme-page">
      <div className="about-container">
        <div className="about-header section">
          <h1>👤 About Me</h1>
          <p className="subtitle">Get to know me better</p>
        </div>

        <div className="about-content scatter-pattern">
          <div className='container'>
            <div className="about-intro">
              <h2>Who Am I?</h2>
              <p>{aboutData.intro}</p>
            </div>

            <div className="about-section ">

              <h2>Experience</h2>
              {experienceData.map((exp) => (
                <Card item={exp} />
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default AboutMe;
