import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
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
        <div className="about-header">
          <h1>👤 About Me</h1>
          <p className="subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-intro">
            <h2>🎯 Who Am I?</h2>
            <p>{aboutData.intro}</p>
          </div>

          <div className="about-section">
            <h2>💼 Experience</h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="experience-item">
                <span className="exp-icon">{exp.icon}</span>
                <div className="exp-content">
                  <h3>{exp.title}</h3>
                  <p className="duration">{exp.duration}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-section">
            <h2>🛠️ Skills</h2>
            <div className="skills-list">
              {skillsList.map((skill, idx) => (
                <span key={idx} className="skill-badge">💪 {skill}</span>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>✨ Interests</h2>
            <p>{aboutData.interests}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
