package com.shortstack.griddle.repository;

import org.springframework.data.repository.CrudRepository;
import com.shortstack.griddle.model.Landlord;
import java.util.List;

public interface LandlordRepository extends CrudRepository<Landlord, Integer> {

}
