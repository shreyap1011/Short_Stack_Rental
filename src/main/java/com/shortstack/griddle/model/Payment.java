//package com.shortstack.griddle.model;
//
//import jakarta.persistence.*;
//import java.sql.Date;
//
//@Entity
//public class Payment {
//    // @id means id will auto generate
//
//    public enum Status {
//        Paid, Unpaid, Overdue;
//    }
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer paymentID;
//    private Integer leaseID;
//    private String paymentMethod;
//    private Double amount;
//
//    @Temporal(TemporalType.DATE)
//    private Date paymentDate;
//
//    @Enumerated(EnumType.STRING)
//    private Status status;
//
//    public Payment() {
//    }
//
//    public Payment(Integer leaseID, String paymentMethod, Double amount, Date paymentDate,
//            Status status) {
//        this.leaseID = leaseID;
//        this.paymentMethod = paymentMethod;
//        this.amount = amount;
//        this.paymentDate = paymentDate;
//        this.status = status;
//    }
//
//    public Integer getPaymentID() {
//        return paymentID;
//    }
//
//    public void setPaymentID(Integer paymentID) {
//        this.paymentID = paymentID;
//    }
//
//    public Integer getLeaseID() {
//        return leaseID;
//    }
//
//    public void setLeaseID(Integer leaseID) {
//        this.leaseID = leaseID;
//    }
//
//    public String getPaymentMethod() {
//        return paymentMethod;
//    }
//
//    public void setPaymentMethod(String paymentMethod) {
//        this.paymentMethod = paymentMethod;
//    }
//
//    public Double getAmount() {
//        return amount;
//    }
//
//    public void setAmount(Double amount) {
//        this.amount = amount;
//    }
//
//    public Date getPaymentDate() {
//        return paymentDate;
//    }
//
//    public void setPaymentDate(Date paymentDate) {
//        this.paymentDate = paymentDate;
//    }
//
//    public Status getStatus() {
//        return status;
//    }
//
//    public void setStatus(Status status) {
//        this.status = status;
//    }
//
//    @Override
//    public String toString() {
//        return "Payment{" +
//        "paymentID=" + paymentID +
//        ", leaseID=" + leaseID +
//        ", paymentMethod=" + paymentMethod +
//        ", amount=" + amount +
//        ", paymentDate=" + paymentDate +
//        ", status=" + status +
//        "}";
//    }
//
//}
