//package com.shortstack.griddle.controller;
//
//import com.shortstack.griddle.model.Apartment;
//import com.shortstack.griddle.service.ApartmentService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/api")
//public class ApartmentController {
//    @Autowired
//    ApartmentService apartmentService;
//
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/apartments")
//    public Iterable<Apartment> getAllApartments() {
//        return apartmentService.getAllApartments();
//    }
//
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/apartments/{id}")
//    public Apartment findApartment(@PathVariable int id) {
//        return apartmentService.findApartment(id);
//    }
//
//    @ResponseStatus(HttpStatus.CREATED)
//    @PostMapping("/addApartment")
//    public String addApartment(@RequestBody Apartment apartment) {
//        return apartmentService.createApartment(apartment);
//    }
//
//    @ResponseStatus(HttpStatus.RESET_CONTENT)
//    @PutMapping("/updateApartment")
//    public Apartment updateApartment(@RequestBody Apartment apartment) {
//        return apartmentService.updateApartment(apartment);
//    }
//
//    @ResponseStatus(HttpStatus.OK)
//    @DeleteMapping("deleteApartment/{id}")
//    public String deleteApartment(@PathVariable int id) {
//        return apartmentService.deleteApartment(id);
//    }
//}
