import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TenantService from "../../service/TenantService";
import logoImage from '../../img/griddle-white.png';
import LeaseService from "../../service/LeaseService";
import BillService from "../../service/BillService";
import useAuth from "../../hooks/useAuth";

export default function BalanceOverview() {
    const location = useLocation();
    const landlord = location.state.landlord;
    const { auth } = useAuth();

    let[state, setState] = useState({
        tenants: []
    });

    useEffect (() => {
        TenantService.getAllTenantsByLandlord(landlord.landlordID, auth.accessToken).then((response)=>{
            setState(()=>({
                tenants: response.data
            }));
        }, ()=>{});
    }, []);
    state.tenants.sort((a,b) => a.balance > b.balance);

    const navigate = useNavigate();
    let goToHomePage = (e) => {
        e.preventDefault();
        let username = landlord.username;
        navigate("/landlord", {state : {username}});
    }
    let goToBalanceOverview = (e) => {
        e.preventDefault();
        navigate("/landlord/balanceOverview", {state : {landlord}});
    }
    let total_balances = 0;
    let [total_charges, setTotalCharges] = useState(0);
    // useEffect(() =>{
    //     state.tenants.map((tenant) => {
    //         total_balances += tenant.balance;
    //         LeaseService.findLeaseByTenant(tenant.id).then((response)=> {
    //             console.log(tenant.id + " " + response.data.rent);
    //             total_charges += response.data.rent;
    //             BillService.findBillsByLease(response.data.id).then((billsresponse) => {
    //                 for(let i = 0; i < billsresponse.data.length; i++) {
    //                     let prev_charge2 = total_charges;
    //                     setTotalCharges(() => ({
    //                         total_charges : prev_charge2 + billsresponse.data[i].amount
    //                     }));
    //                     console.log(total_charges);
    //                 }
    //             }, () => {
    //                 console.log("bills for leaseid " + response.data.id + " not found");
    //             })
    //         }, () => {
    //             console.log("lease not found for " + tenant.firstName);
    //         })
    //     })
    // }, []);

    useEffect(() => {
        console.log("after function total charge:" + total_charges);
    }, [total_charges]);
    
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.tenants.map((tenant) => {
                        return (
                            <tr onClick={()=>{viewTenant(tenant)}}>
                                <td>{tenant.firstname}</td>
                                <td>{tenant.lastname}</td>
                                <td>{tenant.email}</td>
                                <td>{tenant.phone}</td>
                                <td>{tenant.balance}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}