
import React,{useState} from 'react';

export default function Assigned_player() {
    const [formData, setFormData] = useState({
    teamname: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/assignplayer', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle successful signup
        console.log('Player signed up successfully');
      } else {
        // Handle signup error
        console.error('Error signing up player');
      }
    } catch (error) {
      console.error('Error signing up player', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };




return (
    <div>
        <div id="team_player" className="tabcontent">
            <form onSubmit={handleSubmit}>
                <label htmlFor="teamname">Team name</label>
                <input type="text" name="teamname" value={formData.teamname} onChange={handleChange} required />
                <label htmlFor="player1">Player 1</label>
                <input type="text" name="player1" value={formData.player1} onChange={handleChange} required />
                <label htmlFor="player2">Player 2</label>
                <input type="text" name="player2" value={formData.player2} onChange={handleChange} required />
                <label htmlFor="player3">Player 3</label>
                <input type="text" name="player3" value={formData.player3} onChange={handleChange} required />
                <label htmlFor="player4">Player 4</label>
                <input type="text" name="player4" value={formData.player4} onChange={handleChange} required />
                <label htmlFor="player5">Player 5</label>
                <input type="text" name="player5" value={formData.player5} onChange={handleChange} required />
                

                <input type="submit" value="Register" />
         
        </form>
      </div>



        

    </div>
  )
}
