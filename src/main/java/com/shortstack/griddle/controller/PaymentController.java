package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Payment;
import com.shortstack.griddle.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class PaymentController {
    @Autowired
    PaymentService paymentService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/payments")
    public Iterable<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/payments/{tenantid}")
    public Iterable<Payment> getAllPaymentsByTenantid(@PathVariable int tenantid) {
        return paymentService.getAllByTenantid(tenantid);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/addPayment")
    public Integer addPayment(@RequestBody Payment payment) {
        return paymentService.createPayment(payment);
    }

    @ResponseStatus(HttpStatus.RESET_CONTENT)
    @PutMapping("/updatePayment")
    public Payment updatePayment(@RequestBody Payment payment) {
        return paymentService.updatePayment(payment);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("deletePayment/{id}")
    public String deletePayment(@PathVariable int id) {
        return paymentService.deletePayment(id);
    }
}
