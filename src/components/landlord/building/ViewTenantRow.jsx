import { useState, useEffect } from "react";
import TenantService from "../../../service/TenantService";
import LeaseService from "../../../service/LeaseService";
import { useNavigate } from "react-router-dom";
import BillService from "../../../service/BillService";
import useAuth from "../../../hooks/useAuth";

export default function ViewTenantRow({apartment, building, landlord}) {
    const { auth } = useAuth();
    /* view all tenants within each building*/
    let [tenant, setTenant] = useState({
        id : '',
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        username : '',
        password : '',
        balance : ''
    })
    let [tenantid, setId] = useState('');
    let total_charges = 0;

    useEffect(() => {
        LeaseService.findLeaseByApartment(apartment.apartmentID, auth.accessToken).then((response) => {
            setId(response.data.tenantid);
            total_charges += response.data.rent;
            BillService.findBillsByLease(response.data.id).then((response) => {
                for(let i = 0; i < response.data.length; i++) {
                    total_charges += response.data[i].amount;
                    console.log(total_charges);
                }
            }, ()=>{});
        }, ()=> { 
            console.log("Apartment ID:"  + apartment.apartmentID + "-- Lease not found");
        });
    }, [apartment.apartmentID]);
        
    useEffect(() => {
        TenantService.findTenant(tenantid, auth.accessToken).then((response) => {
            setTenant(response.data);
            console.log("TenantService (yes):" + tenantid);
        }, () => {
            console.log("TenantService (no):" + tenantid);
            console.log("Apartment ID:"  + apartment.apartmentID + "-- Tenant not found");
        });
    }, [tenantid]);

    let navigate = useNavigate();
    let addLease = (apartment) => {
        navigate("/landlord/addLease", {state : {landlord: landlord, building: building, apartment: apartment}})
    }

    let formatBalance = (balance) => {
        if(balance < 0) {
            return "(" + balance + ")";
        } else {
            return balance;
        }
    }
        
    if(tenant.id) {
        return(
            <>
                <td>{apartment.apartmentnumber}</td>
                <td>${formatBalance(tenant.balance)}</td>
                <td>{tenant.firstName} {tenant.lastName}</td>
            </>
        );
    } else {
        return(
            <>
                <td>{apartment.apartmentnumber}</td>
                <td>-</td>
                <td>
                    <button onClick={()=>{addLease(apartment)}}>Add Lease</button>
                </td>
            </>
        )
    }
}