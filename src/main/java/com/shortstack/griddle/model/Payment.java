package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
@Table(name = "PAYMENT")
public class Payment {

    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "tenantid")
    private Integer tenantid;

    @Column(name = "amount")
    private double amount;

    @Column(name = "paymentdate")
    private String paymentdate;

    @Column(name = "type")
    private String type;

    @Column(name = "note")
    private String note;

    public Payment() {
    }

    public Payment(Integer tenantid, double amount, String paymentdate, String type, String note) {
        this.tenantid = tenantid;
        this.amount = amount;
        this.paymentdate = paymentdate;
        this.type = type;
        this.note = note;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTenantid() {
        return tenantid;
    }

    public void setTenantid(Integer tenantid) {
        this.tenantid = tenantid;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getPaymentdate() {
        return paymentdate;
    }

    public void setPaymentdate(String paymentdate) {
        this.paymentdate = paymentdate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "paymentid=" + id +
                ", tenantid=" + tenantid +
                ", amount=" + amount +
                ", paymentdate=" + paymentdate +
                ", type='" + type + '\'' +
                ", note='" + note + '\'' +
                '}';
    }
}
