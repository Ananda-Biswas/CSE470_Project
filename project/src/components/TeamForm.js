import React,{useState} from 'react';

export default function TeamForm() {
    const [formData, setFormData] = useState({
    teamname: '',
    teamparse: '',
    numberplayers:0,
    homestadium: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/createteam', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle successful signup
        console.log('signed up successfully');
      } else {
        // Handle signup error
        console.error('Error signing up');
      }
    } catch (error) {
      console.error('Error signing up', error);
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
        <div id="team" className="tabcontent">
            <form onSubmit={handleSubmit}>
                <label htmlFor="teamname">Team name</label>
                <input type="text" name="teamname" value={formData.teamname} onChange={handleChange} required />
                <label htmlFor="teamparse">Team Parse</label>
                <input type="text" name="teamparse" value={formData.teamparse} onChange={handleChange} required />
                <label htmlFor="numberplayers"> Number of Players</label> <br></br>
                <input type="number" name="numberplayers" value={formData.numberplayers} onChange={handleChange} required />
                <br></br><label htmlFor="homestadium">Home Stadium</label>
                <input type="text" name="homestadium" value={formData.homestadium} onChange={handleChange} required />



                <input type="submit" value="Log in" />
        </form>
      </div>

    </div>
  )
}
