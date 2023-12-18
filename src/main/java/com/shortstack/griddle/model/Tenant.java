package com.shortstack.griddle.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "TENANT")
public class Tenant {
    //ID column is auto incrementing using Snowflake Sequence, therefore not in the constructor.
    //Decided to let backend + Snowflake generate table ID due to register should not know
    // tenant item at creation. Therefore not passed by the front end.
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

    @Column(name = "BALANCE")
    private Double balance;

    public Tenant() {
    }

    public Tenant(String firstname, String lastname, String email, String phone, String username, String password, Double balance) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
        this.balance = balance;
    }


    public Integer getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstname;
    }

    public void setFirstName(String firstname) {
        this.firstname = firstname;
    }

    public String getLastName() {
        return this.lastname;
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


    public Double getBalance() {
        return balance;
    }


    public void setBalance(Double balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Tenant{" +
                "tenantId=" + id +
                ", firstname=" + firstname +
                ", lastname=" + lastname +
                ", email=" + email +
                ", phone=" + phone +
                ", username=" + username +
                ", password=" + password +
                ", balance=" + balance +
                "}";
    }
}
