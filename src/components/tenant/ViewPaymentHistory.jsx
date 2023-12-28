import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentService from "../../service/PaymentService";

export default function ViewPaymentHistory() {
    let location = useLocation();
    let tenant = location.state.tenant;
    let getDateString = (date) => {
        try {
            return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        } catch(e) {
            console.log("Not valid date");
        }
    }

    let [charges, setCharges] = useState({
        charges : []
    })

    useEffect (() => {
        PaymentService.findAllPaymentsByTenant(tenant.id).then((response)=>{
            setCharges(()=>({
                charges: response.data
            }));
        }, ()=>{});
    }, []);

    charges.charges.sort(function(a,b) {
        let adate = a.paymentdate.split("-");
        let bdate = b.paymentdate.split("-");
        if(adate[0] > bdate[0]) {
            return 1;
        } else if(adate[0] < bdate[0]) {
            return -1;
        } else {
            if(adate[1] > bdate[1]) {
                return -1;
            } else if(adate[1] < bdate[1]) {
                return 1;
            } else {
                if(adate[2] > bdate[2]) {
                    return -1;
                } else if(adate[2] < bdate[2]) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    })

    let navigate = useNavigate();
    let viewCurrent = (e) => {
        e.preventDefault();
        navigate("/tenant/dashboard", {state : {tenant}});
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
                </tr>
            </thead>
            <tbody>
                {
                    charges.charges.map((charge) => {
                        return(
                            <tr>
                                <td>{charge.paymentdate}</td>
                                <td>{charge.note}</td>
                                <td>{charge.amount}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}