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

    @Query(value = "SELECT LEASE.ID, LEASE.TENANTID, LEASE.APARTMENTID, LEASE.STARTDATE, LEASE.ENDDATE, LEASE.RENT, LEASE.UTILITYFEE, LEASE.AMENITYFEE, LEASE.TECHNOLOGYFEE FROM LEASE INNER JOIN APARTMENT ON APARTMENT.ID = LEASE.APARTMENTID INNER JOIN BUILDING ON BUILDING.ID = APARTMENT.BUILDINGID INNER JOIN LANDLORD ON LANDLORD.ID = BUILDING.LANDLORDID WHERE LANDLORD.ID = :landlordid", nativeQuery = true)
    <T>
    List<T> findLeaseByLandlordid(@Param("landlordid") int landlordid);

    Lease findByTenantid(int tenantid);

    Lease findByApartmentid(int apartmentid);

    @Query(value = "INSERT INTO LEASE(TENANTID, APARTMENTID, STARTDATE, ENDDATE, RENT, UTILITYFEE, AMENITYFEE, TECHNOLOGYFEE) " +
            "VALUES (:tenantid, :apartmentid, :startdate, :enddate, :rent, :utilityfee, :amenityfee, :technologyfee)", nativeQuery = true)
    void createLease(@Param("tenantid") int tenantid, @Param("apartmentid") int apartmentid, @Param("startdate") Date startdate,
                      @Param("enddate") Date enddate, @Param("rent") double rent, @Param("utilityfee") double utilityfee,
                      @Param("amenityfee") double amenityfee, @Param("technologyfee") double technologyfee);

    @Query(value = "DELETE FROM LEASE WHERE ID = :id", nativeQuery = true)
    void deleteById(int id);
}
