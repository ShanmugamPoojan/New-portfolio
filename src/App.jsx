import { Routes, Route } from 'react-router-dom';
import './styling/App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import MyJourney from './pages/MyJourney';
import Header from './components/Header';
import Footer from './components/Footer';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <>
      <div id='main'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/myjourney' element={<MyJourney />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
