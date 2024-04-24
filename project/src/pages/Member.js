import React, { useState } from 'react';
import './Member.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeColumn, setActiveColumn] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [supportedTeam, setSupportedTeam] = useState('');
  const [favoritePlayer, setFavoritePlayer] = useState('');
  const [opinions, setOpinions] = useState([]);

  const handleClick = (column) => {
    setActiveColumn(column);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Submit profile details to backend or perform further actions
    console.log("Profile submitted:", { name, age, gender, supportedTeam, favoritePlayer });
  };

  const handleOpinionSubmit = (e) => {
    e.preventDefault();
    const newOpinion = e.target.opinion.value;
    setOpinions([...opinions, { opinion: newOpinion, replies: [] }]);
    e.target.reset();
  };

  const handleReplySubmit = (opinionIndex) => (e) => {
    e.preventDefault();
    const newReply = e.target.reply.value;
    const updatedOpinions = [...opinions];
    updatedOpinions[opinionIndex].replies.push(newReply);
    setOpinions(updatedOpinions);
    e.target.reset();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand" to="/"> 
          <h1 className="about-heading">Cricket Premier League</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto full-width">
            <li className={`nav-item ${activeColumn === 'create-profile' ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={() => handleClick('create-profile')}>Create Profile</Link>
            </li>
            <li className={`nav-item ${activeColumn === 'rapid-world' ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={() => handleClick('rapid-world')}>Rapid World</Link>
            </li>
            <li className={`nav-item ${activeColumn === 'opinions' ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={() => handleClick('opinions')}>Opinions</Link>
            </li>
            <li className={`nav-item ${activeColumn === 'log-out' ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={() => handleClick('log-out')}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section id="create-profile" className={`section ${activeColumn === 'create-profile' ? 'active' : ''}`}>
        <h2>Create Profile</h2>
        <form onSubmit={handleProfileSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label>Supported Team:</label>
            <input type="text" value={supportedTeam} onChange={(e) => setSupportedTeam(e.target.value)} />
          </div>
          <div>
            <label>Favorite Player:</label>
            <input type="text" value={favoritePlayer} onChange={(e) => setFavoritePlayer(e.target.value)} />
          </div>
          <button type="submit">Save</button>
        </form>
      </section>

      <section id="rapid-world" className={`section ${activeColumn === 'rapid-world' ? 'active' : ''}`}>
        <h2>Rapid World</h2>
        {/* Display profile details in a table */}
        <table>
          <thead>
            <tr>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name: {name}</td>
            </tr>
            <tr>
              <td>Age: {age}</td>
            </tr>
            <tr>
              <td>Gender: {gender}</td>
            </tr>
            <tr>
              <td>Supported Team: {supportedTeam}</td>
            </tr>
            <tr>
              <td>Favorite Player: {favoritePlayer}</td>
            </tr>
          </tbody>
        </table>
        {/* Add opinion box */}
        <div>
          <h3>Opinion Box</h3>
          <form onSubmit={handleOpinionSubmit}>
            <textarea name="opinion" rows="4" cols="50" placeholder="Write your opinion here..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section id="opinions" className={`section ${activeColumn === 'opinions' ? 'active' : ''}`}>
        <h2>Opinions</h2>
        {/* Display opinions */}
        {opinions.map((opinion, opinionIndex) => (
          <div key={opinionIndex} className="opinion-box">
            <p>{opinion.opinion}</p>
            {/* Display replies */}
            {opinion.replies.map((reply, replyIndex) => (
              <div key={replyIndex} className="reply">
                <p>{reply}</p>
              </div>
            ))}
            {/* Add reply functionality */}
            <form onSubmit={handleReplySubmit(opinionIndex)}>
              <textarea name="reply" rows="2" cols="50" placeholder="Write your reply here..."></textarea>
              <button type="submit">Reply</button>
            </form>
          </div>
        ))}
      </section>
      
      <section id="log-out" className={`section ${activeColumn === 'log-out' ? 'active' : ''}`}>
        <h2>Log Out</h2>
        {/* Log out functionality */}
      </section>
    </div>
  );
}