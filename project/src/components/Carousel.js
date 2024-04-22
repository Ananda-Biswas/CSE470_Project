import React from 'react'

export default function Carousel() {
    
  return (

        <section id="slider" className="slider-section">
        <div className="slider">
          <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="1000">
                <img src="images/1.webp" alt="First slide" className="d-block" style={{ width: '100%', height: 'auto' }}/>
              </div>
              <div className="carousel-item" data-interval="2000">
              <img src="images/2.webp" alt="First slide" className="d-block" style={{ width: '100%', height: 'auto' }}/>
              </div>
              <div className="carousel-item">
              <img src="images/3.webp" alt="First slide" className="d-block" style={{ width: '100%', height: 'auto' }}/>
              </div>
              <div className="carousel-item">
              <img src="images/4.jpeg" alt="First slide" className="d-block" style={{ width: '100%', height: 'auto' }}/>
              </div>
              <div className="carousel-item">
              <img src="images/5.jpeg" alt="First slide" className="d-block" style={{ width: '100%', height: 'auto' }}/>
              </div>
              <div className="carousel-item">
              <img src="images/6.jpeg" alt="First slide" className="d-block" style={{ width: '100%', height: 'auto' }}/>
              </div>
              <div className="carousel-item">
              <img src="images/7.jpeg" alt="First slide" className="d-block" style={{ width: '100%', height: 'auto' }}/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
  )
}
