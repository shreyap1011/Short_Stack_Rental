import { useLocation, useNavigate } from "react-router-dom";
import ViewPaymentHistory from "./ViewPaymentHistory";
import TenantPayment from "./TenantPayment";
/*import './tenant.css';*/
import logoImage from '../../img/griddle-white.png';
import { useEffect, useState } from "react"
import LeaseService from "../../service/LeaseService";
import BillService from "../../service/BillService";
import TenantService from "../../service/TenantService";
import PaymentService from "../../service/PaymentService";
import useAuth from "../../hooks/useAuth";
import TenantDash from "./TenantDash";

export default function ViewAllTenantInfo() {
    const navigate = useNavigate();

    let today = new Date();
    let today_string = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();

    let location = useLocation();
    let username = location.state.username;
    console.log("tenant username "+ username);

    let [tenant, setTenant] = useState({
        id: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        balance: '',
        lastName: '',
        firstName: ''
    });

    const { auth } = useAuth();
    console.log("auth " + auth.accessToken);

   // console.log("tenant balance payment: " + tenant.balance);
    useEffect (()=>{

        TenantService.findTenantByUsername(username, auth.accessToken).then((response)=>{
            setTenant(()=>({
                id: response.data.id,
                email: response.data.email,
                phone: response.data.phone,
                username: response.data.username,
                password: response.data.password,
                balance: response.data.balance,
                lastName: response.data.lastName,
                firstName: response.data.firstName
            }));
            console.log("1", tenant)
            console.log("tenant balance payment: " + tenant.balance);
            console.log(JSON.stringify(response.data));
        }, ()=>{
            console.log("we done goofed");
        });
    }, []);

    let goToHomePage = (e) => {
        e.preventDefault();
        navigate("/tenant/dashboard", {state : {username}});
    }
    
    let formatBalance = (balance) => {
        if(balance < 0) {
            return "(" + balance + ")";
        } else {
            return balance;
        }
    }

    console.log(tenant.balance);
    
    return(
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

        <div id="payment-tenant" className="welcome-balance-container">
        <div id="top-right-head-tenant">
            <h2>Welcome, {tenant.firstName}!</h2>
            <div id="balance-tenant">
                <h3>CURRENT BALANCE: ${formatBalance(tenant.balance)}</h3>
                <p>&nbsp;(as of: {today_string})</p>
            </div>
        </div>
        </div>

        <TenantDash tenant={tenant}/>

        </>

       
    )
}