package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Bill;

import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
// import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BillRepository extends CrudRepository<Bill, Integer> {
    List<Bill> findAll();

    Bill findAllByLeaseid(int leaseid);

    @Query(value = "INSERT INTO BILL(LEASEID, DESCRIPTION, AMOUNT) VALUES (:leaseid, :description, :amount)", nativeQuery = true)
    void createBill(@Param("leaseid") Integer leaseid, @Param("description") String description, @Param("amount") Double amount);

    @Query(value = "DELETE FROM BILL WHERE ID = :id", nativeQuery = true)
    void deleteById(int id);
}
