import { useState, useEffect } from "react";
import TenantService from "../../../service/TenantService";
import LeaseService from "../../../service/LeaseService";

export default function ViewTenantRow({apartment}) {
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
        

    return (
        <>
        <td>{apartment.apartmentnumber}</td>
        <td>{tenant.firstName} {tenant.lastName}</td>
        </>
    )
}