package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.service.TenantService;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

// Will adjust origins based on where requests are coming from.
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TenantController {
    @Autowired
    private TenantService tenantService;

    @GetMapping("/tenants")
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Tenant> getAllTenants() {
        return tenantService.getAllTenants();
    }

    @GetMapping("/tenants/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Tenant getTenantById(@PathVariable int id) {
        return tenantService.findById(id);
    }

    // @ResponseStatus(HttpStatus.OK)
    // @GetMapping("/tenants/landlord/{landlordid}")
    // public Iterable<Tenant> getAllTenantsByLandlord(@PathVariable Integer landlordid) {
    //     return tenantService.getAllTenantsByLandlord(landlordid);
    // }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/tenants/landlord/{landlordid}")
    public List<Map<String, Object>> getAllTenantsByLandlord(@PathVariable int landlordid) {
        List<Object[]> rows = tenantService.getAllTenantsByLandlord(landlordid);

        List<Map<String, Object>> jsonList = rows.stream()
                .map(row -> {
                    Map<String, Object> jsonMap = new HashMap<>();
                    jsonMap.put("id", ((Number) row[0]).intValue());
                    jsonMap.put("firstname", ((String) row[1]).toString());
                    jsonMap.put("lastname", ((String) row[2]).toString());
                    jsonMap.put("email", ((String) row[3]).toString());
                    jsonMap.put("phone", ((String) row[4]).toString());
                    jsonMap.put("username", ((String) row[5]).toString());
                    jsonMap.put("password", ((String) row[6]).toString());
                    jsonMap.put("balance", ((Number) row[7]).doubleValue());
                    return jsonMap;
                })
                .collect(Collectors.toList());

        return jsonList;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/tenant")
    public Tenant findTenant(@RequestParam(required = false) String username) {
        return tenantService.findTenant(username);
    }

    @PostMapping("/addTenant")
    @ResponseStatus(HttpStatus.CREATED)
    public int addTenant(@RequestBody Tenant tenant) {
        tenantService.createTenant(tenant);
        return tenantService.lastTenantid();
    }

    //update method needs to be recalibrated
    @ResponseStatus(HttpStatus.RESET_CONTENT)
    @PutMapping("/updateTenant")
    public Tenant updateTenant(@RequestBody Tenant tenant) {
        return tenantService.updateTenant(tenant);
    }


    @DeleteMapping("deleteTenant/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteTenant(@PathVariable int id) {
        return tenantService.deleteTenant(id);
    }

}
