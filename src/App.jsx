import { Routes, Route } from 'react-router-dom';
import './styling/App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id='main'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
