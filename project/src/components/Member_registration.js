import React,{useState} from 'react';

export default function Member_registration() {
    const [formData, setFormData] = useState({
    name: '',
    age: null,
    gender: '',
    support:'',
    favourite:'',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/createmember', {
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
        <div id="member_reg" className="tabcontent">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="age">Age</label><br></br>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required /><br></br>
                <br></br><label htmlFor="gender">Gender</label><br />
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /><br></br>
                <label htmlFor="support">Supporting team</label>
                <input type="text" name="support" value={formData.support} onChange={handleChange} required />
                <label htmlFor="favourite">Favourite Player</label>
                <input type="text" name="favourite" value={formData.favourite} onChange={handleChange} required />

                <input type="submit" value="Log in" />
         
        </form>
      </div>



        

    </div>
  )
}
