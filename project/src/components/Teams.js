import React from 'react';

export default function Teams() {
    return (
        <section id="teams" className="teams-section">
            <div className="container">
                <h2 className="section-heading">Teams</h2>
                <div className="team-grid">
                    {/* Team 1 */}
                    <div className="team-item">
                            <img
                                src="images/kkr.jpg"
                                alt="Team 1"
                                style={{ width: '20%', height: '20%' }}
                                className="team-image"
                            />
                    
                    </div>

                    {/* Team 2 */}
                    <div className="team-item">
                        
                            <img
                                src="team2_logo.png"
                                alt="Team 2"
                                className="team-image"
                            />
                       
                    </div>

                    {/* Team 3 */}
                    <div className="team-item">
                       
                            <img
                                src="team3_logo.png"
                                alt="Team 3"
                                className="team-image"
                            />
                       
                    </div>

                    {/* Repeat for other teams */}
                </div>
            </div>
        </section>
    );
}
