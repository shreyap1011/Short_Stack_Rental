package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.repository.LandlordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

public class LandlordService {
    @Autowired
    private LandlordRepository userRepository;

    public List<Tenant> getAllLandlords() {
        return (List<Tenant>) userRepository.findAll();
    }

    public String createLandlord(Tenant user) {
        userRepository.save(user);
        return "Landlord added";
    }

    public Tenant findLandlord(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public Tenant updateLandlord(Tenant user) {
        Optional<Tenant> optionalLandlord = userRepository.findById(user.getLandlordID());
        Tenant oldLandlord = null;
        if (optionalLandlord.isPresent()) {
            oldLandlord = optionalLandlord.get();
            oldLandlord.setLandlordID(user.getLandlordID());
            oldLandlord.setEmail(user.getEmail());
            oldLandlord.setFirstName(user.getFirstName());
            oldLandlord.setLastName(user.getLastName());
            oldLandlord.setLandlordname(user.getLandlordname());
            oldLandlord.setPassword(user.getPassword());
        } else {
            return new Tenant();
        }
        return oldLandlord;
    }

    public String deleteLandlord(int id) {
        userRepository.deleteById(id);
        return "Landlord deleted";
    }

}
