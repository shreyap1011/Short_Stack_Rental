import React from "react";
import axios from "axios";

const getLeasesByLandlordUrl = "http://localhost:8080/api/leases/";
const findLeaseByTenantUrl = "http://localhost:8080/api/lease/";
const addLeaseUrl = "http://localhost:8080/api/addLease";
const updateLeaseUrl = "http://localhost:8080/api/updateLease";
const deleteLeaseUrl = "http://localhost:8080/api/deleteLease/";

class LeaseService {

    findLease(id) {
        return axios.get(findLeaseByTenantUrl + id);
    }

    getAllLeasesByLandlord(id) {
        return axios.get(getLeasesByLandlordUrl + id);
    }

    addLease(lease) {
        return axios.post(addLeaseUrl, lease);
    }

    updateLease(lease) {
        return axios.put(updateLeaseUrl, lease);
    }

    deleteLease(id) {
        return axios.delete(deleteLeaseUrl + id);
    }
}

export default new LeaseService();