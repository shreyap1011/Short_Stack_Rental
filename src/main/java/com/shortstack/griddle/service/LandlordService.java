package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Landlord;
// import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.repository.LandlordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import java.util.List;
import java.util.Optional;

@Service
public class LandlordService {
    @Autowired
    private LandlordRepository landlordRepository;

    public void createLandlord(Landlord landlord) {
        landlordRepository.createLandlord(landlord.getFirstName(), landlord.getLastName(),
                landlord.getEmail(), landlord.getPhone(), landlord.getUsername(), landlord.getPassword());
    }

    public Landlord findLandlord(String username) {
        return landlordRepository.findByUsername(username);
    }

    //will also needs to be reworked
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
