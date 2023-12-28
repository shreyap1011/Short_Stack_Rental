import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import buildingImage from '../../img/building.jpg';
import logoImage from '../../img/logo.png';
import '../../App.css';
import LandlordService from '../../service/LandlordService';

const LOGIN_URL = 'http://localhost:8080/api/authenticate';

export default function LandlordLoginPage() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [landlord, setLandlord] = useState({
  //   landlordID: '',
  //   email:'',
  //   username: '',
  //   password: '',
  //   phone: '',
  //   firstName: '',
  //   lastName: ''
  // })

  // useEffect(()=> {
  //   axios.post("http://localhost:8080/api/authenticate", { username: username, password: password })
  //   .then((response) => {
  //    console.log("Sign in successful", response.data);
  //    // Store the authentication token for subsequent requests
  //    const token = response.data;
  //    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   })
  //   .catch((error) => {
  //    console.error("Sign in error", error);
  //   });
  // },[])

  // const navigate = useNavigate();
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   LandlordService.findLandlordByUser(username).then((response)=>{
  //     setLandlord(response.data);
  //     if(landlord.password == password) {
  //       navigate("/landlord", {state: {landlord}});
  //     } else {
  //       alert("Invalid password");
  //     }
  //   }, ()=>{
  //     alert("Invalid username")
  //   })
  // };
  
  const { setAuth } = useAuth();
  
  const navigate = useNavigate();
  const location = useLocation();
 // const from = location.state?.from?.pathname || "";

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

  // //trying
  // useEffect(() => {
  //   if (errRef.current) {
  //     errRef.current.focus();
  //   }
  // }, [errMsg]);


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
      setUsername('');
      setPassword('');
      navigate('/landlord', { state: { username } });
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

  }

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
            <h2>Landlord Login</h2>
            <div>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>

              <label>
                Username:
                <input ref={userRef} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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
            {/* Registration link */}
            <p>
              Don't have an account? <Link to="/landlordregistration">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )

}
