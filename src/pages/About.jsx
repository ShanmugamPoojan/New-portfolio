import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import Card from '../components/Card';
import '../styling/about.css';

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    setAboutData(portfolioData.about);
    setExperienceData(portfolioData.about);
    setSkillsList(portfolioData.skillsList);
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div className="about-page main-page">
      <div className="about-header main-page-header container">
        <h2>About Me</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor obcaecati numquam quod repellat ut, nulla, fugit soluta tempora hic illo recusandae autem facilis eum. Excepturi nobis sint impedit voluptas dignissimos minus, voluptatibus ipsum eligendi iste ea, distinctio hic cum? Sed rem natus debitis necessitatibus! Temporibus tenetur iusto atque corporis?</p>
      </div>

      <div className="cards-container scatter-pattern">
        <div className='container'>
          <div className="about-intro">
            <h2>Who Am I?</h2>
            <p>{aboutData.intro}</p>
          </div>

          <div className="about-section ">
            {experienceData.map((exp, ind) => (
              <Card item={{ 'index': ind + 1, ...exp }} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
