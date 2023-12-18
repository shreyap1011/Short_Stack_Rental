package com.shortstack.griddle.model;

import jakarta.persistence.*;
import java.sql.Date;

@Entity
public class Lease {
    // @id means id will auto generate

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer leaseID;
    private Integer tenantID;
    private Integer apartmentID;
    private Double rent;
    private Double utilityFee;
    private Double amenityFee;
    private Double technologyFee;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date endDate;

    public Lease() {
    }



    public Lease(Integer tenantID, Integer apartmentID, Double rent, Double utilityFee,  Double amenityFee, Double technologyFee, Date startDate, Date endDate) {
        this.tenantID = tenantID;
        this.apartmentID = apartmentID;
        this.rent = rent;
        this.utilityFee = utilityFee;
        this.amenityFee = amenityFee;
        this.technologyFee = technologyFee;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Integer getLeaseID() {
        return leaseID;
    }

    public void setLeaseID(Integer leaseID) {
        this.leaseID = leaseID;
    }

    public Integer getTenantID() {
        return tenantID;
    }

    public void setTenantID(Integer tenantID) {
        this.tenantID = tenantID;
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

    public Double getUtilityFee() {
        return utilityFee;
    }

    public void setUtilityFee(Double utilityFee) {
        this.utilityFee = utilityFee;
    }

    public Double getAmenityFee() {
        return amenityFee;
    }

    public void setAmenityFee(Double amenityFee) {
        this.amenityFee = amenityFee;
    }

    public Double getTechnologyFee() {
        return technologyFee;
    }

    public void setTechnologyFee(Double technologyFee) {
        this.technologyFee = technologyFee;
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
        ", tenantID=" + tenantID +
        ", apartmentID=" + apartmentID +
        ", rent=" + rent +
        ", utilityFee=" + utilityFee +
        ", amenityFee=" + amenityFee +
        ", technologyFee=" + technologyFee +
        ", startDate=" + startDate +
        ", endDate=" + endDate +
        "}";
    }



}
