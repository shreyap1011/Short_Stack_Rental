package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Tenant;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TenantRepository extends CrudRepository<Tenant, Integer> {
    List<Tenant> findAll();

    Tenant findByUsername(String username);

    Tenant findById(int it);

    //Native Snowflake query, ID auto generate.
    @Query(value = "INSERT INTO TENANT(FIRSTNAME, LASTNAME, EMAIL, PHONE, USERNAME, PASSWORD, BALANCE) VALUES (:firstname, :lastname, :email, :phone, :username, :password, :balance);", nativeQuery = true)
    void createTenant(@Param("firstname") String firstname, @Param("lastname") String lastname, @Param("email") String email, @Param("phone") String phone, @Param("username") String username, @Param("password") String password, @Param("balance") double balance);

    @Query(value = "SELECT TENANT_ID.NEXTVAL -1", nativeQuery = true)
    Integer lastTenantid();

    @Query(value = "SELECT TENANT.* FROM TENANT INNER JOIN LEASE ON TENANT.ID = LEASE.TENANTID  INNER JOIN APARTMENT ON APARTMENT.ID = LEASE.APARTMENTID  INNER JOIN BUILDING ON BUILDING.ID = APARTMENT.BUILDINGID INNER JOIN LANDLORD ON LANDLORD.ID = BUILDING.LANDLORDID WHERE LANDLORD.ID = :landlordid", nativeQuery = true)
    <T>
    List<T> findTenantByLandlordid(@Param("landlordid") int landlordid);

    @Query(value = "UPDATE TENANT SET FIRSTNAME=:firstname, LASTNAME=:lastname, EMAIL=:email, PHONE=:phone, USERNAME=:username, PASSWORD=:password, BALANCE=:balance WHERE ID =:id", nativeQuery = true)
    <T>
    List<T> updateTenant(@Param("firstname") String firstname, @Param("lastname") String lastname, @Param("email") String email, @Param("phone") String phone, @Param("username") String username, @Param("password") String password, @Param("balance") double balance, @Param("id") int id);

    @Query(value = "UPDATE TENANT SET BALANCE= (BALANCE+:balance) where ID=:id", nativeQuery = true)
    void updateTenantBalance(@Param("balance") double balance, @Param("id") int id);

    @Query(value = "DELETE FROM TENANT WHERE ID = :id", nativeQuery = true)
    void deleteById(int id);
}

