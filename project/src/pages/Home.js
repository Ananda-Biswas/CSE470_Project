import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Statistics from '../components/Statistics';
import Gallery from '../components/Gallery';
import Teams from '../components/Teams';

function Home() {
  
  return (
    <div>
      <Navbar />
    
      <Carousel/>
      
      <br/>
      <About/>
      <br/>
      <Teams/>
      <br/>
      <Statistics/>
      <br/>
      <Gallery/>

      
      <Footer />
      
      
    </div>
  );
}

export default Home;
