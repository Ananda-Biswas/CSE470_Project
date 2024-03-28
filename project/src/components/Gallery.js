import React from 'react';

export default function Gallery() {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <h2 className="section-heading">Gallery</h2>
                <div className="row">
                    {/* Photo 1 */}
                    <div className="col-md-4">
                        <img
                            src="path_to_image1.jpg"
                            alt="Photo 1"
                            className="gallery-item"
                        />
                    </div>
                    {/* Photo 2 */}
                    <div className="col-md-4">
                        <img
                            src="path_to_image2.jpg"
                            alt="Photo 2"
                            className="gallery-item"
                        />
                    </div>
                    {/* Video 1 */}
                    <div className="col-md-4">
                        <iframe
                            title="Video 1"
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/video1"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
