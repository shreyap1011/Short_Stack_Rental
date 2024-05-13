import React from "react";
import axios from "axios";

const findApartmentByBuildingIDUrl = "http://localhost:8080/api/apartments/";
const findApartmentByApartmentNumberUrl = "http://localhost:8080/api/apartment/";

const getAllApartmentsUrl = "http://localhost:8080/api/apartments";
const addApartmentUrl = "http://localhost:8080/api/addApartment";
const updateApartmentUrl = "http://localhost:8080/api/updateApartment";
const deleteApartmentUrl = "http://localhost:8080/api/deleteApartment/";

class ApartmentService {

    findApartmentByBuildingID(id, accessToken) {
        return axios.get(findApartmentByBuildingIDUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    findApartmentByApartmentNumber(id, accessToken) {
        return axios.get(findApartmentByApartmentNumberUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    getAllApartments(accessToken) {
        return axios.get(getAllApartmentsUrl, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    addApartment(apartment, accessToken) {
        return axios.post(addApartmentUrl, apartment, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    updateApartment(apartment, accessToken) {
        return axios.put(updateApartmentUrl, apartment, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }

    deleteApartment(id, accessToken) {
        return axios.delete(deleteApartmentUrl + id, {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }, });
    }
}

export default new ApartmentService();