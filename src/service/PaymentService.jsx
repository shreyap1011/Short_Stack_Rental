import React from "react";
import axios from "axios";

const makePaymentUrl = "http://localhost:8080/api/makePayment";
const findPaymentsByTenantUrl = "http://localhost:8080/api/payments/";

class PaymentService {

    makePayment(tenantid, payment, accessToken) { 
        console.log("tenantid : " + tenantid);
        console.log("payment: " + payment );
        return axios.post(makePaymentUrl, payment, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, 
            params : {tenantid : tenantid}});
    }

    findAllPaymentsByTenant(tenantid, accessToken) {
        return axios.get(findPaymentsByTenantUrl + tenantid, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
}

export default new PaymentService();