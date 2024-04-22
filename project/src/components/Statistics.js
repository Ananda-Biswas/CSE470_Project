import React, { useState } from 'react';

export default function Statistics() {
    const pointsData = [
        {
            year: 2022,
            teams: [
                { name: 'Team A', points: 10 },
                { name: 'Team B', points: 8 },
                { name: 'Team C', points: 6 },
            ],
        },
        {
            year: 2021,
            teams: [
                { name: 'Team X', points: 12 },
                { name: 'Team Y', points: 9 },
                { name: 'Team Z', points: 7 },
            ],
        },
        // Add more years and teams as needed
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
                    <h2 className="section-heading"><center>Points Table</center></h2>
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
