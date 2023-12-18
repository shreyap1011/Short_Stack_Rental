//package com.shortstack.griddle.model;
//
//import jakarta.persistence.*;
//
//@Entity
//public class Landlord {
//    // @id means id will auto generate
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer landlordID;
//    private String firstName;
//    private String lastName;
//    private String email;
//    private String phone;
//    private String username;
//    private String password;
//
//    public Landlord() {
//    }
//
//    public Landlord(Integer landlordID, String firstName, String lastName, String email, String phone, String username,
//            String password, Boolean isLandlord) {
//        this.landlordID = landlordID;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.email = email;
//        this.phone = phone;
//        this.username = username;
//        this.password = password;
//    }
//
//    public Integer getLandlordID() {
//        return landlordID;
//    }
//
//    public void setLandlordID(Integer landlordID) {
//        this.landlordID = landlordID;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    @Override
//    public String toString() {
//        return "Landlord{" +
//                "landlordID=" + landlordID +
//                ", firstName=" + firstName +
//                ", lastName=" + lastName +
//                ", email=" + email +
//                ", phone=" + phone +
//                ", username=" + username +
//                ", password=" + password +
//                "}";
//    }
//
//}
