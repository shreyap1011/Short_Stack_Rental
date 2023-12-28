package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Landlord;
import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.repository.LandlordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

// import java.util.List;
import java.util.Optional;

@Service
public class LandlordService {
    @Autowired
    private LandlordRepository landlordRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public LandlordService(BCryptPasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public void createLandlord(Landlord landlord) {
        String hashedPassword = passwordEncoder.encode(landlord.getPassword());
        landlord.setPassword(hashedPassword);
        landlordRepository.createLandlord(landlord.getFirstName(), landlord.getLastName(),
                landlord.getEmail(), landlord.getPhone(), landlord.getUsername(), landlord.getPassword());
    }

    public boolean validateLogin(Landlord landlord, String enteredPassword) {
        // Retrieve the hashed password from the database (this is just a placeholder)
        String storedHashedPassword = landlordRepository.findByUsername(landlord.getUsername()).getPassword();

        // Verify the entered password against the stored hashed password
        return passwordEncoder.matches(enteredPassword, storedHashedPassword);
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
            oldLandlord.setPhone(landlord.getPhone());
            oldLandlord.setFirstName(landlord.getFirstName());
            oldLandlord.setLastName(landlord.getLastName());
            oldLandlord.setUsername(landlord.getUsername());
            oldLandlord.setPassword(landlord.getPassword());
            landlordRepository.updateLandlord(oldLandlord.getFirstName(), oldLandlord.getLastName(), oldLandlord.getEmail(),
                    oldLandlord.getPhone(), oldLandlord.getUsername(), oldLandlord.getPassword(), oldLandlord.getLandlordID());
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
