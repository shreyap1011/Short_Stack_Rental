import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TenantService from "../../service/TenantService";
import logoImage from '../../img/griddle-white.png';
import LeaseService from "../../service/LeaseService";
import BillService from "../../service/BillService";

export default function BalanceOverview() {
    const location = useLocation();
    const landlord = location.state.landlord;

    let[state, setState] = useState({
        tenants: []
    });

    useEffect (() => {
        TenantService.getAllTenantsByLandlord(landlord.landlordID).then((response)=>{
            setState(()=>({
                tenants: response.data
            }));
        }, ()=>{});
    }, []);
    state.tenants.sort((a,b) => a.balance > b.balance);

    const navigate = useNavigate();
    let goToHomePage = (e) => {
        e.preventDefault();
        navigate("/landlord", {state : {landlord}});
    }
    let goToBalanceOverview = (e) => {
        e.preventDefault();
        navigate("/landlord/balanceOverview", {state : {landlord}});
    }
    let total_balances = 0;
    let total_charges = 0;
    state.tenants.map((tenant) => {
        total_balances += tenant.balance;
        LeaseService.findLeaseByTenant(tenant.id).then((response)=> {
            total_charges += response.data.rent;
            BillService.findBillsByLease(response.data.id).then((billsresponse) => {
                for(let i = 0; i < billsresponse.data.length; i++) {
                    total_charges += billsresponse.data[i].amount;
                }
            }, () => {
                console.log("bills for leaseid " + response.data.id + " not found");
            })
        }, () => {
            console.log("lease not found for " + tenant.firstName);
        })
    })

    let viewTenant = (tenant) => {
        navigate("/landlord/viewTenant", {state : {landlord : landlord, tenant: tenant}});
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

        <h2>All Tenants</h2>
        <h3>Total Charges for This Month: ${total_charges}</h3>
        <h3>Total Outstanding Balances: ${total_balances}</h3>
        
        <table>
            <thead>
                <tr>
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
                            <tr onClick={()=>{viewTenant(tenant)}}>
                                <td>{tenant.email}</td>
                                <td>{tenant.phone}</td>
                                <td>{tenant.username}</td>
                                <td>{tenant.password}</td>
                                <td>{tenant.balance}</td>
                                <td>{tenant.firstname}</td>
                                <td>{tenant.lastname}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}