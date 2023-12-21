import React from "react";
import axios from "axios";

const findBuildingUrl = "http://localhost:8080/api/building/";
const getAllBuildingsUrl = "http://localhost:8080/api/buildings";
const getAllBuildingsByLandlordUrl = "http://localhost:8080/api/building/";
const addBuildingUrl = "http://localhost:8080/api/addBuilding";
const updateBuildingUrl = "http://localhost:8080/api/updateBuilding";
const deleteBuildingUrl = "http://localhost:8080/api/deleteBuilding/";

class BuildingService {

    findBuilding(id) {
        return axios.get(findBuildingUrl + id);
    }

    getAllBuildings() {
        return axios.get(getAllBuildingsUrl);
    }
    
    getAllBuildingsByLandlord(id) {
        return axios.get(getAllBuildingsByLandlordUrl + id);
    }

    addBuilding(building) {
        return axios.post(addBuildingUrl, building);
    }

    updateBuilding(building) {
        return axios.put(updateBuildingUrl, building);
    }

    deleteBuilding(id) {
        return axios.delete(deleteBuildingUrl + id);
    }
}

export default new BuildingService();