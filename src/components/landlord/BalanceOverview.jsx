import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TenantService from "../../service/TenantService";
import logoImage from '../../img/griddle-white.png';

export default function BalanceOverview() {
    const location = useLocation();
    const landlord = location.state.landlord;

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

    const navigate = useNavigate();
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
        </>
    )
}