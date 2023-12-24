import React from "react";
import axios from "axios";

const makePaymentUrl = "http://localhost:8080/api/makePayment/";
const findPaymentsByTenantUrl = "http://localhost:8080/api/payments/";

class PaymentService {

    makePayment(tenantid, payment) { 
        axios.post(makePaymentUrl, {params : {tenantid : tenantid,  incomingRequest : payment}})
    }

    findAllPaymentsByTenant(tenantid) {
        axios.get(findPaymentsByTenantUrl + tenantid);
    }
}

export default new PaymentService();