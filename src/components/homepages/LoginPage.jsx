import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

import TenantService from '../../service/TenantService';

import buildingImage from '../../img/building.jpg';
import logoImage from '../../img/logo.png';
import '../../App.css';
import AuthContext from '../../context/AuthProvider';

const LOGIN_URL = 'http://localhost:8080/api/authenticate';

export default function LoginPage() {


  // useEffect(()=> {
  //   axios.post("http://localhost:8080/api/authenticate", { username: username, password: password })
  //   .then((response) => {
  //    console.log("Sign in successful", response.data);
  //    // Store the authentication token for subsequent requests
  //    const token = response.data;
  //    localStorage.setItem('authToken', token);

  //    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   })
  //   .catch((error) => {
  //    console.error("Sign in error", error);
  //   });
  // })

  // console.log("local storage " + localStorage.getItem('authToken'));

  const { setAuth } = useAuth();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/tenant/dashboard";

  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(()=> {
    setErrMsg('');
  }, [username, password])

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ username, password}),
        {
          headers: {'Content-Type' : 'application/json'}
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data;

      setAuth({username, password, accessToken});
      
      console.log("auth " + auth.accessToken);
      setUsername('');
      setPassword('');
      navigate('/tenant/dashboard', { state: { username } });
    } catch(err) {
      if(!err?.response) {
        setErrMsg('No Server Response');
      } else if(err.response?.status == 400) {
        setErrMsg('Missing Username or Password');
      } else if(err.response?.status == 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }

    // e.preventDefault();
    // let found = false;
    // for(let i = 0; i < state.tenants.length; i++) {
    //   const tenant = state.tenants[i];
    //   if(tenant.username == username) {
    //     if(tenant.password == password) {
    //       found = true;
    //       navigate("/tenant/dashboard", {state: {tenant}});
    //     } else {
    //       found = true;
    //       alert("Password incorrect");
    //       break;
    //     }
    //   } 
    // }
    // if(!found) {
    //   alert("Invalid username");
    // }
  };
  

  return (
    <div>
      {/* Header */}


      {/* Main container */}
      <div className="container">
        {/* Building image */}
        <div className="building-container">
          <img src={buildingImage} alt="building Image" className="building-image" />
        </div>
    


        {/* Login container */}
        <div className="login-container">
       
        <img src={logoImage} alt="Griddle Logo" className="logo-image" />
          <div className="login-box">
            <h2>Tenant Login</h2>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
            <div>
              <label>
                Username:
                <input ref={userRef} type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </label>
            </div>
            <button onClick={handleLogin}>Login</button>
            {/* Registration link  */}
            {/* <p>
              Don't have an account? <Link to="/registration">Register</Link>
            </p>  */}
          </div>
        </div>
      </div>
    </div>
  )
}
