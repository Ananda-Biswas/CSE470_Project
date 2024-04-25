
import React from 'react';
import Member_registration from '../components/Member_registration';
import Member_opinion from '../components/Member_opinion';

export default function Member_dashboard() {


  return (
    <div className="body"> 
      <h1 className="h1">Cricket Premier League</h1>

      <div className="tab">
        <button className="tablinks" onClick={openTab('member_reg')}>Member Registration</button>
        <button className="tablinks" onClick={openTab('opinion')}>Opinion</button>
    
      </div>

  

     
      <Member_registration/>
      <Member_opinion/>
      
      
      
      
      
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
