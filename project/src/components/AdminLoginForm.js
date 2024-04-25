import React, { useState } from 'react';
import axios from 'axios';

export default function AdminLoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/adminlogin', formData);

            if (response.status === 200) {
                
                console.log('User logged in successfully');
                // Reset form data after successful login
                setFormData({ username: '', password: '' });
                setError('');
            } else {
                setError(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An unexpected error occurred');
        } finally {
            setLoading(false);
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
            <div id="admin" className="tabcontent">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="submit"
                        value={loading ? 'Logging in...' : 'Log in'}
                        disabled={loading}
                    />
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}
