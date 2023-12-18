package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Address;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository extends CrudRepository<Address, Integer> {
}
