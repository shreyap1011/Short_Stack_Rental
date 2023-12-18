package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
@Table(name = "BUILDING")
public class Building {
    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "LANDLORDID")
    private Integer landlordid;

    @Column(name = "BUILDINGNAME")
    private String buildingname;

    @Column(name = "STREETNAME")
    private String streetname;

    @Column(name = "CITY")
    private String city;

    @Column(name = "STATE")
    private String state;

    @Column(name = "ZIP")
    private String zip;

    public Building() {
    }

    public Building(Integer landlordid, String buildingname, String streetname, String city, String state, String zip) {
        this.landlordid = landlordid;
        this.buildingname = buildingname;
        this.streetname = streetname;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getLandlordid() {
        return landlordid;
    }

    public void setLandlordid(int landlordid) {
        this.landlordid = landlordid;
    }

    public String getBuildingname() {
        return buildingname;
    }

    public void setBuildingname(String buildingname) {
        this.buildingname = buildingname;
    }

    public String getStreetname() {
        return streetname;
    }

    public void setStreetname(String streetname) {
        this.streetname = streetname;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    @Override
    public String toString() {
        return "Building{" +
                "buildingId=" + id +
                ", landlordId=" + landlordid +
                ", buildingname='" + buildingname + '\'' +
                ", streetname='" + streetname + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip='" + zip + '\'' +
                '}';
    }
}

