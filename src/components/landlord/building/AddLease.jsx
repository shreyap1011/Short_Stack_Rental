import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoImage from '../../../img/griddle-white.png';
import TenantService from "../../../service/TenantService";
import LeaseService from "../../../service/LeaseService";

export default function AddLease() {
    let location = useLocation();
    let landlord = location.state.landlord;
    let building = location.state.building;
    let apartment = location.state.apartment;

/*Tenant Information*/ 
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

/*Lease Information*/ 
    let [startdate, setStartDate] = useState('');
    let [enddate, setEndDate] = useState('');
    let [rent, setRent] = useState('');
    let [utilityfee, setUtilityFee] = useState('');
    let [amenityfee, setAmenityFee] = useState('');
    let [technologyfee, setTechnologyFee] = useState('');
    
/*Handle Tenant Information*/ 
    let handleFirstName = (e) => { setFirstName(e.target.value) }
    let handleLastName = (e) => { setLastName(e.target.value) }
    let handleEmail = (e) => { setEmail(e.target.value) }
    let handlePhone = (e) => { setPhone(e.target.value) }
    let handleUsername = (e) => { setUsername(e.target.value) }
    let handlePassword = (e) => { setPassword(e.target.value) }
    
/*Handle Lease Information*/ 
    let handleStartDate = (e) => { setStartDate(e.target.value) }
    let handleEndDate = (e) => { setEndDate(e.target.value) }
    let handleRent = (e) => { setRent(e.target.value) }
    let handleUtilityFee = (e) => { setUtilityFee(e.target.value) }
    let handleAmenityFee = (e) => { setAmenityFee(e.target.value) }
    let handleTechnologyFee = (e) => { setTechnologyFee(e.target.value) }

    let navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let tenant = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            username: username,
            password: password,
            balance: 0
        }

        TenantService.addTenant(tenant).then(()=> {}, ()=>{});
        
        let lease = {
            tenantid : 1,
            apartmentid : apartment.id,
            startdate : startdate,
            enddate : enddate,
            rent : rent,
            utilityfee : utilityfee,
            amenityfee : amenityfee,
            technologyfee : technologyfee
        }

        LeaseService.addLease(lease).then(()=>{}, ()=>{})

    }

    let goToHomePage = (e) => {
        e.preventDefault();
        navigate("/landlord", {state : {landlord}});
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

        <h3>New Lease</h3>

        <form onSubmit={handleSubmit}>
            <div id="tenant-info">
                <h3>Tenant Information</h3>
                <label>
                    First Name: <input onChange={handleFirstName} type="text" value={firstName}></input>
                </label>
                <label>
                    Last Name: <input onChange={handleLastName} type="text" value={lastName}></input>
                </label>
                <label>
                    Email: <input onChange={handleEmail} type="text" value={email}></input>
                </label>
                <label>
                    Phone: <input onChange={handlePhone} type="text" value={phone}></input>
                </label>
                <label>
                    Username: <input onChange={handleUsername} type="text" value={username}></input>
                </label>
                <label>
                    Password: <input onChange={handlePassword} type="text" value={password}></input>
                </label>
            </div>

            <div id="lease-info">
                <h3>Lease Information</h3>
                <label>
                    Start Date: <input onChange={handleStartDate} type="date" value={startdate}></input>
                </label>
                <label>
                    End Date: <input onChange={handleEndDate} type="date" value={enddate}></input>
                </label>
                <label>
                    Monthly Rent: <input onChange={handleRent} type="number" min="0" value={rent}></input>
                </label>
                <label>
                    Utility Fee: <input onChange={handleUtilityFee} type="number" min="0" value={utilityfee}></input>
                </label>
                <label>
                    Amenity Fee: <input onChange={handleAmenityFee} type="number" min="0" value={amenityfee}></input>
                </label>
                <label>
                    Technology Fee: <input onChange={handleTechnologyFee} type="number" min="0" value={technologyfee}></input>
                </label>
            </div>
            <input type="submit" value="Create Lease"/>    
        </form>    
        </>
    )
}