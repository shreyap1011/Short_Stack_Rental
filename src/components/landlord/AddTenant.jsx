import { useState } from "react"
import TenantService from "../../service/TenantService";
import { useLocation, useNavigate } from "react-router-dom";


export default function AddTenant() {
    let location = useLocation();
    let landlord = location.state.landlord;

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [balance, setBalance] = useState('');

    let handleFirstName = (e) => { setFirstName(e.target.value) }
    let handleLastName = (e) => { setLastName(e.target.value) }
    let handleEmail = (e) => { setEmail(e.target.value) }
    let handlePhone = (e) => { setPhone(e.target.value) }
    let handleUsername = (e) => { setUsername(e.target.value) }
    let handlePassword = (e) => { setPassword(e.target.value) }
    let handleBalance = (e) => { setBalance(e.target.value) }

    let navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let tenant = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            username: username,
            password: password,
            balance: balance
        }

        TenantService.addTenant(tenant).then(()=> {
            alert("Tenant added!");
            navigate("/landlord", {state : {landlord}});
        }, ()=>{
            alert("Tenant could not be added");
        })
    }
    
    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <label>
                First Name: <input onChange={handleFirstName} type="text" value={firstName}></input>
            </label>
            <label>
                Last Name: <input onChange={handleLastName} type="text" value={lastName}></input>
            </label>
            <label>
                Email: <input onChange={handleEmail} type="text" value={email}></input>
            </label>
            <label>
                Phone: <input onChange={handlePhone} type="text" value={phone}></input>
            </label>
            <label>
                Username: <input onChange={handleUsername} type="text" value={username}></input>
            </label>
            <label>
                Password: <input onChange={handlePassword} type="text" value={password}></input>
            </label>
            <label>
                Balance: <input onChange={handleBalance} type="number" min="0" value={balance}></input>
            </label>
            <input type="submit" value="Add Tenant"/>
        </form>
        </>
    )
}