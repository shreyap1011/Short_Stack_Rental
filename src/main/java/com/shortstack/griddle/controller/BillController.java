package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Bill;
import com.shortstack.griddle.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

// Will adjust origins based on where requests are coming from.
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BillController {
    @Autowired
    private BillService billService;

    @GetMapping("/bills")
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Bill> getAllBills() {
        return billService.getAllBills();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/bill")
    public Bill findBill(@RequestParam(required = false) int billid) {
        return billService.findBill(billid);
    }

    @PostMapping("/addBill")
    @ResponseStatus(HttpStatus.CREATED)
    public void addBill(@RequestBody Bill bill) {
        billService.createBill(bill);
    }

    //update method needs to be recalibrated
    @ResponseStatus(HttpStatus.RESET_CONTENT)
    @PutMapping("/updateBill")
    public Bill updateBill(@RequestBody Bill bill) {
        return billService.updateBill(bill);
    }


    @DeleteMapping("deleteBill/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteBill(@PathVariable int id) {
        return billService.deleteBill(id);
    }
}
