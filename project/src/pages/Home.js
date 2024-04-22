import React from 'react';
import Navbar from '../components/Navbar';
import Sponsor from '../components/Sponsor';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Statistics from '../components/Statistics';
import Gallery from '../components/Gallery';
import Teams from '../components/Teams';

function Home() {
  
  return (
    <div>
      <Navbar/>
    
      <Carousel/>
      <br/>
      <About/>
      <br/>
      <Teams/>
      <br/>
      <Statistics/>
      <br/>
      <Gallery/>

      
      <Sponsor/>
      
      
    </div>
  );
}

export default Home;
