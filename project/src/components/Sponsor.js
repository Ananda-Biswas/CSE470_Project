import React from 'react'
import'./sponsor.css';
export default function Sponsor() {
  return (
    <div>
      <section id="sponsor">
         <h2 className="about-heading"><center>Sponsors</center></h2>
         
                <div className="row">
                    {/* Photo 1 */}
                    
                    <div className="col-md-4">
                    <h2 className="sponsor"><center>Title Sponsor</center></h2>
                        <img
                            src="images/tata.jpg"
                            alt="Photo 1"
                            className="sponsor-item"
                        />
                    </div>
                    {/* Photo 2 */}
                    <div className="col-md-4">
                    <h2 className="sponsor"><center>Associate Sponsor</center></h2>
                        <img
                            src="images/pepsi.jpg"
                            alt="Photo 2"
                            className="sponsor-item"
                        />
                    </div>
                    <div className="col-md-4">
                    <h2 className="sponsor"><center>Associate Partner</center></h2>
                        <img
                            src="images/amul.png"
                            alt="Photo 3"
                            className="sponsor-item"
                        />
                    </div>

                    <div className="col-md-4">
                    <h2 className="sponsor"><center>Official Broadcaster TV Partner</center></h2>
                        <img
                            src="images/star.jpg"
                            alt="Photo 3"
                            className="sponsor-item"
                        />
                    </div>

                    <div className="col-md-4">
                    <h2 className="sponsor"><center>Official Digital Streaming Partner</center></h2>
                        <img
                            src="images/jio.png"
                            alt="Photo 3"
                            className="sponsor-item"
                        />
                    </div>

                    <div className="col-md-4">
                    <h2 className="sponsor"><center>Official Strategic Timeout Partner</center></h2>
                        <img
                            src="images/ceat.jpg"
                            alt="Photo 3"
                            className="sponsor-item"
                        />
                    </div>


                </div>
           
        </section>
    </div>
  )
}
