import React,{useState} from 'react';

export default function MemberSignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    location: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle successful signup
        console.log('User signed up successfully');
      } else {
        // Handle signup error
        console.error('Error signing up user');
      }
    } catch (error) {
      console.error('Error signing up user', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };






  const [formDatas, setFormDatas] = useState({
    username:'',
    password: '',
});

const handleSubmit1 = async (event) => {
    event.preventDefault();

    try {
        const response1 = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDatas)
        });
      

        if (response1.ok) {
            console.log('User logged in successfully');
          
            console.log(localStorage.setItem("authToken"))
        } else {
            // If response is not ok, parse the response body as JSON
            const errorData = await response1.json();
            console.error('Error logging in:', errorData.message);
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
};
const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormDatas((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

return (
    <div>
        <div id="member" className="tabcontent">
            <form onSubmit={handleSubmit1}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={formDatas.username} onChange={handleChanges} required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={formDatas.password} onChange={handleChanges} required />

                <input type="submit" value="Log in" />
          <button className="tablinks green-button" onClick={openTab('forgot_member')}>Forgot Password</button>
          <h3> </h3>
          <label className="h2"> Don't have an account?</label>
          <button className="tablinks green-button" onClick={openTab('signup_member')}> Join as member </button>
        </form>
      </div>

      <div id="signup_member" className="tabcontent">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          
          <label htmlFor="location">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          
          
          <input type="submit" value="Sign Up" />
        </form>
      </div>

      <div id="forgot_member" className="tabcontent">
        <form method="post" action="/reset_password">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
          <label htmlFor="password">New Password</label>
          <input type="password" name="password" required />
          <input type="submit" value="Reset Password" />
        </form>
      </div>


        

    </div>
  )
}
const openTab = (tabName) => (evt) => {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  };

