import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ApartmentService from "../../../service/ApartmentService";
import useAuth from "../../../hooks/useAuth";
import logoImage from '../../../img/griddle-white.png';

export default function AddApartment() {
    let location = useLocation();
    const { auth } = useAuth();
    let landlord = location.state.landlord;
    let building = location.state.building;

    let [apartment, setApartment] = useState('');
    let handleApartment = (e) => { setApartment(e.target.value) }
    const navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let newApartment = {
            buildingid : building.id,
            apartmentnumber : apartment
        }
        ApartmentService.addApartment(newApartment, auth.accessToken).then(()=> {
            alert("Apartment added successfully!");
            navigate("/landlord/viewBuilding", {state : {landlord: landlord, building: building}})
        }, () => {
            alert("Apartment could not be added")
        })
    }
    let goToHomePage = (e) => {
        e.preventDefault();
        const username = landlord.username;
        navigate("/landlord", {state : {username}});
    }
    return (
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
       

        <div className="form-container" style={{ marginTop: '200px' }}>
        <h2>Add Unit to {building.buildingname}</h2>
        <form className="unit-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="apartmentNumber">Apartment Number:</label>
            <input
                type="text"
                id="apartmentNumber"
                onChange={handleApartment}
                value={apartment}
                required
            />
            </div>

            <button type="submit">Add Unit</button>
        </form>
        </div>

        </>
    )
}