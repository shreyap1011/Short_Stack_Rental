import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApartmentService from "../../service/ApartmentService";
import TenantService from "../../service/TenantService";
import PaymentService from "../../service/PaymentService";
import useAuth from "../../hooks/useAuth";


export default function ViewTenant() {
    const location = useLocation();
    const { auth } = useAuth();
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

    let [payments, setPayments] = useState({
        payments : []
    })

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
        PaymentService.findAllPaymentsByTenant(tenant.id, auth.accessToken).then((response)=>{
            setPayments(()=>({
                payments : response.data
            }));
        }, ()=>{
            console.log("payments not found");
        });
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
                                <td>{payment.amount}</td>
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