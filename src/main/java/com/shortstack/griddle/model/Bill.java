package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
@Table(name = "BILL")
public class Bill {
    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "LEASEID")
    private Integer leaseid;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "AMOUNT")
    private Double amount;

    public Bill() {
    }

    public Bill(Integer id, Integer leaseid, String description, Double amount) {
        this.id = id;
        this.leaseid = leaseid;
        this.description = description;
        this.amount = amount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getLeaseid() {
        return leaseid;
    }

    public void setLeaseid(Integer leaseid) {
        this.leaseid = leaseid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Bill{" + 
        "id=" + id + 
        ", leaseid=" + leaseid + 
        ", description=" + description + 
        ", amount=" + amount + 
        "}";
    }

}
