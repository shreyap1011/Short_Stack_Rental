import { useEffect, useState } from "react"
import TenantService from "../../service/TenantService";
import { useNavigate } from "react-router-dom";

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