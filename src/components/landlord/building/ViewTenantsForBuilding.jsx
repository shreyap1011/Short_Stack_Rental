import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import ApartmentService from "../../../service/ApartmentService";
import LeaseService from "../../../service/LeaseService";
import TenantService from "../../../service/TenantService";
import ViewTenantRow from "./ViewTenantRow";
import logoImage from '../../../img/griddle-white.png';

export default function ViewTenantsForBuilding() {
    let location = useLocation();
    let landlord = location.state.landlord;
    let building = location.state.building;

    let [apartmentState, setApartments] = useState({
        apartments : []
    });

    useEffect (() => {
        ApartmentService.findApartmentByBuildingID(building.id).then((response)=>{
            setApartments(()=>({
                apartments: response.data
            }));
        }, ()=>{});
    }, []);

    

    let tenantid = -1;
    let getTenantByLease = (id) => {
        // LeaseService.findLease(id).then((response) => {
        //     tenantid = response.data.tenantid;
        // }, ()=> { 
        //     console.log("Apartment ID:"  + id + "-- Lease not found");
        // });
        // TenantService.findTenant(tenantid).then((response) => {
        //     return response.data.firstname + " " + response.data.lastname;
        // }, () => {
        //     console.log("Apartment ID:"  + id + "-- Tenant not found");
        // });
        // return "Not Found";
    }

    const navigate = useNavigate();
    let addUnit = (e) => {
        e.preventDefault();
        navigate("/landlord/addApartment", {state : {landlord: landlord, building: building}})
    }
    let addLease = (apartment) => {
        navigate("/landlord/addLease", {state : {landlord: landlord, building: building, apartment: apartment}})
    }
    let goToHomePage = (e) => {
        e.preventDefault();
        navigate("/landlord", {state : {landlord}});
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
        
        <button onClick={addUnit}>Add Unit</button>
        <table>
            <thead>
                <tr>
                    <th>Unit #</th>
                    <th>Tenant</th>
                </tr>
            </thead>
            <tbody>
                {
                    apartmentState.apartments.map((apartment) => {
                        return(
                            <tr>
                                <ViewTenantRow apartment={apartment} building={building} landlord={landlord}/>
                                {/* <td>
                                    <button onClick={()=>{addLease(apartment)}}>Add Lease</button>
                                </td> */}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
        </>
    )
}