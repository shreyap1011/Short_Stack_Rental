package com.shortstack.griddle.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Address {
    // @id means id will auto generate

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer addressID;
    private String street;
    private String city;
    private String state;
    private String zip;

    public Address() {
    }

    public Address(Integer addressID, String street, String city, String state, String zip) {
        this.addressID = addressID;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    public Integer getAddressID() {
        return addressID;
    }

    public void setAddressID(Integer addressID) {
        this.addressID = addressID;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
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
        return "Address{" + 
        "addressID=" + addressID + ", street=" + street + ", city=" + city + ", state=" + state
                + ", zip=" + zip + "]";
    }
    

}
