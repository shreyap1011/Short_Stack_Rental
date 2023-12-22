import React from "react";
import axios from "axios";

const getAllBillsUrl = "http://localhost:8080/api/bills";
const findBillUrl = "http://localhost:8080/api/bill";
const findBillByLeaseUrl = "http://localhost:8080/api/bill";
const addBillUrl = "http://localhost:8080/api/addBill";
const updateBillUrl = "http://localhost:8080/api/updateBill";
const deleteBillUrl = "http://localhost:8080/api/deleteBill/";

class BillService {

    findBill(id) {
        return axios.get(findBillUrl + id);
    }

    findBillsByLease(id) {
        return axios.get(findBillByLeaseUrl, {params : {leaseid : id}});
    }

    getAllBills() {
        return axios.get(getAllBillsUrl);
    }

    addBill(bill) {
        return axios.post(addBillUrl, bill);
    }

    updateBill(bill) {
        return axios.put(updateBillUrl, bill);
    }

    deleteBill(id) {
        return axios.delete(deleteBillUrl + id);
    }
}

export default new BillService();