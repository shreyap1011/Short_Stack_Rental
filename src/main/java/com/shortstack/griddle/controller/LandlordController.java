package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Landlord;
import com.shortstack.griddle.service.LandlordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LandlordController {
    @Autowired
    LandlordService landlordService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/landlord")
    public Landlord findLandlord(@RequestParam(required=false) String username) {
        return landlordService.findLandlord(username);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/addLandlord")
    public void createLandlord(@RequestBody Landlord landlord) {
        landlordService.createLandlord(landlord);
    }

    //Potentially need to rework udpate
    @ResponseStatus(HttpStatus.RESET_CONTENT)
    @PutMapping("/updateLandlord")
    public Landlord updateLandlord(@RequestBody Landlord landlord) {
        return landlordService.updateLandlord(landlord);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("deleteLandlord/{id}")
    public String deleteLandlord(@PathVariable int id) {
        return landlordService.deleteLandlord(id);
    }
}
