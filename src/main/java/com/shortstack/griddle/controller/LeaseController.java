//package com.shortstack.griddle.controller;
//
//import com.shortstack.griddle.model.Lease;
//import com.shortstack.griddle.service.LeaseService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/api")
//public class LeaseController {
//    @Autowired
//    LeaseService leaseService;
//
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/leases")
//    public Iterable<Lease> getAllLeases() {
//        return leaseService.getAllLeases();
//    }
//
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/leases/{id}")
//    public Lease findLease(@PathVariable int id) {
//        return leaseService.findLease(id);
//    }
//
//    @ResponseStatus(HttpStatus.CREATED)
//    @PostMapping("/addLease")
//    public String addLease(@RequestBody Lease lease) {
//        return leaseService.createLease(lease);
//    }
//
//    @ResponseStatus(HttpStatus.RESET_CONTENT)
//    @PutMapping("/updateLease")
//    public Lease updateLease(@RequestBody Lease lease) {
//        return leaseService.updateLease(lease);
//    }
//
//    @ResponseStatus(HttpStatus.OK)
//    @DeleteMapping("deleteLease/{id}")
//    public String deleteLease(@PathVariable int id) {
//        return leaseService.deleteLease(id);
//    }
//}
