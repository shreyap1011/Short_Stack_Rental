package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Landlord;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LandlordRepository extends CrudRepository<Landlord, Integer> {
    Landlord findByUsername(String username);

    //Native Snowflake query, ID auto generate.
    @Query(value = "INSERT INTO LANDLORD(FIRSTNAME, LASTNAME, EMAIL, PHONE, USERNAME, PASSWORD) VALUES (:firstname, :lastname, :email, :phone, :username, :password)", nativeQuery = true)
    void createLandlord(@Param("firstname") String firstname, @Param("lastname") String lastname, @Param("email") String email, @Param("phone") String phone, @Param("username") String username, @Param("password") String password);

    @Query(value = "UPDATE LANDLORD SET FIRSTNAME=:firstname, LASTNAME=:lastname, EMAIL=:email, PHONE=:phone, USERNAME=:username, PASSWORD=:password WHERE ID =:id", nativeQuery = true)
    <T>
    List<T> updateLandlord(@Param("firstname") String firstname, @Param("lastname") String lastname, @Param("email") String email, @Param("phone") String phone, @Param("username") String username, @Param("password") String password, @Param("id") int id);

    @Query(value = "SELECT LANDLORD_ID.NEXTVAL -1", nativeQuery = true)
    Integer lastLandlordid();

    @Query(value = "DELETE FROM LANDLORD WHERE ID = :id", nativeQuery = true)
    void deleteById(int id);
}
