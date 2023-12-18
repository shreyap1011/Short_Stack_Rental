//package com.shortstack.griddle.service;
//
//import com.shortstack.griddle.model.Lease;
//import com.shortstack.griddle.repository.LeaseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.List;
//import java.util.Optional;
//
//public class LeaseService {
//
//    @Autowired
//    private LeaseRepository leaseRepository;
//
//    public List<Lease> getAllLeases() {
//        return (List<Lease>) leaseRepository.findAll();
//    }
//
//    public Lease findLease(int id) {
//        return leaseRepository.findById(id).orElse(null);
//    }
//
//    public String createLease(Lease lease) {
//        leaseRepository.save(lease);
//        return "Lease added";
//    }
//
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
//
//    public String deleteLease(int id) {
//        leaseRepository.deleteById(id);
//        return "Lease deleted";
//    }
//}
