package com.shortstack.griddle.model;

import jakarta.persistence.*;
import java.sql.Date;
// import java.util.List;

@Entity
@Table(name = "LEASE")
public class Lease {
    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "TENANTID")
    private Integer tenantid;

    @Column(name = "APARTMENTID")
    private Integer apartmentid;

    @Column(name = "STARTDATE")
    private Date startdate;

    @Column(name = "ENDDATE")
    private Date enddate;

    @Column(name = "RENT")
    private double rent;

    public Lease(){}

    public Lease(int tenantid, int apartmentid, Date startdate, Date enddate, double rent) {
        this.tenantid = tenantid;
        this.apartmentid = apartmentid;
        this.startdate = startdate;
        this.enddate = enddate;
        this.rent = rent;
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

    @Override
    public String toString() {
        return "Lease{" +
                "leaseId=" + id +
                ", tenantid=" + tenantid +
                ", apartmentid=" + apartmentid +
                ", startdate=" + startdate +
                ", enddate=" + enddate +
                ", rent=" + rent +
                '}';
    }
}
