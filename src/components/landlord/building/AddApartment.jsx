import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ApartmentService from "../../../service/ApartmentService";
import useAuth from "../../../hooks/useAuth";

export default function AddApartment() {
    let location = useLocation();
    const { auth } = useAuth();
    let landlord = location.state.landlord;
    let building = location.state.building;

    let [apartment, setApartment] = useState('');
    let handleApartment = (e) => { setApartment(e.target.value) }
    const navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let newApartment = {
            buildingid : building.id,
            apartmentnumber : apartment
        }
        ApartmentService.addApartment(newApartment, auth.accessToken).then(()=> {
            alert("Apartment added successfully!");
            navigate("/landlord/viewBuilding", {state : {landlord: landlord, building: building}})
        }, () => {
            alert("Apartment could not be added")
        })
    }

    return (
        <>
        <h3>Add Unit to {building.buildingname}</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Number: <input onChange={handleApartment} type="text" value={apartment}/>
            </label>
            <input type="submit" value="Add Unit"/>
        </form>
        </>
    )
}