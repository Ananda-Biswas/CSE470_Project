import React,{useState} from 'react';

export default function Member_registration() {
    const [formData, setFormData] = useState({
    name: '',
    age: null,
    country: '',
    height:'',
    blood_group:'',
    debut:'',
    price:'',
    position: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/registerplayer', {
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
        <div id="player_reg" className="tabcontent">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="age">Age</label><br></br>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required /><br></br>
                <label htmlFor="country">Nationality</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                <label htmlFor="height">Height</label>
                <input type="text" name="height" value={formData.height} onChange={handleChange} required />
                <label htmlFor="blood_group">Blood Group</label>
                <input type="text" name="blood_group" value={formData.blood_group} onChange={handleChange} required />
                <label htmlFor="debut">Debut</label>
                <input type="text" name="debut" value={formData.debut} onChange={handleChange} required />
                <label htmlFor="price">Price</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} required />
                <label htmlFor="position">Position</label>
                <input type="text" name="position" value={formData.position} onChange={handleChange} required />

                <input type="submit" value="Log in" />
         
        </form>
      </div>



        

    </div>
  )
}
