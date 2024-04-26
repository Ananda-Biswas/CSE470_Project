import React, { useState, useEffect } from 'react';
import './show_players.css';
export default function Show_players() {
  const [playerRegistrations, setPlayerRegistrations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/playerRegistrations')
      .then(response => response.json())
      .then(data => setPlayerRegistrations(data))
      .catch(error => console.error('Error fetching player registrations:', error));
  }, []);

  return (
    <div id="show_players" className="tabconten">
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Debut</th>
            <th>Base Price</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {playerRegistrations.map(player => (
            <tr key={player._id}>
              <td className='box'>{player.name}</td>
              <td className='box'>{player.age}</td>
              <td className='box'>{player.country}</td>
              <td className='box'>{player.debut}</td>
              <td className='box'>{player.price}</td>
              <td className='box'>{player.position}</td>
              {/* Add other table cells for additional fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}