import React, { useState } from 'react';
import './Admin.css'; // Import the CSS file for Admin styles
import { Link } from "react-router-dom";

export default function Admin() {
  const [activeColumn, setActiveColumn] = useState(null);
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', available: true },
    { id: 2, name: 'Player 2', available: false },
    { id: 3, name: 'Player 3', available: true },
  ]);

  const handleClick = (column) => {
    setActiveColumn(column);
  };

  const toggleAvailability = (id) => {
    setPlayers(players.map(player => {
      if (player.id === id) {
        return { ...player, available: !player.available };
      }
      return player;
    }));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand" to="/"> 
          <h1 className="about-heading">Admin Dashboard</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto full-width">
            <li className={`nav-item ${activeColumn === 'quality' ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={() => handleClick('quality')}>Quality</Link>
            </li>
            <li className={`nav-item ${activeColumn === 'background-check' ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={() => handleClick('background-check')}>Background Check</Link>
            </li>
            <li className={`nav-item ${activeColumn === 'action' ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={() => handleClick('action')}>Action</Link>
            </li>
            <li className={`nav-item ${activeColumn === 'log-out' ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={() => handleClick('log-out')}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sections for Admin Dashboard */}
      <section id="quality" className={`section ${activeColumn === 'quality' ? 'active' : ''}`}>
        <h2>Quality</h2>
        <div className="players-list">
          <h3>Players</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>
                    <button onClick={() => toggleAvailability(player.id)}>
                      {player.available ? 'Available' : 'Not Available'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="background-check" className={`section ${activeColumn === 'background-check' ? 'active' : ''}`}>
        <h2>Background Check</h2>
        {/* Add content for Background Check section */}
      </section>

      <section id="action" className={`section ${activeColumn === 'action' ? 'active' : ''}`}>
        <h2>Action</h2>
        {/* Add content for Action section */}
      </section>

      <section id="log-out" className={`section ${activeColumn === 'log-out' ? 'active' : ''}`}>
        <h2>Log Out</h2>
        {/* Log out functionality */}
      </section>
    </div>
  );
}
