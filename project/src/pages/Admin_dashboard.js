import React from 'react'
import TeamForm from '../components/TeamForm'; 
import Assigned_player from '../components/Assigned_player'; 
import Ban_players from '../components/Ban_players'; 
export default function Admin_dashboard() {
  return (
  <div className="body"> 
  <h1 className="h1">Cricket Premier League</h1>

  <div className="tab">
    <button className="tablinks" onClick={openTab('team')}>Team Registration</button>
    <button className="tablinks" onClick={openTab('team_player')}>Player Assigned</button>
 
  </div>



 
  <TeamForm/>
  <Assigned_player/>
  <Ban_players/>

  
  
  
  
  
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

