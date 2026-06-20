import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import '../styling/home.css'
import Card from '../components/Card.jsx';
import Bg from '../assets/samp.gif'

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
          <h1 className='hero-title'>
            <span className='typewriter'>Hey, <br />{heroData.title}</span>
          </h1>
          <p className='hero-subtitle'>{heroData.subtitle}</p>
          <p className='hero-description'>{heroData.description}</p>
        </div>
      </div>
      {/* <div className="quick-links">
        <div className="container">
          <h1>Quick Links</h1>
          <div className='hero-buttons'>
            <button className="button">Button 1</button>
            <button className="button">Button 2</button>
            <button className="button">Button 3</button>
            <button className="button">Button 4</button>
          </div>
        </div>
      </div> */}
      <div className='featured-section scatter-pattern'>
        <div className='container'>
          <h2>Overview</h2>
          <div className="card">
            <div className="card-content">
              <div className="card-title">
                <div className="card-circle-container">
                  <div className="card-circle"></div>
                  <div className="card-circle"></div>
                </div>
                <span>A quick overview of myself</span>
              </div>
              <div className="card-image">
                <img src={Bg} alt="card-image" />
              </div>
              <div className="card-description">
              
                <h1 className='section-title'>About Me</h1> 
                <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta exercitationem asperiores ipsa, in velit rerum quod eius numquam dolorum, ullam dignissimos eum dolores optio odit repudiandae consectetur adipisci officiis voluptatum! Voluptates necessitatibus tempore, assumenda voluptatibus, debitis nulla exercitationem aliquam dolore ex, molestiae magni doloremque velit inventore explicabo expedita natus at reprehenderit. Iure impedit sit soluta est natus in velit totam qui possimus, aut vitae quasi dolore ut fugiat? Ex, reiciendis hic! Rem possimus obcaecati delectus provident repellat nihil. Consequatur natus praesentium necessitatibus quibusdam voluptas nisi quae cumque, animi sequi atque numquam iste amet, itaque, delectus neque nostrum! Eius, ab et? Id, exercitationem? Aut facere dolorem dicta cupiditate qui similique commodi rem, vitae voluptates sit voluptatem, nostrum a deserunt officiis blanditiis expedita possimus in modi explicabo quia culpa iste quam, repellat laborum. Necessitatibus libero sunt vel temporibus repellat in recusandae dolore facilis consequatur corporis beatae maiores culpa aliquid, sapiente aperiam ducimus, 
                  <br/> <br/>
                  molestiae facere, dolores tempore. Cumque maxime, voluptatum similique accusantium architecto dolor illum! Laudantium debitis unde tenetur rem aliquam nulla reiciendis esse fuga labore recusandae sapiente, adipisci voluptas, consectetur ex. Reprehenderit qui explicabo nihil perspiciatis culpa ab maxime magni quisquam sint provident similique, molestiae dignissimos et eligendi suscipit distinctio. At! </span>
              </div>
            </div>
            <div className="card-buttons">
              <div className="button">
                View My Projects
              </div>
              <div className="button">
                View My Journey
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
