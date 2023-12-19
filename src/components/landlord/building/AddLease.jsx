import { useLocation } from "react-router-dom";

export default function AddLease() {
    let location = useLocation();
    let landlord = location.state.landlord;
    let building = location.state.building;
    let apartment = location.state.apartment;

    return (
        <>
        <h3>New Lease</h3>
        <form>
            <h4>Tenant Info</h4>
            <label>
                
            </label>
        </form>
        </>
    )
}