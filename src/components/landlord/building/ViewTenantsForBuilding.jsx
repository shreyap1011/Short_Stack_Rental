import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import ApartmentService from "../../../service/ApartmentService";

export default function ViewTenantsForBuilding() {
    let location = useLocation();
    let landlord = location.state.landlord;
    let building = location.state.building;

    let [apartmentState, setApartments] = useState({
        apartments : []
    });

    useEffect (() => {
        ApartmentService.findApartmentByBuildingID(building.id).then((response)=>{
            setApartments(()=>({
                apartments: response.data
            }));
        }, ()=>{});
    }, []);

    const navigate = useNavigate();
    let addUnit = (e) => {
        e.preventDefault();
        navigate("/landlord/addApartment", {state : {landlord: landlord, building: building}})
    }
    let addLease = (apartment) => {
        navigate("landlord/addLease", {state : {landlord: landlord, building: building, apartment: apartment}})
    }

    return (
        <>
        <div>
            <h2>{building.buildingname}</h2>
            <p>{building.streetname}</p>
            <p>{building.city}, {building.state} {building.zip}</p>
        </div>
        
        <button onClick={addUnit}>Add Unit</button>
        <table>
            <thead>
                <tr>
                    <th>Unit #</th>
                    <th>Tenant</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    apartmentState.apartments.map((apartment) => {
                        return(
                            <tr>
                                <td>{apartment.apartmentnumber}</td>
                                <td>idk bro</td>
                                <td>
                                    <button onClick={()=>{addLease(apartment)}}>Add Lease</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
        </>
    )
}