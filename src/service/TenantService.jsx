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
        return axios.get(getAllTenantsUrl, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
    
    getAllTenantsByLandlord(id, accessToken) {
        return axios.get(getAllTenantsByLandlordUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    findTenant(id, accessToken) {
        return axios.get(findTenantUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    findBuildingByTenant(id, accessToken) {
        return axios.get(findBuildingByTenantUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
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
        }
    );
    }

    addTenant(tenant, accessToken) {
        return axios.post(addTenantUrl, tenant , {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    updateTenant(tenant, accessToken) {
        return axios.put(updateTenantUrl, tenant , {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    deleteTenant(id, accessToken) {
        return axios.delete(deleteTenantUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
}

export default new TenantService();