package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Bill;
import com.shortstack.griddle.model.Lease;
import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.repository.BillRepository;
import com.shortstack.griddle.repository.LeaseRepository;
import com.shortstack.griddle.repository.TenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class TenantService {
    @Autowired
    TenantRepository tenantRepository;

    @Autowired
    LeaseRepository leaseRepository;

    @Autowired
    BillRepository billRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public TenantService(BCryptPasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public List<Tenant> getAllTenants() {
        return tenantRepository.findAll();
    }

    public void createTenant(Tenant tenant) {
        String hashedPassword = passwordEncoder.encode(tenant.getPassword());
        tenant.setPassword(hashedPassword);
        tenantRepository.createTenant(tenant.getFirstName(), tenant.getLastName(),
                tenant.getEmail(), tenant.getPhone(), tenant.getUsername(), tenant.getPassword(),
                tenant.getBalance());
    }

    public boolean validateLogin(Tenant tenant, String enteredPassword) {
        // Retrieve the hashed password from the database (this is just a placeholder)
        String storedHashedPassword = tenantRepository.findByUsername(tenant.getUsername()).getPassword();

        // Verify the entered password against the stored hashed password
        return passwordEncoder.matches(enteredPassword, storedHashedPassword);
    }

    public Integer lastTenantid() {
        return tenantRepository.lastTenantid();
    }

    public Tenant findById(int id) {
        return tenantRepository.findById(id);
    }

    public Tenant findTenant(String username) {
        return tenantRepository.findByUsername(username);
    }

    public List<Object[]> getAllTenantsByLandlord(int landlordid) {
        return tenantRepository.findTenantByLandlordid(landlordid);
    }

    public Tenant updateTenant(Tenant tenant) {
        Optional<Tenant> optionalLandlord = tenantRepository.findById(tenant.getId());
        Tenant oldTenant = null;
        if (optionalLandlord.isPresent()) {
            oldTenant = optionalLandlord.get();
            oldTenant.setId(tenant.getId());
            oldTenant.setEmail(tenant.getEmail());
            oldTenant.setPhone(tenant.getPhone());
            oldTenant.setFirstName(tenant.getFirstName());
            oldTenant.setLastName(tenant.getLastName());
            oldTenant.setUsername(tenant.getUsername());
            oldTenant.setPassword(tenant.getPassword());
            oldTenant.setBalance(tenant.getBalance());
            tenantRepository.updateTenant(oldTenant.getFirstName(), oldTenant.getLastName(), oldTenant.getEmail(),
                    oldTenant.getPhone(), oldTenant.getUsername(), oldTenant.getPassword(), oldTenant.getBalance(), oldTenant.getId());
        } else {
            return new Tenant();
        }
        return oldTenant;
    }

    public String deleteTenant(int id) {
        tenantRepository.deleteById(id);
        return "Tenant deleted";
    }

    @Scheduled (cron = "0 0 20 * ?")
    private void chargeTenant() {
        List<Tenant> allTenants = tenantRepository.findAll();
        for (Tenant tenant : allTenants) {
            double amount = updateBalance(tenant);
            tenantRepository.updateTenantBalance(amount, tenant.getId());
        }
    }

    private double updateBalance(Tenant tenant) {
        Lease tenantLease = leaseRepository.findByTenantid(tenant.getId());
        return totalAmountDue(tenantLease);
    }

    private double totalAmountDue(Lease lease) {
        List<Bill> bills = billRepository.findAllByLeaseid(lease.getId());
        double billsTotal = bills.stream().reduce(0.00, (subtotal, bill) -> subtotal + bill.getAmount(), Double::sum);
        return billsTotal + lease.getRent();
    }

}
