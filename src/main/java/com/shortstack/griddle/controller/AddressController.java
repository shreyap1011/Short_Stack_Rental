//package com.shortstack.griddle.controller;
//
//import com.shortstack.griddle.model.Address;
//import com.shortstack.griddle.model.Tenant;
//import com.shortstack.griddle.service.AddressService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/api")
//public class AddressController {
//    @Autowired
//    AddressService addressService;
//
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/addresses")
//    public Iterable<Address> getAllAddresses() {
//        return addressService.getAllAddresses();
//    }
//
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/addresses/{id}")
//    public Address findAddress(@PathVariable int id) {
//        return addressService.findAddress(id);
//    }
//
//    @ResponseStatus(HttpStatus.CREATED)
//    @PostMapping("/addAddress")
//    public String addAddress(@RequestBody Address address) {
//        return addressService.createAddress(address);
//    }
//
//    @ResponseStatus(HttpStatus.RESET_CONTENT)
//    @PutMapping("/updateAddress")
//    public Address updateAddress(@RequestBody Address address) {
//        return addressService.updateAddress(address);
//    }
//
//    @ResponseStatus(HttpStatus.OK)
//    @DeleteMapping("deleteAddress/{id}")
//    public String deleteAddress(@PathVariable int id) {
//        return addressService.deleteAddress(id);
//    }
//}
