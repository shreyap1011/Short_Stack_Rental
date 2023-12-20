package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Apartment;
import com.shortstack.griddle.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
// import java.util.Optional;
@Service
public class ApartmentService {
    @Autowired
    ApartmentRepository apartmentRepository;

    public List<Apartment> getAllApartments() {
        return (List<Apartment>) apartmentRepository.findAll();
    }

    public void createApartment(Apartment apartment) {
        apartmentRepository.createApartment(apartment.getBuildingid(), apartment.getApartmentnumber());
    }

    public Apartment findApartment(String apartmentnumber) {
        return apartmentRepository.findByApartmentnumber(apartmentnumber);
    }

    public List<Apartment> findByBuildingid(int buildingid) {
        return apartmentRepository.findApartmentsByBuildingid(buildingid);
    }

//    public Apartment updateApartment(Apartment apartment) {
//        Optional<Apartment> optionalApartment = apartmentRepository.findById(apartment.getApartmentID());
//        Apartment oldApartment = null;
//        if (optionalApartment.isPresent()) {
//            oldApartment = optionalApartment.get();
//            oldApartment.setApartmentID(apartment.getApartmentID());
//            oldApartment.setBuildingID(apartment.getBuildingID());
//            oldApartment.setApartmentNumber(apartment.getApartmentNumber());
//
//        } else {
//            return new Apartment();
//        }
//        return oldApartment;
//    }

    public String deleteApartment(int id) {
        apartmentRepository.deleteById(id);
        return "Apartment deleted";
    }

}
