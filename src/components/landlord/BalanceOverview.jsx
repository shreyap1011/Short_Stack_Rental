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
    state.tenants.sort(function(a,b) {
        if(a.balance > b.balance) {
            return -1;
        } else if(a.balance < b.balance) {
            return 1;
        } else {
            return 0;
        }
    })

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

    let formatBalance = (balance) => {
        if(balance < 0) {
            return "(" + balance + ")";
        } else {
            return balance;
        }
    }

    let findStatus = (balance) => {
        const date = new Date();
        if((balance > 0) && (date.getDate() > 2)) {
            return "LATE";
        } else {
            return "ON TIME";
        }
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

        <h2>All Tenants Balances</h2>
        
        <table>
            <thead>
                <tr> 
                    <th>STATUS</th>
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
                        total_balances += tenant.balance;
                        return (
                            <tr onClick={()=>{viewTenant(tenant)}}>
                                <td>{findStatus(tenant.balance)}</td>
                                <td>{tenant.firstname}</td>
                                <td>{tenant.lastname}</td>
                                <td>{tenant.email}</td>
                                <td>{tenant.phone}</td>
                                <td>${formatBalance(tenant.balance)}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan={5}>TOTAL BALANCES</td>
                    <td>${formatBalance(total_balances)}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}