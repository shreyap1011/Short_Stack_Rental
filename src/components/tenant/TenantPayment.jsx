import { useLocation, useNavigate } from "react-router-dom"

export default function TenantPayment() {
    let location = useLocation();
    let tenant = location.state.tenant;
    let username = tenant.username;
    let navigate = useNavigate();
    let backToDash = (e) => {
        e.preventDefault();
        navigate("/tenant/dashboard", {state : {username}});
    }
    let addCard = (e) => {
        e.preventDefault();
        navigate("/tenant/newCard", {state: {tenant}});
    }
    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <button onClick={backToDash}>Back to Dashboard</button>
        <br/><br/>
        <div>
            {/* <button>Add Bank Account</button> */}
            <button onClick={addCard}>Add Credit/Debit Card</button>
        </div>
        <h2>Enter Payment Details</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Select Payment Account <input type="text" name="acct"/>
            </label>
            <br/>
            <label>
                Extra Payment Amount <input type="number" min="0" step="0.01" name="amt"/>
            </label>
            <br/>
            <input type="submit" value="Make Payment"/>
        </form>
        </>
    )
}