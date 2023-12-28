import React from "react";
import axios from "axios";

const getLeasesByLandlordUrl = "http://localhost:8080/api/leases/";
const findLeaseByUrl = "http://localhost:8080/api/lease";
const addLeaseUrl = "http://localhost:8080/api/addLease";
const updateLeaseUrl = "http://localhost:8080/api/updateLease";
const deleteLeaseUrl = "http://localhost:8080/api/deleteLease/";

class LeaseService {

    findLeaseByApartment(id, accessToken) {
        return axios.get(findLeaseByUrl, {       
            headers: {
                Authorization : `Bearer ${accessToken}`,
                
            }, 
            params : {apartmentid : id}});
    }

    findLeaseByTenant(id, accessToken) {
        return axios.get(findLeaseByUrl, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, 
            params : {tenantid : id}});
    }

    getAllLeasesByLandlord(id, accessToken) {
        return axios.get(getLeasesByLandlordUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    addLease(lease, accessToken) {
        return axios.post(addLeaseUrl, lease, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    updateLease(lease, accessToken) {
        return axios.put(updateLeaseUrl, lease, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    deleteLease(id, accessToken) {
        return axios.delete(deleteLeaseUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
}

export default new LeaseService();