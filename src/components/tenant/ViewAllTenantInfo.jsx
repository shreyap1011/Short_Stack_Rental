import { useLocation, useNavigate } from "react-router-dom";
import ViewPaymentHistory from "./ViewPaymentHistory";
import TenantPayment from "./TenantPayment";

export default function ViewAllTenantInfo() {
    let today = new Date();
    let today_string = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
    let getMonth = (num) => {
        switch(num) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                return "January";
        }
    }

    let location = useLocation();
    let tenant = location.state.tenant;

    let curr_charges = [];
    let fut_charges = [];
    for(let i = 0; i < 3; i++) {
        let charge = {
            description : "Description1",
            amount : (1.0 + i)
        }
        curr_charges.push(charge);

        let charge2 = {
            description : "Description2",
            amount : (2.0 + i)
        }
        fut_charges.push(charge2);
    }

    let navigate = useNavigate();
    let goToHistory = (e) => {
        e.preventDefault();
        // let el = document.getElementById("contents");
        // el.innerHTML = <ViewPaymentHistory/>
        navigate("/tenant/paymentHistory");
    }
    let newPayment = (e) => {
        e.preventDefault();
        // let el = document.getElementById("contents");
        // el.innerHTML = <TenantPayment/>
        navigate("/tenant/newPayment");
    }
    let curr_total = 0;
    let fut_total = 0;
    
    return(
        <>
        <h2>Welcome, {tenant.firstName}!</h2>
        <p>Address Line 1, Unit #</p>
        <p>Address Line 2</p>

        <button onClick={goToHistory}>View Payment History</button>

        <div id="contents">
            <h3>CURRENT BALANCE: ${tenant.balance}</h3>
            <p>as of: {today_string}</p>
            <button onClick={newPayment}>Pay Now</button>
            <div>
                <h3>{getMonth(today.getMonth())} Monthly Charges</h3>
                {
                    curr_charges.map((charge) => {
                        curr_total += charge.amount;
                        return(
                            <>
                            <p>{charge.description}: ${charge.amount}</p>
                            </>
                        )
                    })
                }
                <p><b>TOTAL: ${curr_total}</b></p>
            </div>

            <div>
                <h3>{getMonth(today.getMonth() + 1)} Monthly Charges</h3>
                {
                    fut_charges.map((charge) => {
                        fut_total += charge.amount;
                        return(
                            <>
                            <p>{charge.description}: ${charge.amount}</p>
                            </>
                        )
                    })
                }
                <p><b>TOTAL: ${fut_total}</b></p>
            </div>
        </div>
        </>
    )
}