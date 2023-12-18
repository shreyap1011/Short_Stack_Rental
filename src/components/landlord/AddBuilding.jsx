import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BuildingService from "../../service/BuildingService";

export default function AddBuilding() {
    let location = useLocation();
    let landlord = location.state.landlord;

    let [buildingname, setBuildingName] = useState('');
    let [streetname, setStreetName] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [zip, setZip] = useState('');

    let handleBuildingName = (e) => { setBuildingName(e.target.value) }
    let handleStreetName = (e) => { setStreetName(e.target.value) }
    let handleCity = (e) => { setCity(e.target.value) }
    let handleState = (e) => { setState(e.target.value) }
    let handleZip = (e) => { setZip(e.target.value) }
   

    const navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let building = {
            landlordid : landlord.landlordID,
            buildingname : buildingname,
            streetname: streetname,
            city : city,
            state : state,
            zip : zip
        }
        
        BuildingService.addBuilding(building).then(()=> {
            alert("Building added!");
            navigate("/landlord", {state : {landlord}});
        }, ()=>{
            alert("Building could not be added");
        })
       
    }
    return(
        <>
        <h2>New Building</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Building Name: <input onChange={handleBuildingName} type="text" value={buildingname}/>
            </label>
            <label>
                Street: <input onChange={handleStreetName} type="text" value={streetname}/>
            </label>
            <label>
                City: <input onChange={handleCity} type="text" value={city}/>
            </label>
            <label>
                State: <input onChange={handleState} type="text" value={state}/>
            </label>
            <label>
                ZIP Code: <input onChange={handleZip} type="number" max="99999" min="0" value={zip}/>
            </label>
            <input type="submit" value="Add New Building"/>
        </form>
        </>
    )
}