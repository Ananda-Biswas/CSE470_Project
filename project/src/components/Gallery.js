import React from 'react';
import './gallery.css';
export default function Gallery() {
    return (
        <section id="gallery" className="gallery-section">
         
         <h2 className="about-heading"><center>Gallery</center></h2>
                <div className="row">
                    {/* Photo 1 */}
                    <div className="col-md-4">
                        <img
                            src="images/f.png"
                            alt="Photo 1"
                            className="gallery-item"
                        />
                    </div>
                    {/* Photo 2 */}
                    <div className="col-md-4">
                        <img
                            src="images/fi.png"
                            alt="Photo 2"
                            className="gallery-item"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src="images/n.png"
                            alt="Photo 3"
                            className="gallery-item"
                        />
                    </div>
                    {/* Video 1 */}
                    <div className="col-md-4">
                        <iframe
                            title="Video 1"
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/WO34rrsuOUc"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="col-md-4">
                        <iframe
                            title="Video 2"
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/5Rx7HXCfVQw"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="col-md-4">
                        <iframe
                            title="Video 1"
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/Uie42Qn0Fvg"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>



                </div>
           
        </section>
    );
}
