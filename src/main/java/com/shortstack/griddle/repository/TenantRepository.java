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

    @Query(value = "INSERT INTO TENANT(FIRSTNAME, LASTNAME, EMAIL, PHONE, USERNAME, PASSWORD, BALANCE) VALUES (:firstname, :lastname, :email, :phone, :username, :password, :balance)", nativeQuery = true)
    void createTenant(@Param("firstname") String firstname, @Param("lastname") String lastname, @Param("email") String email, @Param("phone") String phone, @Param("username") String username, @Param("password") String password, @Param("balance") double balance);

    @Query(value = "DELETE FROM TENANT WHERE ID = :id", nativeQuery = true)
    void deleteById(int id);
}

