package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Lease;
import com.shortstack.griddle.model.User;
import org.springframework.data.repository.CrudRepository;

public interface LeaseRepository extends CrudRepository<Lease, Integer> {
}
