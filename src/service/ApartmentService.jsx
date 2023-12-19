import React from "react";
import axios from "axios";

const findApartmentByBuildingIDUrl = "http://localhost:8080/api/apartments/";
const findApartmentByApartmentNumberUrl = "http://localhost:8080/api/apartment/";

const getAllApartmentsUrl = "http://localhost:8080/api/apartments";
const addApartmentUrl = "http://localhost:8080/api/addApartment";
const updateApartmentUrl = "http://localhost:8080/api/updateApartment";
const deleteApartmentUrl = "http://localhost:8080/api/deleteApartment/";

class ApartmentService {

    findApartmentByBuildingID(id) {
        return axios.get(findApartmentByBuildingIDUrl + id);
    }

    findApartmentByApartmentNumber(id) {
        return axios.get(findApartmentByApartmentNumberUrl + id);
    }

    getAllApartments() {
        return axios.get(getAllApartmentsUrl);
    }

    addApartment(apartment) {
        return axios.post(addApartmentUrl, apartment);
    }

    updateApartment(apartment) {
        return axios.put(updateApartmentUrl, apartment);
    }

    deleteApartment(id) {
        return axios.delete(deleteApartmentUrl + id);
    }
}

export default new ApartmentService();