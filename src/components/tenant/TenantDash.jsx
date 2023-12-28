import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import LeaseService from "../../service/LeaseService";
import BillService from "../../service/BillService";
import TenantService from "../../service/TenantService";
import PaymentService from "../../service/PaymentService";

export default function TenantDash({tenant}) {
    const { auth } = useAuth();
    let today = new Date();
    console.log("tenantid on tenant dash page: " + tenant.id);

    let getMonth = (num) => {
        switch(num) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                return "January";
        }
    }

    let[leases, setLeases] = useState({
        leases : {}
    });

    let[bills, setBills] = useState({
        bills:[]
    });

    let[paymentsState, setPayments] = useState({
        payments : []
    });

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
    })

    useEffect (()=>{
        console.log("use effect tenant id:", tenant.id);
        LeaseService.findLeaseByTenant(tenant.id, auth.accessToken).then((response)=>{
            setLeases(()=>({
                leases: response.data
            }));
        }, ()=>{});
    }, [tenant.id]); 

    useEffect (()=>{
        BillService.getAllBills(auth.accessToken).then((response)=>{
            setBills(()=>({
                bills: response.data
            }));
        }, ()=>{});
    }, []);

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
    }, [tenant.id]);

    useEffect (()=>{
        TenantService.findApartmentByTenant(tenant.id, auth.accessToken).then((response)=>{
            setApartment(()=>({
                buildingid: response.data[0].buildingid,
                apartmentnumber:response.data[0].apartmentnumber,
                apartmentID:response.data[0].apartmentID
            }));
        }, (response)=>{
            console.log("TEST FIND APARTMENT " + JSON.stringify(response.data));
        });
    }, [tenant.id]);

    useEffect (()=>{
        PaymentService.findAllPaymentsByTenant(tenant.id, auth.accessToken).then((response)=>{
            setPayments(()=>({
                payments : response.data
            }));
        }, (response)=>{
            console.log("TEST FIND BUILDING " + JSON.stringify(response.data));
        });
    }, [tenant.id]);
    
    paymentsState.payments.sort(function(a,b) {
        let adate = a.paymentdate.split("-");
        let bdate = b.paymentdate.split("-");
        if(adate[0] > bdate[0]) {
            return 1;
        } else if(adate[0] < bdate[0]) {
            return -1;
        } else {
            if(adate[1] > bdate[1]) {
                return -1;
            } else if(adate[1] < bdate[1]) {
                return 1;
            } else {
                if(adate[2] > bdate[2]) {
                    return -1;
                } else if(adate[2] < bdate[2]) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    })

    const navigate = useNavigate();
    let goToHistory = (e) => {
        e.preventDefault();
        navigate("/tenant/paymentHistory", {state : {tenant}});
    }
    let newPayment = (e) => {
        e.preventDefault();
        navigate("/tenant/newPayment", {state : {tenant}});
    }

    let formatBalance = (balance) => {
        if(balance < 0) {
            return "(" + balance + ")";
        } else {
            return balance;
        }
    }
    
    let total_charges = leases.leases.rent;

    return (
        <div id="dashboard-tenant">
            <div id="info-tenant" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div id="left-info-container" style={{ flexGrow: 1, marginRight: '150px' }}>
                    <div id="contact-card-tenant" >
                        <h3>Personal Information</h3>
                        <p>{building.streetname}, Unit {apartment.apartmentnumber}</p>
                        <p>{building.city}, {building.state} {building.zip}</p>
                        <br />
                        <p>EMAIL: {tenant.email}</p>
                        <p>PHONE: {tenant.phone}</p>
                    </div>
                </div>
                <div id="payment-tenant">
                    <div id="table-head-tenant">
                        <h3>Recurring Charges</h3>
                    </div>
                    <table className="tenant-custom-table">
                    <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${leases.leases.rent}</td>
                                <td>Rent</td>
                            </tr>
                            {
                                bills.bills
                                .filter((bill) => bill.leaseid === leases.leases.id)
                                .map((filteredBill) => {
                                    total_charges += filteredBill.amount;
                                    return (
                                    <tr key={filteredBill.id}>
                                        <td>${filteredBill.amount}</td>
                                        <td>{filteredBill.description}</td>
                                    </tr>
                                    )
                                })
                            }
                            <tr>
                                <td>${total_charges}</td>
                                <td>TOTAL</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><button onClick={newPayment}>Pay Now</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="table-head-tenant" style={{ marginTop: '50px' }}>
                        <h3>Payment History</h3>
                        <button onClick={goToHistory}>View All</button>
                    </div>
                    <table className="tenant-custom-table">
                    <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentsState.payments.map((payment) => {
                                    return (
                                        <tr>
                                            <td>{payment.paymentdate}</td>
                                            <td>${payment.amount}</td>
                                            <td>{payment.note}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}