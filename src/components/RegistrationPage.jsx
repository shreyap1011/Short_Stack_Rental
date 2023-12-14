import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const RegistrationContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationOption, setRegistrationOption] = useState('tenant'); // Default to 'tenant'
  const navigate = useNavigate();

  const handleRegistration = () => {
    // Perform registration logic based on the selected option
    // For simplicity, this example just logs the registration details
    console.log(`Registering as ${registrationOption}:`);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    // Add your registration logic here

    // After registration, navigate to the corresponding dashboard
    if (registrationOption === 'tenant') {
      navigate('/tenant/dashboard');
    } else if (registrationOption === 'landlord') {
      navigate('/landlord');
    } else {
      alert('Invalid registration option.');
    }
  };

  const switchRegistrationOption = () => {
    // Toggle between 'tenant' and 'landlord' options
    setRegistrationOption((prevOption) => (prevOption === 'tenant' ? 'landlord' : 'tenant'));
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Registration</h2>
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleRegistration}>Register</button>

        {/* Switch between registration options */}
        <p>
          Register as:
          <button onClick={switchRegistrationOption}>
            {registrationOption === 'tenant' ? 'Landlord' : 'Tenant'}
          </button>
        </p>

        {/* Back to login link */}
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationContainer;
