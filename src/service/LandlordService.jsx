import React from "react";
import axios from "axios";

const findLandlordUrl = "http://localhost:8080/api/landlord/";
const findLandlordByUserUrl = "http://localhost:8080/api/landlord?username=";
const addLandlordUrl = "http://localhost:8080/api/addLandlord";
const updateLandlordUrl = "http://localhost:8080/api/updateLandlord";
const deleteLandlordUrl = "http://localhost:8080/api/deleteLandlord/";

class LandlordService {

    findLandlord(id) {
        return axios.get(findLandlordUrl + id);
    }

    findLandlordByUser(username) {
        return axios.get(findLandlordByUserUrl + username);
    }

    addLandlord(landlord) {
        return axios.post(addLandlordUrl, landlord);
    }

    updateLandlord(landlord) {
        return axios.put(updateLandlordUrl, landlord);
    }

    deleteLandlord(id) {
        return axios.delete(deleteLandlordUrl + id);
    }
}

export default new LandlordService();