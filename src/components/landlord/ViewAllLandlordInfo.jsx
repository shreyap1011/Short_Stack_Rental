import { useEffect, useState } from "react"
import TenantService from "../../service/TenantService";
import { useNavigate } from "react-router-dom";
import BuildingService from "../../service/BuildingService";

export default function ViewAllLandlordInfo() {

    let[state, setState] = useState({
        tenants: []
    });
    useEffect (() => {
        TenantService.getAllTenants().then((response)=>{
            setState(()=>({
                tenants: response.data
            }));
        }, ()=>{});
    }, []);

    let[buildings, setBuildings] = useState({
        buildings:[]
    });
    useEffect (()=>{
        BuildingService.getAllBuildings().then((response)=>{
            setBuildings(()=>({
                buildings: response.data
            }));
        }, ()=>{});
    }, []);

    let navigate = useNavigate();
    let addTenant = (e) => {
        e.preventDefault();
        navigate("/landlord/addTenant");
    }

    return(
        <>
        <h2>All Tenants</h2>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Landlord ID</th>
                    <th>Building Name</th>
                    <th>Street Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                </tr>
            </thead>
            <tbody>
                {
                    buildings.buildings.map((building) => {
                        return(
                            <tr>
                                <td>{building.id}</td>
                                <td>{building.landlordid}</td>
                                <td>{building.buildingname}</td>
                                <td>{building.streetname}</td>
                                <td>{building.city}</td>
                                <td>{building.state}</td>
                                <td>{building.zip}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Balance</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.tenants.map((tenant) => {
                        return (
                            <tr>
                                <td>{tenant.id}</td>
                                <td>{tenant.email}</td>
                                <td>{tenant.phone}</td>
                                <td>{tenant.username}</td>
                                <td>{tenant.password}</td>
                                <td>{tenant.balance}</td>
                                <td>{tenant.firstName}</td>
                                <td>{tenant.lastName}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <button onClick={addTenant}>Add Tenant</button>
        </>
    )
}