package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Building;
import com.shortstack.griddle.repository.BuildingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

public class BuildingService {
   @Autowired
    private BuildingRepository buildingRepository;

    public List<Building> getAllBuildings() {
        return (List<Building>) buildingRepository.findAll();
    }

    public String createBuilding(Building building) {
        buildingRepository.save(building);
        return "Building added";
    }

    public Building findBuilding(int id) {
        return buildingRepository.findById(id).orElse(null);
    }

    public Building updateBuilding(Building building) {
        Optional<Building> optionalBuilding = buildingRepository.findById(building.getBuildingID());
        Building oldBuilding = null;
        if (optionalBuilding.isPresent()) {
            oldBuilding = optionalBuilding.get();
            oldBuilding.setBuildingID(building.getBuildingID());
            oldBuilding.setAddressID(building.getAddressID());
            oldBuilding.setLandlordID(building.getLandlordID());

           
        } else {
            return new Building();
        }
        return oldBuilding;
    }

    public String deleteBuilding(int id) {
        buildingRepository.deleteById(id);
        return "Building deleted";
    }

}
