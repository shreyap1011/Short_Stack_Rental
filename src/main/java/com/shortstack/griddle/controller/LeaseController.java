package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Lease;
import com.shortstack.griddle.service.LeaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LeaseController {
    @Autowired
    LeaseService leaseService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/leases/{landlordid}")
    public List<Lease> getAllLeasesByLandlord(@PathVariable int landlordid) {
        List<Lease> leases = leaseService.getAllLeasesByLandlord(landlordid);
        return leases;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/lease")
    public Lease findLeaseByTenant(@RequestParam(required = false)Integer tenantid, Integer apartmentid) {
        if (tenantid != null)
            return leaseService.findByTenantid(tenantid);
        else if (apartmentid != null)
            return leaseService.findByApartmentid(apartmentid);
        else
            return new Lease();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/addLease")
    public void createLease(@RequestBody Lease lease) {
        leaseService.createLease(lease);
    }

//    @ResponseStatus(HttpStatus.RESET_CONTENT)
//    @PutMapping("/updateLease")
//    public Lease updateLease(@RequestBody Lease lease) {
//        return leaseService.updateLease(lease);
//    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("deleteLease/{id}")
    public String deleteLease(@PathVariable int id) {
        return leaseService.deleteLease(id);
    }
}
