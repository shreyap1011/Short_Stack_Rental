package com.shortstack.griddle.model;

import jakarta.persistence.*;

@Entity
public class Tenant {
    // @id means id will auto generate

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tenantID;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String username;
    private String password;
    private Double balance;

    public Tenant() {
    }
    

    public Tenant(Integer tenantID, String firstName, String lastName, String email, String phone, String username, String password, Double balance) {
        this.tenantID = tenantID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
        this.balance = balance;
    }


    public Integer getTenantID() {
        return tenantID;
    }

      public void setTenantID(Integer tenantID) {
        this.tenantID = tenantID;
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


    public Double getBalance() {
        return balance;
    }


    public void setBalance(Double balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Tenant{" +
                "tenantID=" + tenantID +
                ", firstName=" + firstName +
                ", lastName=" + lastName +
                ", email=" + email +
                ", phone=" + phone +
                ", username=" + username +
                ", password=" + password +
                ", balance=" + balance +
                "}";
    }
}
