package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
@Table(name = "LANDLORD")
public class Landlord {

    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "FIRSTNAME")
    private String firstname;

    @Column(name = "LASTNAME")
    private String lastname;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "PASSWORD")
    private String password;

    public Landlord() {
    }

    public Landlord(String firstname, String lastname, String email, String phone, String username,
            String password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }

    public Integer getLandlordID() {
        return this.id;
    }

    public void setLandlordID(Integer landlordID) {
        this.id = landlordID;
    }

    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstname) {
        this.firstname = firstname;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Landlord{" +
                "landlordID=" + id +
                ", firstname=" + firstname +
                ", lastname=" + lastname +
                ", email=" + email +
                ", phone=" + phone +
                ", username=" + username +
                ", password=" + password +
                "}";
    }

}
