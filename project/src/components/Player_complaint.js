import React, { useState } from 'react';

export default function Player_complaint() {
    const [formData, setFormData] = useState({
        name: '',
        complaint: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/createcomplaint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Complaint submitted successfully');
                // Optionally, you can clear the form data after submission
                setFormData({ name: '', complaint: '' });
            } else {
                console.error('Error submitting complaint');
            }
        } catch (error) {
            console.error('Error submitting complaint:', error);
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
            <div id="complaint" className="tabcontent">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="complaint">Complaint</label>
                    <input
                        type="text"
                        name="complaint"
                        value={formData.complaint}
                        onChange={handleChange}
                        required
                    /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}
