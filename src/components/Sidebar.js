import React from 'react'
import dp from "../Assets/dp.jpg";
export default function Sidebar() {
  return (
    <>

<img id='pic' src={dp} alt="PIC" /><br />
<p id='my-name'><b>Mr. Matt Merdock</b> </p><br />

<ul className="nav flex-column">
    <br /><br />

  <li className="nav-item">
  <p>🏠 Home</p>
  </li>

  <li className="nav-item">
    <p> 📃 <b>Deposit</b>  </p>
  </li>

  <li className="nav-item">
  <p>🎁 Offers</p>
  </li>

  <li className="nav-item">
  <p>🏦 Payments</p>
  </li>
  
  <li className="nav-item">
  <p>⚙ Settings</p>
  </li>
</ul>

<div class="toggle form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
</div>
          </>
  )
}

