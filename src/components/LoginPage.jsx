import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get the username and password
    const enteredUsername = username.trim();
    const enteredPassword = password.trim();
  
    // Debugging: Log the fetch URL
    const fetchUrl = "/passwords.txt";
    console.log('Fetching:', fetchUrl);
  
    // Fetch the passwords from the file
    fetch(fetchUrl)
      .then((res) => res.text())
      .then((text) => {
        // Debugging: Log the content of the passwords file
        console.log('Passwords File Content:', text);
  
        const creds = text.split("\n");
        let notFound = true;
  
        creds.forEach((line) => {
          const cred = line.split(",");
          const storedUsername = cred[0].trim();
          const storedPassword = cred[1].trim();
          const storedRole = cred[2].trim();
  
          if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            // If credentials match, store username and redirect
            localStorage.setItem("username", enteredUsername);

            if (storedRole === 'tenant') {
                navigate('/tenant');
              } else if (storedRole === 'landlord') {
                navigate('/landlord');
              } else {
                alert('Invalid user role.');
              }
    
              notFound = false;
          }
        });
  
        if (notFound) {
          alert('Incorrect Login Credentials.');
          setUsername('');
          setPassword('');
        }
      })
      .catch((error) => {
        // Debugging: Log fetch error
        console.error('Fetch Error:', error);
        alert('Error during login.');
      });
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
