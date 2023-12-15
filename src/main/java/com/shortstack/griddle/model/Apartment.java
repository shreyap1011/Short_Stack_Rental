package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
public class Apartment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer apartmentID;
    private Integer buildingID;
    private String apartmentNumber;
    
    public Apartment() {
    }

    public Apartment(Integer apartmentID, Integer buildingID, String apartmentNumber) {
        this.apartmentID = apartmentID;
        this.buildingID = buildingID;
        this.apartmentNumber = apartmentNumber;
    }

    public Integer getApartmentID() {
        return apartmentID;
    }

    public void setApartmentID(Integer apartmentID) {
        this.apartmentID = apartmentID;
    }

    public Integer getBuildingID() {
        return buildingID;
    }

    public void setBuildingID(Integer buildingID) {
        this.buildingID = buildingID;
    }

    public String getApartmentNumber() {
        return apartmentNumber;
    }

    public void setApartmentNumber(String apartmentNumber) {
        this.apartmentNumber = apartmentNumber;
    }

    @Override
    public String toString() {
        return "Apartment{" + 
        "apartmentID=" + apartmentID + 
        ", buildingID=" + buildingID + 
        ", apartmentNumber=" + apartmentNumber + 
        "}";
    }
    
    
}
