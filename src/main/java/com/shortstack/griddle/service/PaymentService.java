package com.shortstack.griddle.service;

import com.shortstack.griddle.model.Payment;
import com.shortstack.griddle.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayments() {
        return (List<Payment>) paymentRepository.findAll();
    }

    public List<Payment> getAllByTenantid(int tenantid) {
        return paymentRepository.findByTenantid(tenantid);
    }

    public Integer createPayment(Payment payment) {
        paymentRepository.createPayment(payment.getTenantid(), payment.getAmount(), payment.getPaymentdate(), payment.getType(), payment.getNote());
        return paymentRepository.lastPaymentId();
    }

    public Payment updatePayment(Payment payment) {
        Optional<Payment> optionalPayment = paymentRepository.findById(payment.getId());
        Payment oldPayment = null;
        if (optionalPayment.isPresent()) {
            oldPayment = optionalPayment.get();
            oldPayment.setTenantid(payment.getTenantid());
            oldPayment.setAmount(payment.getAmount());
            oldPayment.setPaymentdate(payment.getPaymentdate());
            oldPayment.setType(payment.getType());
            oldPayment.setNote(payment.getNote());
            paymentRepository.updateTenant(oldPayment.getTenantid(), oldPayment.getAmount(), oldPayment.getPaymentdate(), oldPayment.getType(), oldPayment.getNote(), oldPayment.getId());
        } else {
            return new Payment(oldPayment.getTenantid(), oldPayment.getAmount(), oldPayment.getPaymentdate(), oldPayment.getType(), oldPayment.getNote());
        }
        return oldPayment;
    }

    public String deletePayment(int id) {
        paymentRepository.deleteById(id);
        return "Payment deleted";
    }

}
