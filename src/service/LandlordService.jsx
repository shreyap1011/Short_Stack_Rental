import React from "react";
import axios from "axios";

const findLandlordUrl = "http://localhost:8080/api/landlord/";
const findLandlordByUserUrl = "http://localhost:8080/api/landlord?username=";
const addLandlordUrl = "http://localhost:8080/api/addLandlord";
const updateLandlordUrl = "http://localhost:8080/api/updateLandlord";
const deleteLandlordUrl = "http://localhost:8080/api/deleteLandlord/";

class LandlordService {

    findLandlord(id, accessToken) {
        return axios.get(findLandlordUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    findLandlordByUser(username, accessToken) {
        return axios.get(findLandlordByUserUrl + username, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    addLandlord(landlord, accessToken) {
        return axios.post(addLandlordUrl, landlord, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    updateLandlord(landlord, accessToken) {
        return axios.put(updateLandlordUrl, landlord, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    deleteLandlord(id, accessToken) {
        return axios.delete(deleteLandlordUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
}

export default new LandlordService();