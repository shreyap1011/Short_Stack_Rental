package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Apartment;
import com.shortstack.griddle.model.Building;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApartmentRepository extends CrudRepository<Apartment, Integer> {
    List<Apartment> findAll();

    List<Apartment> findApartmentsByBuildingid(int buildingid);

    Apartment findByApartmentnumber(String apartmentnumber);

    @Query(value = "INSERT INTO APARTMENT(BUILDINGID, APARTMENTNUMBER) VALUES (:buildingid, :apartmentnumber)", nativeQuery = true)
    void createApartment(@Param("buildingid") int buildingid, @Param("apartmentnumber") String apartmentnumber);

    @Query(value = "DELETE FROM APARTMENT WHERE ID = :id", nativeQuery = true)
    void deleteById(int id);
}
