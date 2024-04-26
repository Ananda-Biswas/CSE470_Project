
import React, { useState, useEffect } from 'react';
import './show_opinion.css';
export default function Show_opinion() {
  const [opinion, setOpinions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/showopinions')
      .then(response => response.json())
      .then(data => setOpinions(data))
      .catch(error => console.error('Error fetching opinions:', error));
  }, []);

  return (
    <div id="opinions" className="tabconten">
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Opinion</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {opinion.map(opinion => (
            <tr key={opinion._id}>
              <td className='box'>{opinion.name}</td>
              <td className='box'>{opinion.opinion}</td>
              <td className='box'>{opinion.date}</td>
              {/* Add other table cells for additional fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}