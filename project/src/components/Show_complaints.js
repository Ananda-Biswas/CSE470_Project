
import React, { useState, useEffect } from 'react';
import './show_opinion.css';
export default function Show_complaints() {
  const [complaint, setComplaint] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/showcomplaints')
      .then(response => response.json())
      .then(data => setComplaint(data))
      .catch(error => console.error('Error fetching opinions:', error));
  }, []);

  return (
    <div id="show_complaint" className="tabconten">
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Opinion</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {complaint.map(complaint => (
            <tr key={complaint._id}>
              <td className='box'>{complaint.name}</td>
              <td className='box'>{complaint.complaint}</td>
              <td className='box'>{complaint.date}</td>
              {/* Add other table cells for additional fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}