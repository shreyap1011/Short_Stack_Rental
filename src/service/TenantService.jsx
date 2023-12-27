import React, { useEffect } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const getAllTenantsUrl = "http://localhost:8080/api/tenants";
const getAllTenantsByLandlordUrl = "http://localhost:8080/api/tenants/landlord/";
const findTenantUrl = "http://localhost:8080/api/tenants/";
const findTenantByUsernameUrl = "http://localhost:8080/api/tenant";
const findBuildingByTenantUrl = "http://localhost:8080/api/tenant/building/";
const findApartmentByTenantUrl = "http://localhost:8080/api/tenant/apartment/";
const addTenantUrl = "http://localhost:8080/api/addTenant";
const updateTenantUrl = "http://localhost:8080/api/updateTenant";
const deleteTenantUrl = "http://localhost:8080/api/deleteTenant/";


class TenantService {
    getAllTenants(accessToken) {
        return axios.get(getAllTenantsUrl);
    }
    
    getAllTenantsByLandlord(id, accessToken) {
        return axios.get(getAllTenantsByLandlordUrl + id);
    }

    findTenant(id, accessToken) {
        return axios.get(findTenantUrl + id);
    }

    findBuildingByTenant(id, accessToken) {
        return axios.get(findBuildingByTenantUrl + id);
    }

    findApartmentByTenant(id, accessToken) {
        console.log("service: " + id);
        return axios.get(findApartmentByTenantUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    async findTenantByUsername(username, accessToken) {
        // const { auth } = useAuth();
        // return axios.get(findTenantByUsernameUrl, {params : {username : username}});
        return await axios.get(findTenantByUsernameUrl, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, 
            params : {username : username}
        },
    );
    }

    addTenant(tenant, accessToken) {
        return axios.post(addTenantUrl, tenant);
    }

    updateTenant(tenant, accessToken) {
        return axios.put(updateTenantUrl, tenant);
    }

    deleteTenant(id, accessToken) {
        return axios.delete(deleteTenantUrl + id);
    }
}

export default new TenantService();