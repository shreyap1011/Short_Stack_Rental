package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Bill;
import com.shortstack.griddle.model.Lease;
import com.shortstack.griddle.repository.BillRepository;
import com.shortstack.griddle.repository.LeaseRepository;
import com.shortstack.griddle.repository.TenantRepository;
import net.snowflake.client.jdbc.internal.org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LeaseService {

    @Autowired
    LeaseRepository leaseRepository;

    @Autowired
    TenantRepository tenantRepository;


    public List<Object[]> getAllLeasesByLandlord(int landlordid) {
        return leaseRepository.findLeaseByLandlordid(landlordid);
    }

    public Lease findByTenantid(int tenantid) {
        return leaseRepository.findByTenantid(tenantid);
    }

    public Lease findByApartmentid(int apartmentid) {
        return leaseRepository.findByApartmentid(apartmentid);
    }

    public Integer lastLeaseid() {
        return leaseRepository.lastLeaseid();
    }

    public void createLease(Lease lease) {
        leaseRepository.createLease(lease.getTenantid(), lease.getApartmentid(), lease.getStartdate(), lease.getEnddate(),
                lease.getRent());
        tenantRepository.updateTenantBalance(lease.getRent(), lease.getTenantid());
    }

//    public Lease updateLease(Lease lease) {
//        Optional<Lease> optionalLease = leaseRepository.findById(lease.getLeaseID());
//        Lease oldLease = null;
//        if(optionalLease.isPresent()) {
//            oldLease = optionalLease.get();
//            oldLease.setLeaseID(lease.getLeaseID());
//            oldLease.setTenantID(lease.getTenantID());
//            oldLease.setApartmentID(lease.getApartmentID());
//            oldLease.setRent(lease.getRent());
//            oldLease.setStartDate(lease.getStartDate());
//            oldLease.setEndDate(lease.getEndDate());
//            oldLease.setUtilityFee(lease.getUtilityFee());
//            oldLease.setTechnologyFee(lease.getTechnologyFee());
//            oldLease.setAmenityFee(lease.getAmenityFee());
//        } else {
//            return new Lease();
//        }
//        return oldLease;
//    }

    public String deleteLease(int id) {
        leaseRepository.deleteById(id);
        return "Lease deleted";
    }
}
