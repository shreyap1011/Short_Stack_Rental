package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.repository.TenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

public class TenantService {
    @Autowired
    private TenantRepository tenantRepository;

    public List<Tenant> getAllTenants() {
        return (List<Tenant>) tenantRepository.findAll();
    }

    public String createTenant(Tenant tenant) {
        tenantRepository.save(tenant);
        return "Tenant added";
    }

    public Tenant findTenant(int id) {
        return tenantRepository.findById(id).orElse(null);
    }

    public Tenant updateTenant(Tenant tenant) {
        Optional<Tenant> optionalLandlord = tenantRepository.findById(tenant.getTenantID());
        Tenant oldTenant = null;
        if (optionalLandlord.isPresent()) {
            oldTenant = optionalLandlord.get();
            oldTenant.setTenantID(tenant.getTenantID());
            oldTenant.setEmail(tenant.getEmail());
            oldTenant.setFirstName(tenant.getFirstName());
            oldTenant.setLastName(tenant.getLastName());
            oldTenant.setUsername(tenant.getUsername());
            oldTenant.setPassword(tenant.getPassword());
            oldTenant.setBalance(tenant.getBalance());
        } else {
            return new Tenant();
        }
        return oldTenant;
    }

    public String deleteTenant(int id) {
        tenantRepository.deleteById(id);
        return "Tenant deleted";
    }

}
