package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Building;
import com.shortstack.griddle.model.User;
import org.springframework.data.repository.CrudRepository;

public interface BuildingRepository extends CrudRepository<Building, Integer> {
}
