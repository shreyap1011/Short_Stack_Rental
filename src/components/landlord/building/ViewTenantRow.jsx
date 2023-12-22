import { useState, useEffect } from "react";
import TenantService from "../../../service/TenantService";
import LeaseService from "../../../service/LeaseService";
import { useNavigate } from "react-router-dom";

export default function ViewTenantRow({apartment, building, landlord}) {
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

    useEffect(() => {
        LeaseService.findLeaseByApartment(apartment.apartmentID).then((response) => {
            setId(response.data.tenantid);
            console.log("LeaseService: " + tenantid);
        }, ()=> { 
            console.log("Apartment ID:"  + apartment.apartmentID + "-- Lease not found");
        });
    }, [apartment.apartmentID]);
        
    useEffect(() => {
        TenantService.findTenant(tenantid).then((response) => {
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
        
    if(tenant.id) {
        return(
            <>
                <td>{apartment.apartmentnumber}</td>
                <td>${tenant.balance}</td>
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