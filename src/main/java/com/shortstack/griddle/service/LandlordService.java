package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Landlord;
import com.shortstack.griddle.repository.LandlordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

public class LandlordService {
    @Autowired
    private LandlordRepository landlordRepository;

    public List<Landlord> getAllLandlords() {
        return (List<Landlord>) landlordRepository.findAll();
    }

    public String createLandlord(Landlord landlord) {
        landlordRepository.save(landlord);
        return "Landlord added";
    }

    public Landlord findLandlord(int id) {
        return landlordRepository.findById(id).orElse(null);
    }

    public Landlord updateLandlord(Landlord landlord) {
        Optional<Landlord> optionalLandlord = landlordRepository.findById(landlord.getLandlordID());
        Landlord oldLandlord = null;
        if (optionalLandlord.isPresent()) {
            oldLandlord = optionalLandlord.get();
            oldLandlord.setLandlordID(landlord.getLandlordID());
            oldLandlord.setEmail(landlord.getEmail());
            oldLandlord.setFirstName(landlord.getFirstName());
            oldLandlord.setLastName(landlord.getLastName());
            oldLandlord.setUsername(landlord.getUsername());
            oldLandlord.setPassword(landlord.getPassword());
        } else {
            return new Landlord();
        }
        return oldLandlord;
    }

    public String deleteLandlord(int id) {
        landlordRepository.deleteById(id);
        return "Landlord deleted";
    }

}
