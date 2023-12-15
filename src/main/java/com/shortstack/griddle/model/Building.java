package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
public class Building {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer buildingID;
    private Integer addressID;
    private Integer landlordID;
    private String buildingName;
    
    public Building() {
    }

    public Building(Integer buildingID, Integer addressID, Integer landlordID, String buildingName) {
        this.buildingID = buildingID;
        this.addressID = addressID;
        this.landlordID = landlordID;
        this.buildingName = buildingName;
    }

    public Integer getBuildingID() {
        return buildingID;
    }

    public void setBuildingID(Integer buildingID) {
        this.buildingID = buildingID;
    }

    public Integer getAddressID() {
        return addressID;
    }

    public void setAddressID(Integer addressID) {
        this.addressID = addressID;
    }

    public Integer landlordID() {
        return landlordID;
    }

    public void setlandlordID(Integer landlordID) {
        this.landlordID = landlordID;
    }

    public String getbuildingName() {
        return buildingName;
    }

    public void setbuildingName(String buildingName) {
        this.buildingName = buildingName;
    }

    @Override
    public String toString() {
        return "Building{" + 
        "buildingID=" + buildingID + 
        ", addressID=" + addressID + 
        ", landlordID=" + landlordID + 
        ", buildingName=" + buildingName +
         "}";
    }

}

