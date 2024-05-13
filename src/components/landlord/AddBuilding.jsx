import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BuildingService from "../../service/BuildingService";
import '../../App.css';
import logoImage from '../../img/griddle-white.png';
import useAuth from "../../hooks/useAuth";

export default function AddBuilding() {
    let location = useLocation();
    const { auth } = useAuth();
    let landlord = location.state.landlord;

    let [buildingname, setBuildingName] = useState('');
    let [streetname, setStreetName] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [zip, setZip] = useState('');

    let handleBuildingName = (e) => { setBuildingName(e.target.value) }
    let handleStreetName = (e) => { setStreetName(e.target.value) }
    let handleCity = (e) => { setCity(e.target.value) }
    let handleState = (e) => { setState(e.target.value) }
    let handleZip = (e) => { setZip(e.target.value) }



    const navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let building = {
            landlordid : landlord.landlordID,
            buildingname : buildingname,
            streetname: streetname,
            city : city,
            state : state,
            zip : zip
        }
        
        BuildingService.addBuilding(building, auth.accessToken).then(()=> {
            alert("Building added!");
            const username = landlord.username;
            navigate("/landlord", {state : {username}});
        }, ()=>{
            alert("Building could not be added");
        })
    }

    let goToHomePage = (e) => {
      e.preventDefault();
      const username = landlord.username;
      navigate("/landlord", {state : {username}});
  }
    return(
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logoImage} alt="Griddle Logo" className="logo-image-navbar" />
            </div>
            <ul className="nav-list">
                <li onClick={goToHomePage}>Home Page</li>
                <li><a href="/" >Logout</a></li>
            </ul>
        </nav>


        <div className="form-container">
        <h2>Create New Building</h2>
        <form className="building-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="buildingName">Building Name:</label>
            <input
              type="text"
              id="buildingName"
              onChange={handleBuildingName}
              value={buildingname}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="street">Street:</label>
            <input
              type="text"
              id="street"
              onChange={handleStreetName}
              value={streetname}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              onChange={handleCity}
              value={city}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              onChange={handleState}
              value={state}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="zip">ZIP Code:</label>
            <input
              type="number"
              id="zip"
              onChange={handleZip}
              value={zip}
              required
            />
          </div>
  
          <button type="submit">Add New Building</button>
        </form>
      </div>
      </>
    )
}