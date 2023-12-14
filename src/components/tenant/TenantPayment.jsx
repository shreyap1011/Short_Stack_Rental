import { useNavigate } from "react-router-dom"

export default function TenantPayment() {
    let navigate = useNavigate();
    let backToDash = (e) => {
        e.preventDefault();
        navigate("/tenant/dashboard");
    }
    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <button onClick={backToDash}>Back to Dashboard</button>
        <br/><br/>
        <div>
            <button>Add Bank Account</button>
            <button>Add Credit/Debit Card</button>
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
            <input type="submit" onClick={handleSubmit}/>
        </form>
        </>
    )
}