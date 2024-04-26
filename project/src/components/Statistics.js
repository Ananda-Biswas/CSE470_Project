import React, { useState } from 'react';
import './Statistics.css';
export default function Statistics() {
    const pointsData = [
        {
            year: 2023,
            teams: [
                { name: 'GT', points: 20 },
                { name: 'CSK', points: 17 },
                { name: 'MI', points: 16 },
                { name: 'RR', points: 14 },
                { name: 'RCB', points: 14 },
                { name: 'KKR', points: 12 },
                { name: 'PBKS', points: 12 },
                { name: 'DC', points: 10 },
                { name: 'SRH', points: 8 },
            ],
        },
        {
            year: 2022,
            teams: [
                { name: 'GT', points: 20 },
                { name: 'RR', points: 18 },
                { name: 'RCB', points: 16 },
                { name: 'DC', points: 14 },
                { name: 'PBKS', points: 14 },
                { name: 'KKR', points: 14 },
                { name: 'SRH', points: 12 },
                { name: 'CSK', points: 8 },
                { name: 'MI', points: 8 },
            ],
        },
        {
            year: 2021,
            teams: [
                { name: 'DC', points: 20 },
                { name: 'CSK', points: 18 },
                { name: 'RCB', points: 18 },
                { name: 'KKR', points: 14 },
                { name: 'MI', points: 14 },
                { name: 'PBKS', points: 12 },
                { name: 'RR', points: 10 },
                { name: 'SRH', points: 6 },
            ],
        },

    ];

    const [selectedYear, setSelectedYear] = useState(pointsData[0].year);
    const [showOptions, setShowOptions] = useState(false);

    const handleOptionClick = (year) => {
        setSelectedYear(year);
        setShowOptions(false);
    };

    return (
        <div>
            <section id="statistics" className="points-section">
                <div className="container">
                    <h2 className="about-heading"><center>Points Table</center></h2>
                    <div className="dropdown">
                        <button
                            className="dropdown-button"
                            onClick={() => setShowOptions(!showOptions)}
                            aria-expanded={showOptions ? 'true' : 'false'}
                        >
                            Year
                            {showOptions && (
                                <div className="dropdown-content">
                                    {pointsData.map((data, index) => (
                                        <button
                                            key={index}
                                            className="dropdown-item"
                                            onClick={() => handleOptionClick(data.year)}
                                        >
                                            {data.year}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </button>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {pointsData
                                .find((data) => data.year === selectedYear)
                                .teams.map((team, index) => (
                                    <tr key={index}>
                                        <td>{team.name}</td>
                                        <td>{team.points}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
