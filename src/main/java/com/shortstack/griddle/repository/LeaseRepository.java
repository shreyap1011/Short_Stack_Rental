package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Lease;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface LeaseRepository extends JpaRepository<Lease, Integer> {

    @Query(value = "SELECT LEASE.* FROM LEASE INNER JOIN APARTMENT ON APARTMENT.ID = LEASE.APARTMENTID INNER JOIN BUILDING ON BUILDING.ID = APARTMENT.BUILDINGID INNER JOIN LANDLORD ON LANDLORD.ID = BUILDING.LANDLORDID WHERE LANDLORD.ID = :landlordid", nativeQuery = true)
    <T>
    List<T> findLeaseByLandlordid(@Param("landlordid") int landlordid);

    Lease findByTenantid(int tenantid);

    Lease findByApartmentid(int apartmentid);


    @Query(value = "INSERT INTO LEASE(TENANTID, APARTMENTID, STARTDATE, ENDDATE, RENT) " +
            "VALUES (:tenantid, :apartmentid, :startdate, :enddate, :rent)", nativeQuery = true)
    void createLease(@Param("tenantid") int tenantid, @Param("apartmentid") int apartmentid, @Param("startdate") Date startdate, @Param("enddate") Date enddate, @Param("rent") double rent);

    @Query(value = "DELETE FROM LEASE WHERE ID = :id", nativeQuery = true)
    void deleteById(int id);
    @Query(value = "SELECT LEASE_ID.NEXTVAL -1", nativeQuery = true)
    Integer lastLeaseid();
}
