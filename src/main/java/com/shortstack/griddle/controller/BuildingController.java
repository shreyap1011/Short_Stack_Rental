package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Building;
import com.shortstack.griddle.service.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BuildingController {
    @Autowired
    BuildingService buildingService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/buildings")
    public Iterable<Building> getAllBuildings() {
        return buildingService.getAllBuildings();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/building")
    public Building findBuilding(@RequestParam(required = false) Integer landlordid, String buildingname) {
        if (landlordid != null)
            return buildingService.findBuildingByLandlordid(landlordid);
        else if (buildingname != null)
            return buildingService.findBuildingByBuildingname(buildingname);
        else
            return new Building();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/addBuilding")
    public void addBuilding(@RequestBody Building building) {
        buildingService.createBuilding(building);
    }

//    @ResponseStatus(HttpStatus.RESET_CONTENT)
//    @PutMapping("/updateBuilding")
//    public Building updateBuilding(@RequestBody Building building) {
//        return buildingService.updateBuilding(building);
//    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("deleteBuilding/{id}")
    public String deleteBuilding(@PathVariable int id) {
        return buildingService.deleteBuilding(id);
    }
}
