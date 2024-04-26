
import React, { useState, useEffect } from 'react';
import './show_players.css';
export default function Show_teams() {
  const [teamRegistrations, setTeamRegistrations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/teamRegistrations')
      .then(response => response.json())
      .then(data => setTeamRegistrations(data))
      .catch(error => console.error('Error fetching team registrations:', error));
  }, []);

  return (
    <div id="show_teams" className="tabconten">
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team Parse</th>
            <th>Number of Players</th>
            <th>Home Stadium</th>
          
          </tr>
        </thead>
        <tbody>
          {teamRegistrations.map(team => (
            <tr key={team._id}>
              <td className='box'>{team.teamname}</td>
              <td className='box'>{team.teamparse}</td>
              <td className='box'>{team.numberplayers}</td>
              <td className='box'>{team.homestadium}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}