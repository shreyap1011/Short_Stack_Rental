package com.shortstack.griddle.model;

import com.google.gson.annotations.SerializedName;
import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.SEQUENCE;


@Entity
@Table(name = "TRANSACTION")
public class Transaction {
    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "TENANTID")
    private Integer tenantid;

    @Column(name = "TRANSACTIONID")
    private String transactionId;

    @Column(name = "TRANSACTIONTYPE")
    private String transactionType;

    @Column(name = "TRANSACTIONTIMESTAMP")
    private String transactionTimestamp;

    @Column(name = "ORDERID")
    private String orderId;

    @Column(name = "total")
    private Double total;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "SOURCETYPE")
    private String sourceType;

    @Column(name = "CARDTYPE")
    private String cardType;

    @Column(name = "LAST4")
    private String last4;

    public Transaction() {
    }

    public Transaction(int tenantid, String transactionId, String transactionType, String transactionTimestamp, String orderId, Double total, String status, String sourceType, String cardType, String last4) {
        this.tenantid = tenantid;
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.transactionTimestamp = transactionTimestamp;
        this.orderId = orderId;
        this.total = total;
        this.status = status;
        this.sourceType = sourceType;
        this.cardType = cardType;
        this.last4 = last4;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTenantid() {
        return tenantid;
    }

    public void setTenantid(Integer tenantid) {
        this.tenantid = tenantid;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getSourceType() {
        return sourceType;
    }

    public void setSourceType(String sourceType) {
        this.sourceType = sourceType;
    }

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public String getLast4() {
        return last4;
    }

    public void setLast4(String last4) {
        this.last4 = last4;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", tenantid='" + tenantid + '\'' +
                ", transactionId='" + transactionId + '\'' +
                ", transactionType='" + transactionType + '\'' +
                ", orderId='" + orderId + '\'' +
                ", total=" + total +
                ", status='" + status + '\'' +
                ", sourceType='" + sourceType + '\'' +
                ", cardType='" + cardType + '\'' +
                ", last4='" + last4 + '\'' +
                '}';
    }
}
