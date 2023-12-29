import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import ApartmentService from "../../../service/ApartmentService";
import LeaseService from "../../../service/LeaseService";
import TenantService from "../../../service/TenantService";
import ViewTenantRow from "./ViewTenantRow";
import useAuth from "../../../hooks/useAuth";
import logoImage from '../../../img/griddle-white.png';

export default function ViewTenantsForBuilding() {
    let location = useLocation();
    const { auth } = useAuth();
    let landlord = location.state.landlord;
    let building = location.state.building;

    let [apartmentState, setApartments] = useState({
        apartments : []
    });

    useEffect (() => {
        ApartmentService.findApartmentByBuildingID(building.id, auth.accessToken).then((response)=>{
            setApartments(()=>({
                apartments: response.data
            }));
        }, ()=>{});
    }, []);

    const navigate = useNavigate();
    let addUnit = (e) => {
        e.preventDefault();
        navigate("/landlord/addApartment", {state : {landlord: landlord, building: building}})
    }
    let goToHomePage = (e) => {
        e.preventDefault();
        const username = landlord.username;
        navigate("/landlord", {state : {username}});
    }
    let goToBalanceOverview = (e) => {
        e.preventDefault();
        navigate("/landlord/balanceOverview", {state : {landlord}});
    }
    

    return (
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logoImage} alt="Griddle Logo" className="logo-image-navbar" />
            </div>
            <ul className="nav-list">
                <li onClick={goToHomePage}>Home Page</li>
                <li onClick={goToBalanceOverview}>Balance Overview</li>
                <li><a href="/" >Logout</a></li>
            </ul>
        </nav>
        <div>
            <h2>{building.buildingname}</h2>
            <p>{building.streetname}</p>
            <p>{building.city}, {building.state} {building.zip}</p>
        </div>
        
        
        <table>
            <thead>
                <tr>
                    <th>Unit #</th>
                    <th>Outstanding Balance</th>
                    <th>Tenant</th>
                </tr>
            </thead>
            <tbody>
                {
                    apartmentState.apartments.map((apartment) => {
                        return(
                            <tr>
                                <ViewTenantRow apartment={apartment} building={building} landlord={landlord}/>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <button onClick={addUnit}>Add Unit</button>
        
        </>
    )
}