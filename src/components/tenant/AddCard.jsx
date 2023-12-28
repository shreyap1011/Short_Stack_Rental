import { useLocation, useNavigate } from "react-router-dom";
import React,  { useState, useEffect } from "react";
import TenantService from "../../service/TenantService";
import PaymentService from "../../service/PaymentService";
import useAuth from "../../hooks/useAuth";
import logoImage from '../../img/griddle-white.png';

export default function AddCard() {
    let location = useLocation();
    let tenant = location.state.tenant;
    let username = tenant.username;
    const { auth } = useAuth();

    let [name, setName] = useState('');
    let [cardNumber, setCardNumber] = useState('');
    let [expMonth, setExpMonth] = useState('');
    let [expYear, setExpYear] = useState('');
    let [cvc, setCvc] = useState('');
    let [amount, setAmount] = useState('');

    let handleName = (e) => { setName(e.target.value) }
    let handleCardNumber = (e) => { setCardNumber(e.target.value) }
    let handleExpMonth = (e) => { setExpMonth(e.target.value) }
    let handleExpYear = (e) => { setExpYear(e.target.value) }
    let handleCvc = (e) => { setCvc(e.target.value) }
    let handleAmount = (e) => { setAmount(e.target.value) }

    let navigate = useNavigate();
    let goBack = (e) => {
        e.preventDefault();
        navigate("/tenant/dashboard", {state: {username}})
    }

    let getDate = () => {
        let today = new Date();
        let year = today.getFullYear().toString().substring(2);
        return (today.getMonth() + 1) + "/" + year;
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        let new_payment = {
            amount : {
                total : amount,
                currency: "USD"
            },
            source : {
                sourceType: "PaymentCard",
                card: {
                    cardData: cardNumber,
                    expirationMonth: expMonth,
                    expirationYear: expYear,
                    securityCode: cvc
                }
            },
            transactionDetails:{captureFlag:false},
            merchantDetails:{merchantId:"100008000307266",
                                terminalId: "10000001"}
        }

        PaymentService.makePayment(tenant.id, new_payment, auth.accessToken).then(() => {
            alert("Payment successful!");
            let new_tenant = {
                id: tenant.id,
                email: tenant.email,
                phone: tenant.phone,
                username: tenant.username,
                password: tenant.password,
                balance: tenant.balance - amount,
                firstName: tenant.firstName,
                lastName: tenant.lastName
            }
            TenantService.updateTenant(new_tenant, auth.accessToken);
            console.log(new_payment.amount.total + " " + new_payment.source.card.cardData);
            navigate("/tenant/dashboard", {state: {username}});
        }, ()=> {
            alert("Payment not successful");
            console.log(new_payment.amount.total + " " + new_payment.source.card.cardData);
        })
    }

    let formatBalance = (balance) => {
        if(balance < 0) {
            return "(" + balance + ")";
        } else {
            return balance;
        }
    }

    let goToHomePage = (e) => {
        e.preventDefault();
        navigate("/tenant/dashboard", {state : {username}});
    }
    

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


        <h2>Make Payment</h2>
        <form class="payment-form" onSubmit={handleSubmit}>
            <label>
                Name: <input value={name} onChange={handleName} type="text" placeholder="John Doe"/>
            </label>
            <label>
                Card Number: <input value={cardNumber} onChange={handleCardNumber} type="number" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" size="16" placeholder="0000 0000 0000 0000"/>
            </label>
            <label>
                Exp Date: 
                <select onChange={handleExpMonth} value={expMonth}>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>

                <select onChange={handleExpYear} value={expYear}>
                    <option value="2024">24</option>
                    <option value="2025">25</option>
                    <option value="2026">26</option>
                    <option value="2027">27</option>
                    <option value="2028">28</option>
                    <option value="2029">29</option>
                    <option value="2030">30</option>
                    <option value="2031">31</option>
                    <option value="2032">32</option>
                    <option value="2033">33</option>
                    <option value="2034">34</option>
                    <option value="2035">35</option>
                </select>

            </label>
            <label>
                CVC: <input value={cvc} type="number" onChange={handleCvc} placeholder="CVC" min="0" max="999"/>
            </label>
            <h3>CURRENT BALANCE: ${formatBalance(tenant.balance)}</h3>
            <label>
                Amount: <input value={amount} onChange={handleAmount} type="number" min="0"></input>
            </label>
            <input type="submit" value="Submit Payment"/>
        </form>
        <button onClick={goBack}>Back</button>
        </>
    )
}