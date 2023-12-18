package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Lease;
import org.springframework.data.repository.CrudRepository;

public interface LeaseRepository extends CrudRepository<Lease, Integer> {
}
