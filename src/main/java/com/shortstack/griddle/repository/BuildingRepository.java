package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Building;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BuildingRepository extends CrudRepository<Building, Integer> {
    List<Building> findAll();

    List<Building> findAllByLandlordid(int landlordid);

    Building findByBuildingname(String buildingname);

    @Query(value = "INSERT INTO BUILDING(LANDLORDID, BUILDINGNAME, STREETNAME, CITY, STATE, ZIP) VALUES (:landlordid, :buildingname, :streetname, :city, :state, :zip)", nativeQuery = true)
    void createBuilding(@Param("landlordid") int landlordid, @Param("buildingname") String buildingname, @Param("streetname") String streetname, @Param("city") String city, @Param("state") String state, @Param("zip") String zip);

    @Query(value = "DELETE FROM BUILDING WHERE ID = :id", nativeQuery = true)
    void deleteById(int id);

    @Query(value = 
    "SELECT BUILDING.* FROM BUILDING INNER JOIN APARTMENT ON BUILDING.ID = APARTMENT.BUILDINGID  INNER JOIN LEASE ON APARTMENT.ID = LEASE.APARTMENTID  INNER JOIN TENANT ON TENANT.ID = LEASE.TENANTID WHERE TENANT.ID = :tenantid", nativeQuery = true)
    <T>
    List<T> getTenantBuilding(@Param("tenantid") int tenantid);
}
