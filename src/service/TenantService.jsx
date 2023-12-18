import React from "react";
import axios from "axios";

const getAllTenantsUrl = "http://localhost:8080/api/tenants";
const findTenantUrl = "http://localhost:8080/api/tenant/";
const addTenantUrl = "http://localhost:8080/api/addTenant";
const updateTenantUrl = "http://localhost:8080/api/updateTenant";
const deleteTenantUrl = "http://localhost:8080/api/deleteTenant/";

class TenantService {
    getAllTenants() {
        return axios.get(getAllTenantsUrl);
    }

    findTenant(id) {
        return axios.get(findTenantUrl + id);
    }

    addTenant(tenant) {
        return axios.post(addTenantUrl, tenant);
    }

    updateTenant(tenant) {
        return axios.put(updateTenantUrl, tenant);
    }

    deleteTenant(id) {
        return axios.delete(deleteTenantUrl + id);
    }
}

export default new TenantService();