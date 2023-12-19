import { useState, useEffect } from "react";
import TenantService from "../../../service/TenantService";
import LeaseService from "../../../service/LeaseService";

export default function ViewTenantRow({apartment}) {
    console.log(apartment);
    let [tenant, setTenant] = useState({
        id : '',
        firstname : '',
        lastname : '',
        email : '',
        phone : '',
        username : '',
        password : '',
        balance : ''
    })
    let tenantid = -1;

    useEffect(() => {
        LeaseService.findLeaseByApartment(apartment).then((response) => {
            tenantid = response.data.tenantid;
        }, ()=> { 
            console.log("Apartment ID:"  + apartment + "-- Lease not found");
        });
    })
        
    useEffect(() => {
        TenantService.findTenant(tenantid).then((response) => {
            setTenant(response.data);
        }, () => {
            console.log("Apartment ID:"  + apartment + "-- Tenant not found");
        });
    })
        

    return (
        <>
        <td>{apartment.apartmentnumber}</td>
        <td>{tenant.firstname} {tenant.lastname}</td>
        </>
    )
}