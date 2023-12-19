package com.shortstack.griddle.model;

import jakarta.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "LEASE")
public class Lease {
    @Id
    @Column(name = "ID")
    private int id;

    @Column(name = "TENANTID")
    private int tenantid;

    @Column(name = "APARTMENTID")
    private int apartmentid;

    @Column(name = "STARTDATE")
    private Date startdate;

    @Column(name = "ENDDATE")
    private Date enddate;

    @Column(name = "RENT")
    private double rent;

    @Column(name = "UTILITYFEE")
    private double utilityfee;

    @Column(name = "AMENITYFEE")
    private double amenityfee;

    @Column(name = "TECHNOLOGYFEE")
    private double technologyfee;

    public Lease(){}

    public Lease(int tenantid, int apartmentid, Date startdate, Date enddate, double rent, double utilityfee, double amenityfee, double technologyfee) {
        this.tenantid = tenantid;
        this.apartmentid = apartmentid;
        this.startdate = startdate;
        this.enddate = enddate;
        this.rent = rent;
        this.utilityfee = utilityfee;
        this.amenityfee = amenityfee;
        this.technologyfee = technologyfee;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTenantid() {
        return tenantid;
    }

    public void setTenantid(int tenantid) {
        this.tenantid = tenantid;
    }

    public int getApartmentid() {
        return apartmentid;
    }

    public void setApartmentid(int apartmentid) {
        this.apartmentid = apartmentid;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEnddate() {
        return enddate;
    }

    public void setEnddate(Date enddate) {
        this.enddate = enddate;
    }

    public double getRent() {
        return rent;
    }

    public void setRent(double rent) {
        this.rent = rent;
    }

    public double getUtilityfee() {
        return utilityfee;
    }

    public void setUtilityfee(double utilityfee) {
        this.utilityfee = utilityfee;
    }

    public double getAmenityfee() {
        return amenityfee;
    }

    public void setAmenityfee(double amenityfee) {
        this.amenityfee = amenityfee;
    }

    public double getTechnologyfee() {
        return technologyfee;
    }

    public void setTechnologyfee(double technologyfee) {
        this.technologyfee = technologyfee;
    }

    @Override
    public String toString() {
        return "Lease{" +
                "leaseId=" + id +
                ", tenantid=" + tenantid +
                ", apartmentid=" + apartmentid +
                ", startdate=" + startdate +
                ", enddate=" + enddate +
                ", rent=" + rent +
                ", utilityfee=" + utilityfee +
                ", amenityfee=" + amenityfee +
                ", technologyfee=" + technologyfee +
                '}';
    }
}
