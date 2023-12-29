import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ApartmentService from "../../service/ApartmentService";
import TenantService from "../../service/TenantService";
import PaymentService from "../../service/PaymentService";
import LeaseService from "../../service/LeaseService";
import BillService from "../../service/BillService";
import useAuth from "../../hooks/useAuth";
import logoImage from '../../img/griddle-white.png';


export default function ViewTenant() {
    const location = useLocation();
    const { auth } = useAuth();
    const landlord = location.state.landlord;
    const tenant = location.state.tenant;

    let navigate = useNavigate();
    
    let [landlordState, setLandlord] = useState({
        landlord : {}
    })

    let[building, setBuilding] = useState({
        zip : '',
        buildingname : '',
        streetname : '',
        city : '',
        id : '',
        state : '',
        landlordid : ''
    })

    let[apartment, setApartment] = useState({
        buildingid:'',
        apartmentnumber:'',
        apartmentID:''
    });

    let [payments, setPayments] = useState({
        payments : []
    });

    let[leases, setLeases] = useState({
        leases : {}
    });

    let[bills, setBills] = useState({
        bills:[]
    });

    useEffect (()=>{
        TenantService.findBuildingByTenant(tenant.id, auth.accessToken).then((response)=>{
            setBuilding(()=>({
                zip: response.data[0].zip,
                buildingname: response.data[0].buildingname,
                streetname: response.data[0].streetname,
                city: response.data[0].city,
                id: response.data[0].id,
                state: response.data[0].state,
                landlordid: response.data[0].landlordid
            }));
        }, (response)=>{
            console.log("TEST FIND BUILDING " + JSON.stringify(response.data));
        });
    }, []);

    useEffect (()=>{
        TenantService.findApartmentByTenant(tenant.id, auth.accessToken).then((response)=>{
            setApartment(()=>({
                buildingid: response.data.buildingid,
                apartmentnumber: response.data.apartmentnumber,
                apartmentID: response.data.apartmentID
            }));
        }, ()=>{});
    }, []);

    useEffect (()=>{
        LeaseService.findLeaseByTenant(tenant.id, auth.accessToken).then((response)=>{
            setLeases(()=>({
                leases: response.data
            }));
            let id = response.data.id;
            console.log("lease id : " + id);
            BillService.findBillsByLease(id, auth.accessToken).then((response)=>{
                setBills(()=>({
                    bills: response.data
                }));
                console.log(bills.bills.length);
            }, ()=>{
                console.log("bill fetch failed");
            });
        }, ()=>{});
    }, [tenant.id]); 

    useEffect (()=>{
        PaymentService.findAllPaymentsByTenant(tenant.id, auth.accessToken).then((response)=>{
            setPayments(()=>({
                payments : response.data
            }));
        }, ()=>{
            console.log("payments not found");
        });
    }, []);

    let formatBalance = (balance) => {
        if(balance < 0) {
            return "(" + balance + ")";
        } else {
            return balance;
        }
    }

    let goToBalanceOverview = (e) => {
        e.preventDefault();
        let landlord = landlordState.landlord;
        navigate("/landlord/balanceOverview", {state : {landlord}});
    }
    return (
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logoImage} alt="Griddle Logo" className="logo-image-navbar" />
            </div>
            <ul className="nav-list">
                <li><a href="/landlord">Home Page </a></li>
                <li onClick={goToBalanceOverview}>Balance Overview</li>
                <li><a href="/" >Logout</a></li>
            </ul>
        </nav>
        <div id="personal-info">
            <h2>{tenant.firstname} {tenant.lastname}</h2>
            <h3>BALANCE: ${formatBalance(tenant.balance)}</h3>
            
            <h4>ADDRESS:</h4>
            <p>{building.buildingname}</p>
            <p>{building.streetname}, {apartment.apartmentnumber}</p>
            <p>{building.city}, {building.state} {building.zip}</p>

            <h4>CONTACT:</h4>
            <p>EMAIL: {tenant.email}</p>
            <p>PHONE: {tenant.phone}</p>      
        </div>

        <div>
            <h3>Recurring Charges</h3>
            <table>
                <tr>
                    <td>${leases.leases.rent}</td>
                    <td>Rent</td>
                </tr>
                {
                    bills.bills.map((bill) => {
                        return (
                            <tr>
                                <td>${bill.amount}</td>
                                <td>{bill.description}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
        
        <h3>Payments Made</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    payments.payments.map((payment) => {
                        return (
                            <tr>
                                <td>{payment.paymentdate}</td>
                                <td>${payment.amount}</td>
                                <td>{payment.type}</td>
                                <td>{payment.note}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}