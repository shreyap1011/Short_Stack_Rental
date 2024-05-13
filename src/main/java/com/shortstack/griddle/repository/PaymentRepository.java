package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Payment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends CrudRepository<Payment, Integer> {
    List<Payment> findAll();

    List<Payment> findByTenantid(int tenantid);

    @Query(value = "SELECT PAYMENT_ID.NEXTVAL -1", nativeQuery = true)
    Integer lastPaymentId();

    @Query(value = "UPDATE PAYMENT SET TENANTID=:tenantid, AMOUNT=:amount, PAYMENTDATE=:paymentdate, TYPE=:type, NOTE=:note WHERE ID =:id", nativeQuery = true)
    <T>
    List<T> updateTenant(@Param("tenantid") int tenantid, @Param("amount") double amount, @Param("paymentdate") String paymentdate, @Param("type") String type, @Param("note") String note, @Param("id") int id);


    // need to implement find all by tenants associated with landlord id

    @Query(value = "INSERT INTO PAYMENT(TENANTID, AMOUNT, PAYMENTDATE, TYPE, NOTE) VALUES (:tenantid, :amount, :paymentdate, :type, :note);", nativeQuery = true)
    void createPayment(@Param("tenantid")int tenantid, @Param("amount")double amount, @Param("paymentdate")String paymentdate, @Param("type") String type, @Param("note") String note);

}
