package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
@Table(name = "APARTMENT")
public class Apartment {

   @Id
   @Column(name = "ID")
   private Integer id;

   @Column(name = "BUILDINGID")
   private Integer buildingid;

   @Column(name = "APARTMENTNUMBER")
   private String apartmentnumber;

   public Apartment() {
   }

   public Apartment(int buildingid, String apartmentnumber) {
       this.buildingid = buildingid;
       this.apartmentnumber = apartmentnumber;
   }

   public Integer getApartmentID() {
       return id;
   }

   public void setApartmentID(Integer apartmentID) {
       this.id = apartmentID;
   }

    public Integer getBuildingid() {
        return buildingid;
    }

    public void setBuildingid(Integer buildingid) {
        this.buildingid = buildingid;
    }

    public String getApartmentnumber() {
        return apartmentnumber;
    }

    public void setApartmentnumber(String apartmentnumber) {
        this.apartmentnumber = apartmentnumber;
    }

    @Override
   public String toString() {
       return "Apartment{" +
       "apartmentID=" + id +
       ", buildingID=" + buildingid +
       ", apartmentNumber=" + apartmentnumber +
       "}";
   }


}
