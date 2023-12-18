package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.service.TenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
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

//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/tenants/{id}")
//    public Tenant findTenant(@PathVariable int id) {
//        return tenantService.findTenant(id);
//    }
    @PostMapping("/addTenant")
    @ResponseStatus(HttpStatus.CREATED)
    public void addTenant(@RequestBody Tenant tenant) {
        tenantService.save(tenant);
    }

//    @ResponseStatus(HttpStatus.RESET_CONTENT)
//    @PutMapping("/updateTenant")
//    public Tenant updateTenant(@RequestBody Tenant tenant) {
//        return tenantService.updateTenant(tenant);
//    }


    @DeleteMapping("deleteTenant/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteTenant(@PathVariable int id) {
        return tenantService.deleteTenant(id);
    }
}
