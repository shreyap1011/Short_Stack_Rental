import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import buildingImage from '../../img/building.jpg';
import logoImage from '../../img/logo.png';
import '../../App.css';
import LandlordService from '../../service/LandlordService';

const RegistrationContainer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    let landlord = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      username: username,
      password: password
    }
    LandlordService.addLandlord(landlord).then(()=> {
      alert("Registration successful!");
      navigate("/landlord");
    }, ()=>{
      alert("Registration failed");
    })
  }
  return (
    <div className="container">
        <div className="building-container">
            <img src={buildingImage} alt="building Image" className="building-image" />
         </div>
        <div className="registration-container">

        <img src={logoImage} alt="Griddle Logo" className="logo-image" />

        <div className="registration-box">
            <h2>Landlord Registration</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Create Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Create Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <label>
                First Name: 
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label>
                Last Name:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Phone:
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </label>
            <input type='submit' value="Register"/>
            </form>

            {/* Back to login link */}
            <p>
            Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
        </div>
    </div>
  );
};

export default RegistrationContainer;