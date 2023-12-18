package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Building;
import com.shortstack.griddle.repository.BuildingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuildingService {
   @Autowired
    private BuildingRepository buildingRepository;

    public List<Building> getAllBuildings() {
        return (List<Building>) buildingRepository.findAll();
    }

    public void createBuilding(Building building) {
        buildingRepository.createBuilding(building.getLandlordid(), building.getBuildingname(), building.getStreetname(),
                building.getCity(), building.getState(), building.getZip());
    }

    public List<Building> findBuildingsByLandlordid(int landlordid) {
        return buildingRepository.findAllByLandlordid(landlordid);
    }

    public Building findBuildingByBuildingname(String buildingname) {
        return buildingRepository.findByBuildingname(buildingname);
    }

//    public Building updateBuilding(Building building) {
//        Optional<Building> optionalBuilding = buildingRepository.findById(building.getBuildingID());
//        Building oldBuilding = null;
//        if (optionalBuilding.isPresent()) {
//            oldBuilding = optionalBuilding.get();
//            oldBuilding.setBuildingID(building.getBuildingID());
//            oldBuilding.setAddressID(building.getAddressID());
//            oldBuilding.setLandlordID(building.getLandlordID());
//
//        } else {
//            return new Building();
//        }
//        return oldBuilding;
//    }

    public String deleteBuilding(int id) {
        buildingRepository.deleteById(id);
        return "Building deleted";
    }

}
