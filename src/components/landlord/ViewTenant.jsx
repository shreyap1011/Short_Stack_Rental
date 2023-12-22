import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApartmentService from "../../service/ApartmentService";
import TenantService from "../../service/TenantService";

export default function ViewTenant() {
    const location = useLocation();
    const landlord = location.state.landlord;
    const tenant = location.state.tenant;

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

    useEffect (()=>{
        TenantService.findBuildingByTenant(tenant.id).then((response)=>{
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
        TenantService.findApartmentByTenant(tenant.id).then((response)=>{
            setApartment(()=>({
                buildingid: response.data.buildingid,
                apartmentnumber: response.data.apartmentnumber,
                apartmentID: response.data.apartmentID
            }));
        }, ()=>{});
    }, []);


    return (
        <>
        <div id="personal-info">
            <h3>{tenant.firstName} {tenant.lastName}</h3>
            <h4>ADDRESS:</h4>
            <p>{building.buildingname}</p>
            <p>{building.streetname}, {apartment.apartmentnumber}</p>
            <p>{building.city}, {building.state} {building.zip}</p>

            <h4>CONTACT:</h4>
            <p>EMAIL: {tenant.email}</p>
            <p>PHONE: {tenant.phone}</p>

            <h4>BALANCE: ${tenant.balance}</h4>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Charge</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        </>
    )
}