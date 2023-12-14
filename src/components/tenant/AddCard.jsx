import { useNavigate } from "react-router-dom";

export default function AddCard() {
    let navigate = useNavigate();
    let goBack = (e) => {
        e.preventDefault();
        navigate("/tenant/newPayment")
    }
    let getDate = () => {
        let today = new Date();
        let year = today.getFullYear().toString().substring(2);
        return (today.getMonth() + 1) + "/" + year;
    }
    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <>
        <h2>Card Details</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" placeholder="John Doe"/>
            </label>
            <label>
                Card Number: <input type="tel" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" size="16" placeholder="0000 0000 0000 0000"/>
            </label>
            <label>
                Exp Date: <input type="text" placeholder={getDate()}/>
            </label>
            <label>
                CVC: <input type="number" placeholder="CVC" max="999"/>
            </label>
            <input type="submit" value="Add Card"/>
        </form>
        <button onClick={goBack}>Back</button>
        </>
    )
}