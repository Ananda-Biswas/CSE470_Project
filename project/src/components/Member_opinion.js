
import React,{useState} from 'react';

export default function Member_opinion() {
    const [formData, setFormData] = useState({
    name: '',
    opinion: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/createopinion', {
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
        <div id="opinion" className="tabcontent">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="opinion">Opinion</label>
                <input type="text" name="opinion" value={formData.opinion} onChange={handleChange} required />

                <input type="submit" value="Submit" />
        </form>
      </div>

    </div>
  )
}
