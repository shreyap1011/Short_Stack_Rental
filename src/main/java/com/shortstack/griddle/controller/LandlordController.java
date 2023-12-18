//package com.shortstack.griddle.controller;
//
//import com.shortstack.griddle.model.Landlord;
//import com.shortstack.griddle.service.LandlordService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/api")
//public class LandlordController {
//    @Autowired
//    LandlordService landlordService;
//
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/landlords")
//    public Iterable<Landlord> getAllLandlords() {
//        return landlordService.getAllLandlords();
//    }
//
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/landlords/{id}")
//    public Landlord findLandlord(@PathVariable int id) {
//        return landlordService.findLandlord(id);
//    }
//
//    @ResponseStatus(HttpStatus.CREATED)
//    @PostMapping("/addLandlord")
//    public String addLandlord(@RequestBody Landlord landlord) {
//        return landlordService.createLandlord(landlord);
//    }
//
//    @ResponseStatus(HttpStatus.RESET_CONTENT)
//    @PutMapping("/updateLandlord")
//    public Landlord updateLandlord(@RequestBody Landlord landlord) {
//        return landlordService.updateLandlord(landlord);
//    }
//
//    @ResponseStatus(HttpStatus.OK)
//    @DeleteMapping("deleteLandlord/{id}")
//    public String deleteLandlord(@PathVariable int id) {
//        return landlordService.deleteLandlord(id);
//    }
//}
