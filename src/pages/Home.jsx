import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Gallery from '../components/Gallery';
// import image from '../assets/Copy.png';
import '../styling/home.css'

function Home() {
  return (
    <div className="home-page">
      <div className='image'>
        {/* <img src={image} alt="" /> */}
      </div>
      <div></div>
      <div></div>
      <Gallery />
    </div>
  );
}

export default Home;
