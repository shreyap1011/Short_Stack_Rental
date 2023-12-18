package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Building;
import com.shortstack.griddle.service.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
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
    @GetMapping("/buildings/{id}")
    public Building findBuilding(@PathVariable int id) {
        return buildingService.findBuilding(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/addBuilding")
    public String addBuilding(@RequestBody Building building) {
        return buildingService.createBuilding(building);
    }

    @ResponseStatus(HttpStatus.RESET_CONTENT)
    @PutMapping("/updateBuilding")
    public Building updateBuilding(@RequestBody Building building) {
        return buildingService.updateBuilding(building);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("deleteBuilding/{id}")
    public String deleteBuilding(@PathVariable int id) {
        return buildingService.deleteBuilding(id);
    }
}
