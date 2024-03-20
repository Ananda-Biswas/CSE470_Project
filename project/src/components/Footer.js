import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-section about">
        <h3>Teams</h3>
        <p>
          Chennai Super Kings<br />
          Delhi Capitals<br />
          Gujarat Titans<br />
          Kolkata Knight Riders<br />
          Lucknow Super Giants<br />
          Mumbai Indians<br />
          Punjab Kings<br />
          Rajasthan Royals<br />
          Royal Challengers Bangalore<br />
          Sunrisers Hyderabad
        </p>
      </div>
      <div className="footer-section about">
        <h3>About</h3>
        <p>
          About Us<br />
          Anti Corruption Policy<br />
          Anti Doping Policy<br />
          TUE Application Form<br />
          Anti Discrimination Policy<br />
          Clothing And Equipment Regulations<br />
          Code Of Conduct For Players And Teams Officials<br />
          News Access Regulations<br />
          Image Use Terms<br />
        </p>
      </div>
      
      <div className="footer-section guidelines">
        <h3>Guidelines</h3>
        <p>
          Code Of Conduct For Match Officials<br />
          Brand And Protection Guidelines<br />
          Governing Council<br />
          Match Playing Conditions<br />
          Suspect Action Policy
        </p>
      </div>
      
      <div className="footer-section contact">
        <h3>Contact</h3>
        <p>
          Contact Us<br />
          Sponsorship<br />
          Privacy Policy<br />
        </p>
      </div>
    </footer>
  )
}
