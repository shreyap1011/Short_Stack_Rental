import { useEffect, useState } from "react"
import TenantService from "../../service/TenantService";
import { useNavigate, useLocation } from "react-router-dom";
import LandlordService from "../../service/LandlordService";
import '../../App.css';
import logoImage from '../../img/griddle-white.png';
import useAuth from "../../hooks/useAuth";
import ViewAllBuildings from "./ViewAllBuildings";

export default function ViewAllLandlordInfo() {
    const location = useLocation();
    const username = location.state.username;
    const {auth} = useAuth();

    let [landlordState, setLandlord] = useState({
        landlord : {}
    })

    useEffect (()=>{
        LandlordService.findLandlordByUser(username, auth.accessToken).then((response)=>{
            setLandlord(()=>({
                landlord : response.data
            }));
        }, ()=>{});
    }, [username]);

    let navigate = useNavigate();
    
    let goToBalanceOverview = (e) => {
        e.preventDefault();
        let landlord = landlordState.landlord;
        navigate("/landlord/balanceOverview", {state : {landlord}});
    }

    return(
        <>
        <nav className="navbar">
        <div className="navbar-brand">
            <img src={logoImage} alt="Griddle Logo" className="logo-image-navbar" />
        </div>
        <ul className="nav-list">
            <li><a href="/landlord">Home Page </a></li>
            <li onClick={goToBalanceOverview}>Balance Overview</li>
            <li><a href="/" >Logout</a></li>
        </ul>
        </nav>

        <h2>Welcome {landlordState.landlord.firstName}!</h2>
        <h2>All Buildings</h2>

        <ViewAllBuildings landlord={landlordState.landlord}/>
        </>
    )
}