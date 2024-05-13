package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Transaction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Integer> {
    List<Transaction> findByTenantid(int tenantid);

//    Transaction save(Transaction transaction);

    //    Native Snowflake query, ID auto generate.
    @Query(value = "INSERT INTO TRANSACTION(TENANTID, TRANSACTIONID, TRANSACTIONTYPE, TRANSACTIONTIMESTAMP, ORDERID, TOTAL, STATUS, SOURCETYPE, CARDTYPE, LAST4) VALUES (:tenantid, :transactionId, :transactionType, :transactionTimestamp, :orderId, :total, :status, :sourceType, :cardType, :last4)", nativeQuery = true)
    void save(int tenantid, String transactionId, String transactionType, String transactionTimestamp, String orderId, double total, String status, String sourceType, String cardType, String last4);
}
