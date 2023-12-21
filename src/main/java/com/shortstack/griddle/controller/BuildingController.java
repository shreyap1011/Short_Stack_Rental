package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Building;
import com.shortstack.griddle.service.BuildingService;
import com.shortstack.griddle.service.LeaseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BuildingController {
    @Autowired
    BuildingService buildingService;
    LeaseService leaseService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/buildings")
    public Iterable<Building> getAllBuildings() {
        return buildingService.getAllBuildings();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/building/{landlordid}")
    public List<Building> findBuildingsByLandlordid(@PathVariable Integer landlordid) {
        return buildingService.findBuildingsByLandlordid(landlordid);
    }



    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/building")
    public Building findBuilding(@RequestParam(required = false) String buildingname) {
            return buildingService.findBuildingByBuildingname(buildingname);
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

       
















    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/tenant/building/{tenantid}")
    public List<Map<String, Object>> getTenantBuilding(@PathVariable int tenantid) {
        List<Object[]> rows = buildingService.getTenantBuilding(tenantid);

        List<Map<String, Object>> jsonList = rows.stream()
                .map(row -> {
                    Map<String, Object> jsonMap = new HashMap<>();
                    jsonMap.put("id", ((Number) row[0]).intValue());
                    jsonMap.put("landlordid", ((Number) row[1]).intValue());
                    jsonMap.put("buildingname", ((String) row[2]).toString());
                    jsonMap.put("streetname", ((String) row[3]).toString());
                    jsonMap.put("city", ((String) row[4]).toString());
                    jsonMap.put("state", ((String) row[5]).toString());
                    jsonMap.put("zip", ((String) row[6]).toString());
                    return jsonMap;
                })
                .collect(Collectors.toList());

        return jsonList;
    }
}
