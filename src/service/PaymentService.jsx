import React from "react";
import axios from "axios";

const makePaymentUrl = "http://localhost:8080/api/makePayment";
const findPaymentsByTenantUrl = "http://localhost:8080/api/payments/";

class PaymentService {

    makePayment(tenantid, payment) { 
        console.log("tenantid : " + tenantid);
        console.log("payment: " + payment );
        return axios.post(makePaymentUrl, payment, {params : {tenantid : tenantid}});
    }

    findAllPaymentsByTenant(tenantid) {
        return axios.get(findPaymentsByTenantUrl + tenantid);
    }
}

export default new PaymentService();