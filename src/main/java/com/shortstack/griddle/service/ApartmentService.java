package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Apartment;
import com.shortstack.griddle.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

public class ApartmentService {
    @Autowired
    private ApartmentRepository apartmentRepository;

    public List<Apartment> getAllApartments() {
        return (List<Apartment>) apartmentRepository.findAll();
    }

    public String createApartment(Apartment apartment) {
        apartmentRepository.save(apartment);
        return "Apartment added";
    }

    public Apartment findApartment(int id) {
        return apartmentRepository.findById(id).orElse(null);
    }

    public Apartment updateApartment(Apartment apartment) {
        Optional<Apartment> optionalApartment = apartmentRepository.findById(apartment.getApartmentID());
        Apartment oldApartment = null;
        if (optionalApartment.isPresent()) {
            oldApartment = optionalApartment.get();
            oldApartment.setApartmentID(apartment.getApartmentID());
            oldApartment.setBuildingID(apartment.getBuildingID());
            oldApartment.setApartmentNumber(apartment.getApartmentNumber());
           
        } else {
            return new Apartment();
        }
        return oldApartment;
    }

    public String deleteApartment(int id) {
        apartmentRepository.deleteById(id);
        return "Apartment deleted";
    }

}
