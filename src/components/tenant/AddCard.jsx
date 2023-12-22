import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import TenantService from "../../service/TenantService";

export default function AddCard() {
    let location = useLocation();
    let tenant = location.state.tenant;

    let [name, setName] = useState('');
    let [cardNumber, setCardNumber] = useState('');
    let [expDate, setExpDate] = useState('');
    let [cvc, setCvc] = useState('');
    let [amount, setAmount] = useState('');

    let handleName = (e) => { setName(e.target.value) }
    let handleCardNumber = (e) => { setCardNumber(e.target.value) }
    let handleExpDate = (e) => { setExpDate(e.target.value); }
    let handleCvc = (e) => { setCvc(e.target.value) }
    let handleAmount = (e) => { setAmount(e.target.value) }

    let navigate = useNavigate();
    let goBack = (e) => {
        e.preventDefault();
        navigate("/tenant/dashboard", {state: {tenant}})
    }

    let getDate = () => {
        let today = new Date();
        let year = today.getFullYear().toString().substring(2);
        return (today.getMonth() + 1) + "/" + year;
    }

    let cards = [];
    for(let i = 1; i < 9; i++) {
        let card = {
            cardNumber : i * 1111111111111111,
            expDate : i + '/24',
            cvc : i * 111
        }
        cards.push(card);
        // console.log(card.cardNumber + " " + card.expDate + " " + card.cvc);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let valid = false;
        for(let i = 0; i < cards.length; i++) {
            let card = cards[i];
            if(
                card.cardNumber == cardNumber &&
                card.expDate == expDate &&
                card.cvc == cvc
            ) {
                alert("Payment successful!");
                valid = true;
                let newTenant = {
                    id : tenant.id,
                    firstName : tenant.firstName,
                    lastName : tenant.lastName,
                    email : tenant.email,
                    phone : tenant.phone,
                    username : tenant.username,
                    password : tenant.password,
                    balance : tenant.balance - amount
                }
                TenantService.updateTenant(newTenant);
                navigate("/tenant/dashboard", {state: {tenant}})
            }
        }
        if(!valid) {
            alert("Payment unsuccessful -- try again");
        }
    }

    return(
        <>
        <h2>Card Details</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input value={name} onChange={handleName} type="text" placeholder="John Doe"/>
            </label>
            <label>
                Card Number: <input value={cardNumber} onChange={handleCardNumber} type="number" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" size="16" placeholder="0000 0000 0000 0000"/>
            </label>
            <label>
                Exp Date: <input value={expDate} onChange={handleExpDate} type="text" placeholder={getDate()}/>
            </label>
            <label>
                CVC: <input value={cvc} type="number" onChange={handleCvc} placeholder="CVC" min="0" max="999"/>
            </label>
            <h3>PAYING BALANCE: ${tenant.balance}</h3>
            <label>
                Amount: <input value={amount} onChange={handleAmount} type="number" min="0"></input>
            </label>
            <input type="submit" value="Add Card"/>
        </form>
        <button onClick={goBack}>Back</button>
        </>
    )
}