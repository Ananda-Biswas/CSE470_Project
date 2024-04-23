import React from 'react';
import './Login.css'; // Import the CSS file

export default function Login() {

  return (
    <div className="body"> 
      <h1 className="h1">Cricket Premier League</h1>

      <div className="tab">
        <button className="tablinks" onClick={openTab('admin')}>Admin</button>
        <button className="tablinks" onClick={openTab('player')}>Player</button>
        <button className="tablinks" onClick={openTab('member')}>User</button>
      </div>

      <div id="admin" className={"tabcontent"} >
        <form method="post" action="/admin_login_view">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
          <input type="submit" value="Login" />
        </form>
      </div>

      <div id="player" className="tabcontent ">
        <form method="post" action="/player_login_view">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
          <input type="submit" value="Login" />
          <button className="tablinks green-button" onClick={openTab('forgot_player')}>Forgot Password</button>
          <h3> </h3>
          <label className="h2"> Wanna register to World Class Tournament?</label>
          <button className="tablinks green-button" onClick={openTab('signup_player')}> Join as Player </button>
        </form>
      </div>

      <div id="member" className="tabcontent">
        <form method="post" action="/member_login_view">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
          <input type="submit" value="Login" />

          <button className="tablinks green-button" onClick={openTab('forgot_member')}>Forgot Password</button>
          <h3> </h3>
          <label className="h2"> Don't have an account?</label>
          <button className="tablinks green-button" onClick={openTab('signup_member')}> Join as member </button>
        </form>
      </div>

      <div id="signup_player" className="tabcontent">
        <form method="post" action="/contact">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" required />
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" required />
          <label htmlFor="id">ID</label>
          <input type="text" name="text" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="password" name="confirm_password" required />
          <input type="submit" value="Sign Up" />
        </form>
      </div>

      <div id="signup_member" className="tabcontent">
        <form method="post" action="/contact">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" required />
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="password" name="confirm_password" required />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
      
      <div id="forgot_player" className="tabcontent">
        <form method="post" action="/reset_password">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
          <label htmlFor="password">New Password</label>
          <input type="password" name="password" required />
          <input type="submit" value="Reset Password" />
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
  );
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