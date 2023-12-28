import React from "react";
import axios from "axios";

const findBuildingUrl = "http://localhost:8080/api/building/";
const getAllBuildingsUrl = "http://localhost:8080/api/buildings";
const getAllBuildingsByLandlordUrl = "http://localhost:8080/api/building/";
const addBuildingUrl = "http://localhost:8080/api/addBuilding";
const updateBuildingUrl = "http://localhost:8080/api/updateBuilding";
const deleteBuildingUrl = "http://localhost:8080/api/deleteBuilding/";

class BuildingService {

    findBuilding(id, accessToken) {
        return axios.get(findBuildingUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    getAllBuildings(accessToken) {
        return axios.get(getAllBuildingsUrl, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
    
    getAllBuildingsByLandlord(id, accessToken) {
        return axios.get(getAllBuildingsByLandlordUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    addBuilding(building, accessToken) {
        return axios.post(addBuildingUrl, building, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    updateBuilding(building, accessToken) {
        return axios.put(updateBuildingUrl, building, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    deleteBuilding(id, accessToken) {
        return axios.delete(deleteBuildingUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
}

export default new BuildingService();