package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.service.TenantService;
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

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/tenant")
    public Tenant findTenant(@RequestParam(required = false) String username) {
        return tenantService.findTenant(username);
    }

    @PostMapping("/addTenant")
    @ResponseStatus(HttpStatus.CREATED)
    public void addTenant(@RequestBody Tenant tenant) {
        tenantService.save(tenant);
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
