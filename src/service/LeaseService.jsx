import React from "react";
import axios from "axios";

const getLeasesByLandlordUrl = "http://localhost:8080/api/leases/";
const findLeaseByUrl = "http://localhost:8080/api/lease";
const addLeaseUrl = "http://localhost:8080/api/addLease";
const updateLeaseUrl = "http://localhost:8080/api/updateLease";
const deleteLeaseUrl = "http://localhost:8080/api/deleteLease/";

class LeaseService {

    findLeaseByApartment(id) {
        return axios.get(findLeaseByUrl, {params : {apartmentid : id}});
    }

    findLeaseByTenant(id) {
        return axios.get(findLeaseByUrl, {params : {tenantid : id}});
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