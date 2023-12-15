package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
public class Building {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer buildingID;
    private Integer addressID;
    private Integer userID;
    private String buildingName;
    
    public Building() {
    }

    public Building(Integer buildingID, Integer addressID, Integer userID, String buildingName) {
        this.buildingID = buildingID;
        this.addressID = addressID;
        this.userID = userID;
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

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
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
        ", userID=" + userID + 
        ", buildingName=" + buildingName +
         "}";
    }

}

