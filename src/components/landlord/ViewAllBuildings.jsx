import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import BuildingService from "../../service/BuildingService";
import useAuth from "../../hooks/useAuth";

export default function ViewAllBuildings({landlord}) {
    console.log(landlord.landlordID);
    const { auth } = useAuth();

    let[buildings, setBuildings] = useState({
        buildings:[]
    });

    useEffect (()=>{
        BuildingService.getAllBuildingsByLandlord(landlord.landlordID, auth.accessToken).then((response)=>{
            setBuildings(()=>({
                buildings: response.data
            }));
        }, ()=>{});
    }, [landlord.landlordID]);

    const navigate = useNavigate();
    let viewBuilding = (building) => {
        navigate("/landlord/viewBuilding", {state : {landlord: landlord, building: building}})
    }
    let addBuilding = (e) => {
        e.preventDefault();
        navigate("/landlord/addBuilding", {state: {landlord}});
    }

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Building Name</th>
                    <th>Street Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    buildings.buildings.map((building) => {
                        return(
                            <tr>
                                <td>{building.buildingname}</td>
                                <td>{building.streetname}</td>
                                <td>{building.city}</td>
                                <td>{building.state}</td>
                                <td>{building.zip}</td>
                                <td>
                                    <button onClick={()=>{viewBuilding(building)}}>View Tenants</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <button onClick={addBuilding}>Add Building</button>
        </>
    )
}