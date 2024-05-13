package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Bill;
import com.shortstack.griddle.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class BillService {
    @Autowired
    BillRepository billRepository;

    public List<Bill> getAllBills() {
        return billRepository.findAll();
    }

    public void createBill(Bill bill) {
        billRepository.createBill(bill.getLeaseid(), bill.getDescription(),
                bill.getAmount());
    }

    public List<Bill> findBill(int leaseid) {
        return billRepository.findAllByLeaseid(leaseid);
    }

    //Potentially needs to be reworked.
    public Bill updateBill(Bill bill) {
        Optional<Bill> optionalLandlord = billRepository.findById(bill.getId());
        Bill oldBill = null;
        if (optionalLandlord.isPresent()) {
            oldBill = optionalLandlord.get();
            oldBill.setId(bill.getId());
            oldBill.setLeaseid(bill.getLeaseid());
            oldBill.setDescription(bill.getDescription());
            oldBill.setAmount(bill.getAmount());
        } else {
            return new Bill();
        }
        return oldBill;
    }

    public String deleteBill(int id) {
        billRepository.deleteById(id);
        return "Bill deleted";
    }

}
