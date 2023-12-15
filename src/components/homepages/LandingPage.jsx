import logoImage from '../../img/transparent-griddle-logo.png';
//import landingImage from '../../img/landingPage.png';
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {
  const navigate = useNavigate();

  const goToTenant = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const goToLandlord = (e) => {
    e.preventDefault();
    navigate("/landlordlogin");
  };

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <h1>Welcome to</h1>
      <img src={logoImage} alt="Griddle Logo" className="logo-image" />
      <p>Manage your rental properties and tenants with ease.</p>
      <button onClick={goToTenant}>I'm a tenant.</button>
      <br />
      <button onClick={goToLandlord}>I'm a landlord.</button>
    </div>
  );
}
