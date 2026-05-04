import { Routes, Route } from 'react-router-dom';
import './styling/App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import MyJourney from './pages/MyJourney';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id='main'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/myjourney' element={<MyJourney />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
