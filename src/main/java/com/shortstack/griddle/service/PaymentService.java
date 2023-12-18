//package com.shortstack.griddle.service;
//
//import com.shortstack.griddle.model.Payment;
//import com.shortstack.griddle.repository.PaymentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import java.util.List;
//import java.util.Optional;
//
//public class PaymentService {
//    @Autowired
//    private PaymentRepository paymentRepository;
//
//    public List<Payment> getAllPayments() {
//        return (List<Payment>) paymentRepository.findAll();
//    }
//
//    public String createPayment(Payment payment) {
//        paymentRepository.save(payment);
//        return "Payment added";
//    }
//
//    public Payment findPayment(int id) {
//        return paymentRepository.findById(id).orElse(null);
//    }
//
//    public Payment updatePayment(Payment payment) {
//        Optional<Payment> optionalPayment = paymentRepository.findById(payment.getPaymentID());
//        Payment oldPayment = null;
//        if (optionalPayment.isPresent()) {
//            oldPayment = optionalPayment.get();
//            oldPayment.setPaymentID(payment.getPaymentID());
//            oldPayment.setLeaseID(payment.getLeaseID());
//            oldPayment.setPaymentDate(payment.getPaymentDate());
//            oldPayment.setAmount(payment.getAmount());
//            oldPayment.setStatus(payment.getStatus());
//            oldPayment.setPaymentMethod(payment.getPaymentMethod());;
//
//        } else {
//            return new Payment();
//        }
//        return oldPayment;
//    }
//
//    public String deletePayment(int id) {
//        paymentRepository.deleteById(id);
//        return "Payment deleted";
//    }
//
//}
