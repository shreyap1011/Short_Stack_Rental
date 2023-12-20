package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Lease;
import com.shortstack.griddle.service.LeaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LeaseController {
    @Autowired
    LeaseService leaseService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/leases/{landlordid}")
    public List<Map<String, Object>> getAllLeasesByLandlord(@PathVariable int landlordid) {
        List<Object[]> rows = leaseService.getAllLeasesByLandlord(landlordid);

        List<Map<String, Object>> jsonList = rows.stream()
                .map(row -> {
                    Map<String, Object> jsonMap = new HashMap<>();
                    jsonMap.put("id", ((Number) row[0]).intValue());
                    jsonMap.put("tenantid", ((Number) row[1]).intValue());
                    jsonMap.put("apartmentid", ((Number) row[2]).intValue());
                    jsonMap.put("startdate", ((Date) row[3]).toString());
                    jsonMap.put("enddate", ((Date) row[4]).toString());
                    jsonMap.put("rent", ((Number) row[5]).doubleValue());
                    return jsonMap;
                })
                .collect(Collectors.toList());

        return jsonList;
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
