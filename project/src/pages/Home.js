import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="about-heading"> <center>About</center></h2>
              <div className="about-content">
              Welcome to Cricket Premier League, where the excitement of cricket meets the thrill of competition. Cricket
               Premier League is a premier cricket tournament that brings together the best cricket teams from around 
               the world to compete for glory, honor, and the prestigious championship title. At Cricket Premier League,
                teams are formed through a dynamic auction process, allowing players from various backgrounds, countries 
                and skill levels to join forces and showcase their talent on an international platform. Join us as we embark on this thunderous 
              journey of cricketing excellence, where every match is a challenging in the competition. Whether you are a seasonal fan of cricket
              or a casual observer, Cricket Premier League promises an unforgettable experience filled
               with unforgettable moments, electrifying performances, and the pure joy of cricket.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
