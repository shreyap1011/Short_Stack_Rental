import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logoImage from '../../../img/griddle-white.png';
import TenantService from "../../../service/TenantService";
import LeaseService from "../../../service/LeaseService";
import BillService from "../../../service/BillService";
import useAuth from "../../../hooks/useAuth";
//import landingPageImage from '../../img/landingPage.png';

export default function AddLease() {
    let location = useLocation();
    const { auth } = useAuth();
    let landlord = location.state.landlord;
    let building = location.state.building;
    let apartment = location.state.apartment;
    // console.log("ADDLEASE landlordid: " + landlord.landlordID);
    // console.log("ADDLEASE buildingid: " + building.id);
    // console.log("ADDLEASE apartmentid: " + apartment.apartmentID);

/*Tenant Information*/ 
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

/*Lease Information*/ 
    let [startdate, setStartDate] = useState('');
    let [enddate, setEndDate] = useState('');
    let [rent, setRent] = useState('');
    
/*Handle Tenant Information*/ 
    let handleFirstName = (e) => { setFirstName(e.target.value) }
    let handleLastName = (e) => { setLastName(e.target.value) }
    let handleEmail = (e) => { setEmail(e.target.value) }
    let handlePhone = (e) => { setPhone(e.target.value) }
    let handleUsername = (e) => { setUsername(e.target.value) }
    let handlePassword = (e) => { setPassword(e.target.value) }
    
/*Handle Lease Information*/ 
    let handleStartDate = (e) => { setStartDate(e.target.value) }
    let handleEndDate = (e) => { setEndDate(e.target.value) }
    let handleRent = (e) => { setRent(e.target.value) }

    let bills = [];

    // let [tenantid, setId] = useState('');

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
            balance: 0
        }

        TenantService.addTenant(tenant, auth.accessToken).then((response)=> {
            // setId(response.data);

            let lease = {
                tenantid : response.data,
                apartmentid : apartment.apartmentID,
                startdate : startdate,
                enddate : enddate,
                rent : rent
            }
    
            LeaseService.addLease(lease, auth.accessToken).then((leaseResponse)=>{
                for(let i = 0; i < bills.length; i++) {
                    let bill = {
                        leaseid : leaseResponse.data,
                        description : bills[i].description,
                        amount : bills[i].amount
                    }
                    BillService.addBill(bill, auth.accessToken).then(()=>{
                        alert("Lease successfully created!");
                        navigate("/landlord/viewBuilding", {state : {landlord : landlord, building : building}});
                    }, ()=>{
                        console.log(leaseResponse.data + " no lease id");
                    })
                }  
            }, ()=>{
                console.log(lease.tenantid + "no tenant id");
            })
        });

    }

    let rowid = 0;
    let deleteBill = (e) => {
        e.preventDefault();
        
    }   

    let addBill = (e) => {
        e.preventDefault();
        const description = document.getElementById("bill-description");
        const amount = document.getElementById("bill-amount");

        let row = document.createElement("tr");
        row.id = "row" + rowid;
        rowid++;
        let descriptionCell = document.createElement("td");
        descriptionCell.innerHTML = description.value;
        let amountCell = document.createElement("td");
        amountCell.innerHTML = "$" + amount.value;

        const bill = {
            description : description.value,
            amount : amount.value
        }
        bills.push(bill);
        console.log(bill.description + " " + bill.amount);

        let deleteCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Charge";
        deleteButton.onclick = deleteBill;
    
        /*changing color */
        deleteButton.className = "delete-button";
        deleteCell.appendChild(deleteButton);

        row.appendChild(descriptionCell);
        row.appendChild(amountCell);
        row.appendChild(deleteCell);
        document.getElementById("bills-table").appendChild(row);

        description.value = "";
        amount.value = "";
    }
    // "Add Monthly Charge" button
    let createBill = (e) => {
        e.preventDefault();
        const testsDiv = document.getElementById("TestsDiv");
        testsDiv.style.display = "block";
    }

    let goToHomePage = (e) => {
        e.preventDefault();
        const username = landlord.username;
        navigate("/landlord", {state : {username}});
    }

    return (
        <>
        <nav className="navbar" style={{ marginBottom: '70px' }}>
            <div className="navbar-brand">
                <img src={logoImage} alt="Griddle Logo" className="logo-image-navbar" />
            </div>
            <ul className="nav-list">
                <li onClick={goToHomePage}>Home Page</li>
                <li><a href="/" >Logout</a></li>
            </ul>
        </nav>

       
<div>
        <h3>Create New Lease</h3>
        <form className="lease-form" onSubmit={handleSubmit}>


            <div className="form-row" id="tenant-info">
                <h3>Tenant Information</h3>
                <label>
                    <i className="fas fa-user"></i> First Name: <input onChange={handleFirstName} type="text" placeholder="John" value={firstName}></input>
                </label>
                <label>
                    Last Name: <input onChange={handleLastName} type="text" placeholder="Doe" value={lastName}></input>
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
            </div>

            <div className="form-row" id="lease-info">
                <h3>Lease Information</h3>
                <label>
                    Start Date: <input onChange={handleStartDate} type="date" value={startdate}></input>
                </label>
                <label>
                    End Date: <input onChange={handleEndDate} type="date" value={enddate}></input>
                </label>
                <label>
                    Monthly Rent: <input onChange={handleRent} type="number" min="0" value={rent}></input>
                </label>
            </div>

            <div id="bill">


                {/* <table>
                    <tbody id="bills-table">
                    </tbody>
                </table>
                <div id="add-bill">
                </div> */}

                <div id="TestsDiv">
                    <h3>New Bill</h3>
                    <label>
                        Description: <input id="bill-description" type="text"></input>
                    </label>
                    <label>
                        Amount: $<input id="bill-amount" type="number" min="0"></input>
                    </label>
                    <button onClick={addBill}>Add Bill</button>
                </div>

                
            <h3>Additional Charges</h3>
                <table>
                    <tbody id="bills-table">
                    </tbody>
                </table>
                <div id="add-bill">
                </div>

                {/* <div className="create-lease-button">
                    <input type="submit" value="Create Lease"/>
                </div> */}
            </div>


            <div className="create-lease-button">
                    <input type="submit" value="Create Lease"/>
            </div>
        </form>  



</div>  
        </>
    )
}