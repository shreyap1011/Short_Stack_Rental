import { useNavigate } from "react-router-dom";

export default function ViewPaymentHistory() {
    let getDateString = (date) => {
        try {
            return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        } catch(e) {
            console.log("Not valid date");
        }
    }

    let charges = [];
    for(let i = 0; i < 10; i++) {
        let charge = {
            date: getDateString(new Date()),
            description: "Description " + i,
            charge: 1000.0 + (i*10),
            payment: 2000.0 - (i*10),
            balance: i*1000.0
        }
        charges.push(charge);
    }

    let navigate = useNavigate();
    let viewCurrent = (e) => {
        e.preventDefault();
        navigate("/tenant/dashboard");
    } 

    return(
        <>
        <h2>Payment History</h2>
        <button onClick={viewCurrent}>View Current Charges</button>
        <h3>CURRENT BALANCE: $0.00</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Charge</th>
                    <th>Payment</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {
                    charges.map((charge) => {
                        return(
                            <tr>
                                <td>{charge.date}</td>
                                <td>{charge.description}</td>
                                <td>{charge.charge}</td>
                                <td>{charge.payment}</td>
                                <td>{charge.balance}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}