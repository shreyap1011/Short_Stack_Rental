package com.shortstack.griddle.model;

import jakarta.persistence.*;
import java.sql.Date;

@Entity
public class Lease {
    // @id means id will auto generate

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer leaseID;
    private Integer userID;
    private Integer apartmentID;
    private Double rent;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date endDate;

    public Lease() {
    }

    public Lease(Integer leaseID, Integer userID, Integer apartmentID, Double rent, Date startDate, Date endDate) {
        this.leaseID = leaseID;
        this.userID = userID;
        this.apartmentID = apartmentID;
        this.rent = rent;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Integer getLeaseID() {
        return leaseID;
    }

    public void setLeaseID(Integer leaseID) {
        this.leaseID = leaseID;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public Integer getApartmentID() {
        return apartmentID;
    }

    public void setApartmentID(Integer apartmentID) {
        this.apartmentID = apartmentID;
    }

    public Double getRent() {
        return rent;
    }

    public void setRent(Double rent) {
        this.rent = rent;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "Lease{" + 
        "leaseID=" + leaseID + 
        ", userID=" + userID + 
        ", apartmentID=" + apartmentID + 
        ", rent=" + rent + 
        ", startDate=" + startDate + 
        ", endDate=" + endDate + 
        "}";
    }
    


}
