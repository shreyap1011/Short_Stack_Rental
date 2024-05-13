package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Apartment;
import com.shortstack.griddle.service.ApartmentService;
// import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ApartmentController {
    @Autowired
    ApartmentService apartmentService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/apartments")
    public Iterable<Apartment> getAllApartments() {
        return apartmentService.getAllApartments();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/apartments/{id}")
    public List<Apartment> findApartmentByBuildingid(@PathVariable int id) {
        return apartmentService.findByBuildingid(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/apartment")
    public Apartment findByApartmentNumber(@RequestParam(required = false) String apartmentnumber) {
        return apartmentService.findApartment(apartmentnumber);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/addApartment")
    public void createApartment(@RequestBody Apartment apartment) {
        apartmentService.createApartment(apartment);
    }

    //needs work
//    @ResponseStatus(HttpStatus.RESET_CONTENT)
//    @PutMapping("/updateApartment")
//    public Apartment updateApartment(@RequestBody Apartment apartment) {
//        return apartmentService.updateApartment(apartment);
//    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("deleteApartment/{id}")
    public String deleteApartment(@PathVariable int id) {
        return apartmentService.deleteApartment(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/tenant/apartment/{tenantid}")
    public List<Map<String, Object>> getTenantApartment(@PathVariable int tenantid) {
        List<Object[]> rows = apartmentService.getTenantApartment(tenantid);

        List<Map<String, Object>> jsonList = rows.stream()
                .map(row -> {
                    Map<String, Object> jsonMap = new HashMap<>();
                    jsonMap.put("id", ((Number) row[0]).intValue());
                    jsonMap.put("buildingid", ((Number) row[1]).intValue());
                    jsonMap.put("apartmentnumber", ((String) row[2]).toString());
                    return jsonMap;
                })
                .collect(Collectors.toList());

        return jsonList;
    }
}
