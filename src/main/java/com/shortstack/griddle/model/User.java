package com.shortstack.griddle.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
     // FIELDS
    // @id means id will auto generate

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userID;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String username;
    private String password;
    private Boolean isLandlord;

    public User() {
    }

    public User(Integer userID, String firstName, String lastName, String email, String phone, String username, String password, Boolean isLandlord) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
        this.isLandlord = isLandlord;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public Boolean getIsLandlord() {
        return isLandlord;
    }

    public void setIsLandlord(Boolean isLandlord) {
        this.isLandlord = isLandlord;
    }

    @Override
    public String toString() {
        return "User{" +
        "userID=" + userID + 
        ", firstName=" + firstName + 
        ", lastName=" + lastName + 
        ", email=" + email + 
        ", phone=" + phone + 
        ", username=" + username + 
        ", password=" + password + 
        ", isLandlord=" + isLandlord + 
        "}";
}

    
}
