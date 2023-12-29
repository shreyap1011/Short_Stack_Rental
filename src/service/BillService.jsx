import React from "react";
import axios from "axios";

const getAllBillsUrl = "http://localhost:8080/api/bills";
const findBillUrl = "http://localhost:8080/api/bill";
const findBillByLeaseUrl = "http://localhost:8080/api/bill";
const addBillUrl = "http://localhost:8080/api/addBill";
const updateBillUrl = "http://localhost:8080/api/updateBill";
const deleteBillUrl = "http://localhost:8080/api/deleteBill/";

class BillService {

    findBill(id, accessToken) {
        return axios.get(findBillUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    async findBillsByLease(id, accessToken) {
        return await axios.get(findBillByLeaseUrl, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, 
            params : {leaseid : id}
        });
    }

    getAllBills(accessToken) {
        return axios.get(getAllBillsUrl, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    addBill(bill, accessToken) {
        return axios.post(addBillUrl, bill, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    updateBill(bill, accessToken) {
        return axios.put(updateBillUrl, bill, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    deleteBill(id, accessToken) {
        return axios.delete(deleteBillUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
}

export default new BillService();