
import React from 'react';
import Player_complaint from '../components/Player_complaint';
import Player_registration from '../components/Player_registration';
import Show_players from '../components/Show_players';
import Show_teams from '../components/Show_teams';


export default function Player_dashboard() {


  return (
    <div className="body"> 
      <h1 className="h1">Cricket Premier League</h1>

      <div className="tab">
        <button className="tablinks" onClick={openTab('player_reg')}>Player Registration</button>
        <button className="tablinks" onClick={openTab('complaint')}>Complaint</button>
        <button className="tablinks" onClick={openTab('show_players')}>Registered Players</button>
        <button className="tablinks" onClick={openTab('show_teams')}>Registered Teams</button>
      
    
      </div>

  


      <Player_complaint/>
      <Player_registration/>
      <Show_players/>
      <Show_teams/>
      
      
      
      
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
